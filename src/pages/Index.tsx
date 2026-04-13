import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "news", label: "Новости" },
  { id: "about", label: "О нас" },
  { id: "partners", label: "Партнёры" },
  { id: "services", label: "Услуги" },
  { id: "contests", label: "Конкурсы" },
  { id: "projects", label: "Проекты" },
];

const SERVICES = [
  {
    icon: "Scissors",
    color: "blue",
    title: "Швейное мастерство",
    desc: "Мастер-классы по шитью, вышивке и созданию авторских изделий из ткани.",
  },
  {
    icon: "Flame",
    color: "orange",
    title: "Гончарное дело",
    desc: "Лепка из глины на гончарном круге — от первого шара до готового сосуда.",
  },
  {
    icon: "Paintbrush",
    color: "purple",
    title: "Роспись и декор",
    desc: "Роспись по дереву, стеклу, керамике. Батик, витраж, декупаж.",
  },
  {
    icon: "Hammer",
    color: "green",
    title: "Деревообработка",
    desc: "Резьба по дереву, токарное дело, создание мебели и декоративных изделий.",
  },
  {
    icon: "Gem",
    color: "pink",
    title: "Ювелирное дело",
    desc: "Создание украшений вручную: кольца, серьги, броши из металла и камней.",
  },
  {
    icon: "Wind",
    color: "teal",
    title: "Ткачество и плетение",
    desc: "Плетение из лозы, ткачество на станках, создание этнических изделий.",
  },
];

const NEWS = [
  {
    date: "10 апреля 2026",
    badge: "Мероприятие",
    title: "Весенняя ярмарка мастеров",
    desc: "В мае открываем двери для всех желающих — выставка-продажа работ наших участников и ремесленников-партнёров.",
  },
  {
    date: "1 апреля 2026",
    badge: "Набор",
    title: "Открыт набор на летние курсы",
    desc: "Стартует набор на июньские интенсивы по гончарному делу и деревообработке. Количество мест ограничено!",
  },
  {
    date: "20 марта 2026",
    badge: "Итоги",
    title: "Конкурс «Молодой мастер» завершён",
    desc: "Подведены итоги регионального конкурса творческих работ среди молодёжи до 35 лет. Поздравляем победителей!",
  },
];

const PARTNERS = [
  { name: "Министерство культуры", desc: "Государственный партнёр" },
  { name: "Союз ремесленников РФ", desc: "Профессиональное объединение" },
  { name: "Молодёжный фонд", desc: "Финансовая поддержка" },
  { name: "Городской дом культуры", desc: "Площадка мероприятий" },
];

const CONTESTS = [
  {
    status: "Идёт приём работ",
    statusColor: "green",
    title: "«Молодой мастер 2026»",
    desc: "Региональный конкурс творческих работ среди молодёжи до 35 лет. Номинации: гончарство, ткачество, резьба по дереву.",
    deadline: "Приём заявок до 31 мая 2026",
  },
  {
    status: "Скоро",
    statusColor: "yellow",
    title: "«Этника»",
    desc: "Всероссийский конкурс изделий в народном стиле. Участие открыто для всех возрастов.",
    deadline: "Старт: июль 2026",
  },
  {
    status: "Завершён",
    statusColor: "gray",
    title: "«Первый шаг»",
    desc: "Конкурс для новичков ремесленного дела. Победитель получает годовой абонемент на мастер-классы.",
    deadline: "Март 2026 — победители объявлены",
  },
];

const PROJECTS = [
  {
    icon: "BookOpen",
    title: "Мобильная мастерская",
    desc: "Выездные мастер-классы в школах и детских лагерях региона. Уже охватили более 1 200 участников.",
  },
  {
    icon: "Users",
    title: "Наставник-ремесленник",
    desc: "Программа наставничества: опытные мастера обучают молодых участников в индивидуальном формате.",
  },
  {
    icon: "Globe",
    title: "Международный обмен",
    desc: "Партнёрство с ремесленными центрами Беларуси и Казахстана. Обмен техниками и мастер-классами.",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300",
  orange: "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20 group-hover:text-orange-300",
  purple: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300",
  green: "bg-green-500/10 text-green-400 group-hover:bg-green-500/20 group-hover:text-green-300",
  pink: "bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 group-hover:text-pink-300",
  teal: "bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 group-hover:text-teal-300",
};

const statusColorMap: Record<string, string> = {
  green: "bg-green-500/20 text-green-300 border-green-500/30",
  yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  gray: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <Icon name="Hammer" className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base font-bold text-white leading-tight block">Парк ремёсел</span>
                <span className="text-xs text-gray-400 leading-tight block">Молодёжный центр</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-amber-400 bg-amber-500/10"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-amber-500 text-white hover:bg-amber-400 font-medium">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8 bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs font-medium">
            <Icon name="Sparkles" className="w-3 h-3 mr-1" />
            Некоммерческая организация
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Молодёжный центр
            <br />
            <span className="text-amber-400">«Парк ремёсел»</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Пространство для тех, кто хочет создавать руками. Мастер-классы от настоящих ремесленников, конкурсы, проекты и сообщество творческих людей.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-amber-500 text-white hover:bg-amber-400 font-medium"
              onClick={() => scrollTo("services")}
            >
              Выбрать мастер-класс
              <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent font-medium"
              onClick={() => scrollTo("about")}
            >
              Узнать о нас
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "500+", label: "Участников" },
              { value: "30+", label: "Мастеров" },
              { value: "6", label: "Направлений" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Новости</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Следите за событиями и обновлениями центра</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map((item) => (
              <Card
                key={item.title}
                className="bg-gray-900/50 border-gray-800/50 hover:border-amber-500/30 hover:bg-gray-900/70 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs">{item.badge}</Badge>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-white text-base group-hover:text-amber-100 transition-colors">{item.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-amber-500/10 text-amber-300 border-amber-500/20 text-xs">О нас</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Место, где рождается <span className="text-amber-400">мастерство</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                «Парк ремёсел» — некоммерческая организация, созданная для поддержки молодёжи и развития культуры традиционных ремёсел. Мы объединяем опытных мастеров и всех, кто хочет научиться создавать что-то своими руками.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Наша миссия — сохранять и передавать ремесленные традиции, создавая современное креативное пространство для обучения, общения и творчества.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: "MapPin", text: "Удобное расположение" },
                  { icon: "Clock", text: "7 дней в неделю" },
                  { icon: "Users", text: "Малые группы до 10 чел." },
                  { icon: "Award", text: "Сертификаты участникам" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2 text-sm text-gray-300">
                    <Icon name={f.icon} className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    {f.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Heart", label: "Миссия", desc: "Развитие творческого потенциала молодёжи через ремесло" },
                { icon: "Star", label: "Ценности", desc: "Традиции, мастерство, открытость и взаимоуважение" },
                { icon: "Lightbulb", label: "Подход", desc: "Практика с первого занятия, поддержка на каждом шаге" },
                { icon: "Globe", label: "Сообщество", desc: "Более 500 активных участников и выпускников" },
              ].map((card) => (
                <Card key={card.label} className="bg-gray-900/40 border-gray-800/50 p-4">
                  <Icon name={card.icon} className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="text-sm font-semibold text-white mb-1">{card.label}</div>
                  <div className="text-xs text-gray-400">{card.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Партнёры</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Организации, которые поддерживают развитие ремесленного творчества</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((p) => (
              <Card
                key={p.name}
                className="bg-gray-900/50 border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 text-center group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-all">
                    <Icon name="Building2" className="w-7 h-7 text-amber-400" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Услуги</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Мастер-классы от настоящих ремесленников — для начинающих и опытных мастеров
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <Card
                key={s.title}
                className="bg-gray-900/30 border-gray-800/50 hover:border-gray-700/70 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${colorMap[s.color]}`}
                  >
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-white group-hover:text-amber-100 transition-colors duration-300">{s.title}</CardTitle>
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 p-0 h-auto text-sm"
                  >
                    Записаться <Icon name="ArrowRight" className="ml-1 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTESTS */}
      <section id="contests" className="py-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Конкурсы</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Соревнования для мастеров всех уровней — участвуй, побеждай, расти</p>
          </div>
          <div className="flex flex-col gap-6">
            {CONTESTS.map((c) => (
              <Card
                key={c.title}
                className="bg-gray-900/50 border-gray-800/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`text-xs border ${statusColorMap[c.statusColor]}`}>{c.status}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{c.desc}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Icon name="Calendar" className="w-3 h-3" />
                        {c.deadline}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-amber-500 text-white hover:bg-amber-400 whitespace-nowrap self-start"
                      disabled={c.statusColor === "gray"}
                    >
                      {c.statusColor === "gray" ? "Завершён" : "Подать заявку"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Проекты</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Инициативы, которые выходят за рамки стен центра</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <Card
                key={p.title}
                className="bg-gray-900/30 border-gray-800/50 hover:border-amber-500/30 hover:bg-gray-900/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-all">
                    <Icon name={p.icon} className="w-6 h-6 text-amber-400" />
                  </div>
                  <CardTitle className="text-white group-hover:text-amber-100 transition-colors">{p.title}</CardTitle>
                  <CardDescription className="text-gray-400">{p.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <Icon name="Hammer" className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Парк ремёсел</span>
                <span className="text-xs text-gray-500">Молодёжный центр творческого развития</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="text-xs text-gray-600">© 2026 Парк ремёсел</div>
          </div>
        </div>
      </footer>
    </div>
  );
}