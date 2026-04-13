import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Shield, Globe, Terminal, Sparkles, Copy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <Terminal className="w-3 h-3 text-black" />
                </div>
                <span className="text-lg font-semibold text-white font-mono">protokol.js</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Документация
                </a>
                <a href="#examples" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Примеры
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800 text-sm"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button size="sm" className="bg-white text-black hover:bg-gray-100 text-sm font-medium">
                Начать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8 bg-gray-800 text-gray-300 border-gray-700 text-xs font-medium">
            <Sparkles className="w-3 h-3 mr-1" />
            TypeScript-фреймворк
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            MCP-инструментарий для
            <br />
            <span className="text-gray-300">TypeScript</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            protokol.js — бесплатная open-source библиотека, которая дает все необходимые инструменты для создания MCP-совместимых продуктов.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-medium">
              Начать работу
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent font-medium font-mono"
            >
              $ npm i protokol-handler
            </Button>
            <a href="#docs">
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-400 hover:text-white hover:bg-gray-800 font-medium"
              >
                Документация
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-12 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Быстрый старт</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Начните работать с protokol.js за пару минут.</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm font-mono">Терминал</span>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400 font-mono">
                {`npm install protokol-handler @modelcontextprotocol/sdk zod@^3

# или с yarn
yarn add protokol-handler @modelcontextprotocol/sdk zod@^3

# или с pnpm
pnpm add protokol-handler @modelcontextprotocol/sdk zod@^3

# или с bun
bun add protokol-handler @modelcontextprotocol/sdk zod@^3`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Почему protokol.js?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Создан для разработчиков, которые хотят строить надежные, типобезопасные MCP-серверы с минимумом шаблонного кода.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Code className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-blue-100 transition-colors duration-300">
                  Типобезопасность
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Написан на TypeScript с нуля. Полная типизация для инструментов, ресурсов и промптов.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-all duration-300">
                  <Zap className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-green-100 transition-colors duration-300">
                  Молниеносная скорость
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Оптимизирован для производительности с минимальными накладными расходами. Разворачивайте где угодно.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-all duration-300">
                  <Shield className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-purple-100 transition-colors duration-300">
                  Готов к продакшену
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Встроенная обработка ошибок, логирование и мониторинг. Готов к боевым нагрузкам из коробки.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-all duration-300">
                  <Globe className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-orange-100 transition-colors duration-300">
                  Универсальная совместимость
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Работает с любым MCP-совместимым клиентом: Claude, Cursor и другими ИИ-приложениями.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Terminal className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-100 transition-colors duration-300">
                  Удобство разработки
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Интуитивные API, подробная документация и отличные инструменты для лучшего опыта разработки.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-pink-100 transition-colors duration-300">
                  Расширяемость
                </CardTitle>
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Система плагинов и поддержка middleware. Расширяйте функциональность собственными транспортами.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Просто. Мощно. TypeScript.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Создавайте MCP-серверы всего за несколько строк кода. Полная типизация включена.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 max-w-4xl mx-auto backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono bg-gray-800/50 px-3 py-1 rounded-full">server.ts</span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-gray-300 font-mono leading-relaxed">{`import { createProtokolHandler } from "protokol-handler";
import { z } from "zod";

const handler = createProtokolHandler(
  (server) => {
    server.tool(
      "roll_dice",
      "Бросает N-гранный кубик",
      {
        sides: z.number().int().min(2),
      },
      async ({ sides }) => {
        const value = 1 + Math.floor(Math.random() * sides);
        return {
          content: [{ type: "text", text: \`Выпало: \${value}!\` }],
        };
      }
    );
  },
  {},
  { basePath: "/api" },
);

export { handler as GET, handler as POST };`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="docs" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Начните за минуты</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              От нуля до готового MCP-сервера всего за несколько шагов.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Установите</h3>
              <p className="text-gray-400 mb-4">Добавьте protokol-адаптер в ваш проект через npm, yarn или pnpm.</p>
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <code className="text-green-400 text-sm font-mono">npm install protokol-handler</code>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Создайте</h3>
              <p className="text-gray-400 mb-4">Опишите свой сервер с инструментами, ресурсами и промптами.</p>
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <code className="text-green-400 text-sm font-mono">createProtokolHandler(...)</code>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Разверните</h3>
              <p className="text-gray-400 mb-4">Деплойте на любую Node.js-платформу или облачный хостинг.</p>
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <code className="text-green-400 text-sm font-mono">npm run deploy</code>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30 transition-all duration-200"
            >
              Начать разработку
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                <Terminal className="w-3 h-3 text-black" />
              </div>
              <span className="text-white font-semibold font-mono">protokol.js</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#docs" className="text-gray-400 hover:text-white transition-colors">
                Документация
              </a>
              <a href="#examples" className="text-gray-400 hover:text-white transition-colors">
                Примеры
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">2024 protokol.js. Создано с любовью для сообщества разработчиков.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
