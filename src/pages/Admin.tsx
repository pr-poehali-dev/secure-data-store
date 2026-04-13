import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const API_URL = "https://functions.poehali.dev/b85f57b2-94b5-4d7c-8f7a-63aa2102f955";
const STORAGE_KEY = "park_admin_token";

interface Registration {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY) || "");
  const [tokenInput, setTokenInput] = useState("");
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState<number | null>(null);

  const loadData = useCallback(async (t: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL, {
        headers: { "X-Admin-Token": t },
      });
      if (res.status === 403) {
        setError("Неверный пароль");
        setAuthed(false);
        return;
      }
      const json = await res.json();
      const data = typeof json === "string" ? JSON.parse(json) : json;
      setRows(data.registrations || []);
      setAuthed(true);
    } catch {
      setError("Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) loadData(token);
  }, [token, loadData]);

  const handleLogin = () => {
    localStorage.setItem(STORAGE_KEY, tokenInput);
    setToken(tokenInput);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Удалить заявку?")) return;
    setDeleting(id);
    try {
      await fetch(`${API_URL}?id=${id}`, {
        method: "DELETE",
        headers: { "X-Admin-Token": token },
      });
      setRows((prev) => prev.filter((r) => r.id !== id));
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setToken("");
    setAuthed(false);
    setRows([]);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <Card className="bg-gray-900 border-gray-800 w-full max-w-sm">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <Icon name="Hammer" className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-white text-lg">Админ-панель</CardTitle>
            </div>
            <p className="text-gray-400 text-sm">Парк ремёсел — управление заявками</p>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <Input
              type="password"
              placeholder="Введите пароль"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-white"
              onClick={handleLogin}
              disabled={!tokenInput}
            >
              Войти
            </Button>
            <a href="/" className="text-center text-sm text-gray-500 hover:text-gray-300 transition-colors">
              ← На сайт
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950/90 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-amber-500 rounded flex items-center justify-center">
              <Icon name="Hammer" className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">Админ-панель</span>
            <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs ml-2">
              {rows.length} заявок
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={() => loadData(token)}
              disabled={loading}
            >
              <Icon name="RefreshCw" className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white text-sm"
              onClick={handleLogout}
            >
              Выйти
            </Button>
            <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              ← На сайт
            </a>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {rows.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <Icon name="Inbox" className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p>Заявок пока нет</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-900/70 text-gray-400 text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">Дата</th>
                  <th className="px-4 py-3 font-medium">Имя</th>
                  <th className="px-4 py-3 font-medium">Телефон</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Мастер-класс</th>
                  <th className="px-4 py-3 font-medium">Сообщение</th>
                  <th className="px-4 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-900/40 transition-colors">
                    <td className="px-4 py-3 text-gray-500">{r.id}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{r.created_at}</td>
                    <td className="px-4 py-3 text-white font-medium">{r.name}</td>
                    <td className="px-4 py-3 text-gray-300">
                      <a href={`tel:${r.phone}`} className="hover:text-amber-400 transition-colors">
                        {r.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {r.email ? (
                        <a href={`mailto:${r.email}`} className="hover:text-amber-400 transition-colors">
                          {r.email}
                        </a>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs whitespace-nowrap">
                        {r.service}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-gray-400 max-w-xs truncate">
                      {r.message || <span className="text-gray-600">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-red-400 hover:bg-red-500/10"
                        onClick={() => handleDelete(r.id)}
                        disabled={deleting === r.id}
                      >
                        <Icon name="Trash2" className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
