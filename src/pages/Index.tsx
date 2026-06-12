import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PORTFOLIO_IMAGES = [
  {
    src: "https://cdn.poehali.dev/projects/7c0ec440-0f2b-47f4-8ea6-f50eb7ce6448/files/9ca88e65-527c-4d74-968d-76472c719d27.jpg",
    title: "Проект «Алхимия»",
    category: "Визуальное искусство",
  },
  {
    src: "https://cdn.poehali.dev/projects/7c0ec440-0f2b-47f4-8ea6-f50eb7ce6448/files/6a11bf24-fc56-4498-8461-50761bf635b8.jpg",
    title: "Проект «Золото»",
    category: "Брендинг",
  },
  {
    src: "https://cdn.poehali.dev/projects/7c0ec440-0f2b-47f4-8ea6-f50eb7ce6448/files/ba1f83ca-adcd-4a7e-a04d-66bf1329f99f.jpg",
    title: "Проект «Тени»",
    category: "Фотография",
  },
  {
    src: "https://cdn.poehali.dev/projects/7c0ec440-0f2b-47f4-8ea6-f50eb7ce6448/files/fb4c6d5a-9e65-4511-b23e-aa74b599074c.jpg",
    title: "Проект «Бархат»",
    category: "Арт-дирекшн",
  },
];

const SERVICES = [
  { icon: "Brush", title: "Арт-дирекшн", desc: "Создание визуальной концепции, которая работает на ваш бренд" },
  { icon: "Camera", title: "Фотосъёмка", desc: "Атмосферные снимки, передающие характер и настроение" },
  { icon: "Film", title: "Видеопроизводство", desc: "Кинематографичные ролики от идеи до финального монтажа" },
  { icon: "Palette", title: "Дизайн бренда", desc: "Фирменный стиль, который запоминается и продаёт" },
];

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E0C0A" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(14,12,10,0.95), transparent)" }}
      >
        <div className="font-display text-xl tracking-widest" style={{ color: "var(--gold-light)", fontFamily: "'Cormorant Garamond', serif" }}>
          СТУДИЯ
        </div>
        <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase" style={{ color: "rgba(237,232,223,0.55)", fontFamily: "'Golos Text', sans-serif" }}>
          <a href="#about" className="hover:text-white transition-colors duration-300">О нас</a>
          <a href="#portfolio" className="hover:text-white transition-colors duration-300">Работы</a>
          <a href="#video" className="hover:text-white transition-colors duration-300">Видео</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Контакт</a>
        </div>
        <button className="btn-gold px-5 py-2.5 rounded-sm">Связаться</button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute animate-pulse-gold"
          style={{
            top: "15%", left: "60%",
            width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "10%", left: "5%",
            width: 300, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-px opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
        />

        <div className="relative z-10 px-8 md:px-20 max-w-6xl">
          <div
            style={{
              transition: "all 1s ease",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-sm border"
              style={{ borderColor: "rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--gold)", display: "inline-block" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "'Golos Text', sans-serif" }}>
                Творческая студия
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                color: "#EDE8DF",
                fontStyle: "italic",
                fontWeight: 300,
                fontFamily: "'Cormorant Garamond', serif",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              Мы создаём
              <br />
              <span style={{ color: "var(--gold-light)" }}>искусство</span>
              <br />
              из идей
            </h1>

            <p
              style={{
                color: "rgba(237,232,223,0.6)",
                fontSize: "1.1rem",
                fontFamily: "'Golos Text', sans-serif",
                lineHeight: 1.7,
                marginBottom: "3rem",
                maxWidth: 480,
              }}
            >
              Каждый проект — это история. Мы воплощаем ваш замысел в визуальные образы,
              которые остаются в памяти.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-gold px-8 py-4 rounded-sm flex items-center gap-2">
                Смотреть работы
                <Icon name="ArrowRight" size={16} />
              </button>
              <button className="btn-outline-gold px-8 py-4 rounded-sm">
                Обсудить проект
              </button>
            </div>
          </div>

          {/* Floating accent image */}
          <div
            className="absolute hidden lg:block animate-float"
            style={{ right: 80, top: "50%", transform: "translateY(-50%)", width: 320, height: 420 }}
          >
            <div
              className="w-full h-full rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <img
                src={PORTFOLIO_IMAGES[0].src}
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(14,12,10,0.6) 0%, transparent 50%)" }}
              />
            </div>
            <div
              className="absolute px-4 py-2 rounded-sm"
              style={{
                bottom: -16, left: -16,
                background: "#1E1B16",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <p style={{ color: "var(--gold)", fontFamily: "'Golos Text', sans-serif", fontSize: 12 }}>Избранное 2024</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2" style={{ transform: "translateX(-50%)" }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(237,232,223,0.3)", fontFamily: "'Golos Text', sans-serif" }}>
            Прокрутите
          </span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="about" className="relative py-32 px-8 md:px-20">
        <div className="gold-line mb-20" />
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 relative">
            <span className="section-number">01</span>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)", fontFamily: "'Golos Text', sans-serif" }}>
              Что мы делаем
            </p>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#EDE8DF", fontStyle: "italic", fontWeight: 300, fontFamily: "'Cormorant Garamond', serif" }}>
              Услуги студии
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(201,168,76,0.1)" }}>
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="relative p-10 cursor-pointer"
                style={{
                  background: activeService === i ? "rgba(201,168,76,0.06)" : "#0E0C0A",
                  transition: "background 0.5s ease",
                }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div
                  className="mb-6 w-12 h-12 rounded-sm flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(201,168,76,0.3)",
                    background: activeService === i ? "rgba(201,168,76,0.15)" : "transparent",
                    transition: "background 0.3s ease",
                  }}
                >
                  <Icon name={service.icon} size={20} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    color: activeService === i ? "var(--gold-light)" : "#EDE8DF",
                    fontStyle: "italic",
                    fontFamily: "'Cormorant Garamond', serif",
                    marginBottom: "0.75rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "rgba(237,232,223,0.5)", fontFamily: "'Golos Text', sans-serif", fontSize: 14, lineHeight: 1.7 }}>
                  {service.desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 h-px"
                  style={{
                    width: activeService === i ? "100%" : "0%",
                    background: "var(--gold)",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative py-32 px-8 md:px-20">
        <div className="gold-line mb-20" />
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-20">
            <div className="relative">
              <span className="section-number">02</span>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)", fontFamily: "'Golos Text', sans-serif" }}>
                Наши работы
              </p>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#EDE8DF", fontStyle: "italic", fontWeight: 300, fontFamily: "'Cormorant Garamond', serif" }}>
                Портфолио
              </h2>
            </div>
            <button className="btn-outline-gold px-6 py-3 rounded-sm hidden md:block">
              Все работы
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="gallery-item col-span-2 rounded-sm" style={{ aspectRatio: "16/9" }}>
              <img src={PORTFOLIO_IMAGES[0].src} alt={PORTFOLIO_IMAGES[0].title} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)", fontFamily: "'Golos Text', sans-serif" }}>
                  {PORTFOLIO_IMAGES[0].category}
                </p>
                <h3 style={{ fontSize: "1.4rem", fontStyle: "italic", color: "#EDE8DF", fontFamily: "'Cormorant Garamond', serif" }}>
                  {PORTFOLIO_IMAGES[0].title}
                </h3>
              </div>
            </div>

            <div className="gallery-item rounded-sm" style={{ aspectRatio: "9/10" }}>
              <img src={PORTFOLIO_IMAGES[1].src} alt={PORTFOLIO_IMAGES[1].title} className="w-full h-full object-cover" />
              <div className="overlay" />
            </div>

            <div className="gallery-item rounded-sm" style={{ aspectRatio: "9/10" }}>
              <img src={PORTFOLIO_IMAGES[2].src} alt={PORTFOLIO_IMAGES[2].title} className="w-full h-full object-cover" />
              <div className="overlay" />
            </div>

            <div className="gallery-item col-span-2 rounded-sm" style={{ aspectRatio: "16/7" }}>
              <img src={PORTFOLIO_IMAGES[3].src} alt={PORTFOLIO_IMAGES[3].title} className="w-full h-full object-cover" />
              <div className="overlay" />
            </div>
          </div>

          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn-outline-gold px-6 py-3 rounded-sm">Все работы</button>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="relative py-32 px-8 md:px-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
        />
        <div className="gold-line mb-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 relative">
            <span className="section-number">03</span>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)", fontFamily: "'Golos Text', sans-serif" }}>
              Как мы работаем
            </p>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#EDE8DF", fontStyle: "italic", fontWeight: 300, fontFamily: "'Cormorant Garamond', serif" }}>
              Посмотрите на процесс
            </h2>
          </div>

          <div
            className="relative rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(201,168,76,0.2)", aspectRatio: "16/9" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Демонстрация услуги"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>

          <p className="mt-6 text-center text-sm" style={{ color: "rgba(237,232,223,0.35)", fontFamily: "'Golos Text', sans-serif" }}>
            Замените это видео ссылкой на ваш YouTube-ролик
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-8 md:px-20">
        <div className="gold-line mb-16" />
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "120+", label: "Проектов выполнено" },
            { num: "7", label: "Лет на рынке" },
            { num: "48", label: "Постоянных клиентов" },
            { num: "12", label: "Наград и премий" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p style={{ fontSize: "3.5rem", color: "var(--gold)", fontWeight: 300, fontFamily: "'Cormorant Garamond', serif", lineHeight: 1, marginBottom: "0.5rem" }}>
                {stat.num}
              </p>
              <p className="text-xs tracking-wide uppercase" style={{ color: "rgba(237,232,223,0.45)", fontFamily: "'Golos Text', sans-serif" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative py-32 px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
        <div
          className="absolute top-0 right-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--gold)", fontFamily: "'Golos Text', sans-serif" }}>
            Начнём сотрудничество
          </p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#EDE8DF",
              fontStyle: "italic",
              fontWeight: 300,
              fontFamily: "'Cormorant Garamond', serif",
              lineHeight: 1.15,
              marginBottom: "2rem",
            }}
          >
            Готовы создать
            <br />
            что-то особенное?
          </h2>
          <p style={{ color: "rgba(237,232,223,0.55)", fontSize: "1.05rem", fontFamily: "'Golos Text', sans-serif", lineHeight: 1.7, marginBottom: "3rem" }}>
            Расскажите нам о вашем проекте. Мы свяжемся в течение 24 часов
            и предложим концепцию, которая вас вдохновит.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-gold px-10 py-4 rounded-sm flex items-center gap-2 text-sm">
              <Icon name="Mail" size={16} />
              Написать нам
            </button>
            <button className="btn-outline-gold px-10 py-4 rounded-sm flex items-center gap-2 text-sm">
              <Icon name="Phone" size={16} />
              Позвонить
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8 md:px-20" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem", letterSpacing: "0.1em", color: "var(--gold-light)" }}>
            СТУДИЯ
          </p>
          <p className="text-xs" style={{ color: "rgba(237,232,223,0.25)", fontFamily: "'Golos Text', sans-serif" }}>
            © 2024 Творческая Студия. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Telegram", "VK"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "rgba(237,232,223,0.3)", fontFamily: "'Golos Text', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(237,232,223,0.3)")}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}