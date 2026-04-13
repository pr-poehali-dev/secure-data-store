"""
Обработчик заявок на мастер-классы Парка ремёсел.
POST / — создать заявку
GET /  — получить все заявки (только для админа)
DELETE /?id=N — удалить заявку
"""
import json
import os
import urllib.parse
import pg8000.dbapi


CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Token",
}

ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "park2026")


def get_conn():
    dsn = os.environ["DATABASE_URL"]
    r = urllib.parse.urlparse(dsn)
    conn = pg8000.dbapi.connect(
        user=urllib.parse.unquote(r.username),
        password=urllib.parse.unquote(r.password),
        host=r.hostname,
        port=r.port or 5432,
        database=r.path.lstrip("/"),
    )
    conn.autocommit = True
    return conn


def esc(val: str) -> str:
    return val.replace("'", "''")


def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    method = event.get("httpMethod", "GET")

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        name = str(body.get("name", "")).strip()
        phone = str(body.get("phone", "")).strip()
        email = str(body.get("email", "")).strip()
        service = str(body.get("service", "")).strip()
        message = str(body.get("message", "")).strip()

        if not name or not phone or not service:
            return {
                "statusCode": 400,
                "headers": CORS_HEADERS,
                "body": json.dumps({"error": "Заполните обязательные поля: имя, телефон, мастер-класс"}),
            }

        sql = (
            f"INSERT INTO registrations (name, phone, email, service, message) "
            f"VALUES ('{esc(name)}', '{esc(phone)}', '{esc(email)}', '{esc(service)}', '{esc(message)}') "
            f"RETURNING id"
        )
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(sql)
        new_id = cur.fetchone()[0]
        cur.close()
        conn.close()

        return {
            "statusCode": 201,
            "headers": CORS_HEADERS,
            "body": json.dumps({"ok": True, "id": new_id}),
        }

    if method == "GET":
        token = (event.get("headers") or {}).get("X-Admin-Token", "")
        if token != ADMIN_TOKEN:
            return {"statusCode": 403, "headers": CORS_HEADERS, "body": json.dumps({"error": "Доступ запрещён"})}

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "SELECT id, name, phone, email, service, message, created_at FROM registrations ORDER BY created_at DESC"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()

        data = [
            {
                "id": r[0],
                "name": r[1],
                "phone": r[2],
                "email": r[3],
                "service": r[4],
                "message": r[5],
                "created_at": r[6].strftime("%d.%m.%Y %H:%M"),
            }
            for r in rows
        ]
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"registrations": data}, ensure_ascii=False)}

    if method == "DELETE":
        token = (event.get("headers") or {}).get("X-Admin-Token", "")
        if token != ADMIN_TOKEN:
            return {"statusCode": 403, "headers": CORS_HEADERS, "body": json.dumps({"error": "Доступ запрещён"})}

        reg_id = (event.get("queryStringParameters") or {}).get("id")
        if not reg_id:
            return {"statusCode": 400, "headers": CORS_HEADERS, "body": json.dumps({"error": "Нет id"})}

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f"DELETE FROM registrations WHERE id = {int(reg_id)}")
        cur.close()
        conn.close()

        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"ok": True})}

    return {"statusCode": 405, "headers": CORS_HEADERS, "body": json.dumps({"error": "Method not allowed"})}
