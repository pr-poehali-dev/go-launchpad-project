import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const AVATAR = "https://cdn.poehali.dev/projects/7c0ec440-0f2b-47f4-8ea6-f50eb7ce6448/files/b0034204-7487-4e3e-8ec4-b3366567d827.jpg";
const HOBBIES_IMG = "https://cdn.poehali.dev/projects/7c0ec440-0f2b-47f4-8ea6-f50eb7ce6448/files/24200c76-fe7b-4b99-bb0f-5519b758534a.jpg";

const INTERESTS = [
  { emoji: "⚔️", title: "Аниме", desc: "Смотрю всё подряд. Особенно экшн и сёнен.", color: "#7C3AED" },
  { emoji: "🏀", title: "Спорт", desc: "Баскетбол, тренировки, движение — это кайф.", color: "#2563EB" },
  { emoji: "🎮", title: "Roblox", desc: "С пацанами в роблок — святое дело.", color: "#16A34A" },
  { emoji: "📚", title: "9 класс", desc: "Учусь, иногда даже нравится.", color: "#EA580C" },
];

const ANIME_TITLES = ["Наруто", "Атака Титанов", "Блич", "Охотник × Охотник", "Джуджутсу Кайсен"];

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [animeIdx, setAnimeIdx] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => {
        setAnimeIdx(i => (i + 1) % ANIME_TITLES.length);
        setGlitch(false);
      }, 150);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F0EEFF", fontFamily: "'Golos Text', sans-serif", overflowX: "hidden" }}>

      {/* Animated background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div style={{
        position: "fixed", top: -200, right: -200, width: 600, height: 600,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        filter: "blur(60px)", zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", bottom: -100, left: -100, width: 400, height: 400,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        filter: "blur(50px)", zIndex: 0, pointerEvents: "none",
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 32px",
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(124,58,237,0.2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>⚡</span>
          <span style={{ fontFamily: "'Golos Text', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 2, color: "#A78BFA" }}>
            АРТЁМ
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 13, color: "rgba(240,238,255,0.5)" }}>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#A78BFA")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,238,255,0.5)")}>обо мне</a>
          <a href="#interests" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#A78BFA")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,238,255,0.5)")}>интересы</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#A78BFA")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,238,255,0.5)")}>связь</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 32px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* Text side */}
          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateX(0)" : "translateX(-40px)", transition: "all 0.9s ease" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
              padding: "6px 14px", borderRadius: 999,
              background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)",
              fontSize: 12, color: "#A78BFA", letterSpacing: 2, textTransform: "uppercase",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA", display: "inline-block", animation: "pulse 2s infinite" }} />
              Личная страница
            </div>

            <h1 style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontFamily: "'Golos Text', sans-serif",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 16,
              letterSpacing: -2,
            }}>
              <span style={{ color: "#F0EEFF" }}>Привет,</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg, #7C3AED, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                я Артём
              </span>
              <span style={{ color: "#F0EEFF" }}> ✌️</span>
            </h1>

            <p style={{ color: "rgba(240,238,255,0.55)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
              9-классник, который фанатеет от аниме, рубится в Roblox с пацанами
              и иногда даже ходит на тренировки. Это моя страница — добро пожаловать!
            </p>

            {/* Anime ticker */}
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 40,
              padding: "12px 20px", borderRadius: 12,
              background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)",
            }}>
              <span style={{ fontSize: 18 }}>📺</span>
              <span style={{ fontSize: 13, color: "rgba(240,238,255,0.5)" }}>сейчас смотрю:</span>
              <span style={{
                fontWeight: 700, color: "#A78BFA",
                opacity: glitch ? 0.3 : 1,
                transform: glitch ? "skewX(-5deg)" : "skewX(0deg)",
                transition: "all 0.15s",
                letterSpacing: 0.5,
              }}>
                {ANIME_TITLES[animeIdx]}
              </span>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#interests" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 12,
                background: "linear-gradient(135deg, #7C3AED, #60A5FA)",
                color: "#fff", fontWeight: 700, fontSize: 14,
                textDecoration: "none", letterSpacing: 0.5,
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(124,58,237,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(124,58,237,0.4)"; }}
              >
                Узнать обо мне <Icon name="ChevronDown" size={16} />
              </a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 12,
                border: "1px solid rgba(124,58,237,0.4)", color: "#A78BFA",
                fontWeight: 600, fontSize: 14, textDecoration: "none",
                background: "rgba(124,58,237,0.08)", transition: "all 0.2s ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)"; }}
              >
                Написать 💬
              </a>
            </div>
          </div>

          {/* Avatar side */}
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.9s ease 0.2s",
            display: "flex", justifyContent: "center",
          }}>
            <div style={{ position: "relative" }}>
              {/* Rotating ring */}
              <div style={{
                position: "absolute", inset: -20,
                borderRadius: "50%",
                border: "2px dashed rgba(124,58,237,0.3)",
                animation: "spin 20s linear infinite",
              }} />
              <div style={{
                position: "absolute", inset: -8,
                borderRadius: "50%",
                border: "1px solid rgba(96,165,250,0.2)",
                animation: "spin 15s linear infinite reverse",
              }} />

              {/* Avatar image */}
              <div style={{
                width: 300, height: 300, borderRadius: "50%", overflow: "hidden",
                border: "3px solid rgba(124,58,237,0.5)",
                boxShadow: "0 0 60px rgba(124,58,237,0.3), 0 0 120px rgba(124,58,237,0.1)",
                position: "relative",
              }}>
                <img src={AVATAR} alt="Артём" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* Floating badges */}
              <div style={{
                position: "absolute", top: 20, right: -30,
                padding: "8px 14px", borderRadius: 999,
                background: "rgba(124,58,237,0.9)", backdropFilter: "blur(10px)",
                fontSize: 13, fontWeight: 700, color: "#fff",
                animation: "float 3s ease-in-out infinite",
              }}>⚔️ аниме фан</div>
              <div style={{
                position: "absolute", bottom: 30, left: -40,
                padding: "8px 14px", borderRadius: 999,
                background: "rgba(37,99,235,0.9)", backdropFilter: "blur(10px)",
                fontSize: 13, fontWeight: 700, color: "#fff",
                animation: "float 3s ease-in-out infinite 1s",
              }}>🎮 roblox</div>
              <div style={{
                position: "absolute", bottom: -10, right: -20,
                padding: "8px 14px", borderRadius: 999,
                background: "rgba(22,163,74,0.9)", backdropFilter: "blur(10px)",
                fontSize: 13, fontWeight: 700, color: "#fff",
                animation: "float 3s ease-in-out infinite 0.5s",
              }}>🏀 спорт</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section id="interests" style={{ position: "relative", zIndex: 1, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 12, letterSpacing: 4, color: "#7C3AED", textTransform: "uppercase", marginBottom: 12 }}>мои увлечения</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#F0EEFF", letterSpacing: -1 }}>
              Чем я живу 🔥
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {INTERESTS.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  padding: 32, borderRadius: 20, cursor: "default",
                  background: activeCard === i ? `rgba(${item.color === "#7C3AED" ? "124,58,237" : item.color === "#2563EB" ? "37,99,235" : item.color === "#16A34A" ? "22,163,74" : "234,88,12"},0.12)` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activeCard === i ? item.color + "60" : "rgba(255,255,255,0.06)"}`,
                  transform: activeCard === i ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: activeCard === i ? `0 20px 60px ${item.color}25` : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: 44, marginBottom: 16 }}>{item.emoji}</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F0EEFF", marginBottom: 10, letterSpacing: -0.5 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "rgba(240,238,255,0.5)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOBBIES IMAGE SECTION */}
      <section style={{ position: "relative", zIndex: 1, padding: "40px 32px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            borderRadius: 24, overflow: "hidden", position: "relative",
            border: "1px solid rgba(124,58,237,0.2)",
            boxShadow: "0 0 80px rgba(124,58,237,0.1)",
          }}>
            <img src={HOBBIES_IMG} alt="Интересы" style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.3) 50%, transparent 100%)",
            }} />
            <div style={{ position: "absolute", top: "50%", left: 48, transform: "translateY(-50%)" }}>
              <p style={{ fontSize: 13, color: "#A78BFA", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>
                каждый день
              </p>
              <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#F0EEFF", lineHeight: 1.2, letterSpacing: -1, maxWidth: 400 }}>
                Аниме, геймплей,
                <br />тренировки
                <br /><span style={{ color: "#A78BFA" }}>— вот и весь план 😎</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FUN FACTS */}
      <section style={{ position: "relative", zIndex: 1, padding: "40px 32px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 12, letterSpacing: 4, color: "#7C3AED", textTransform: "uppercase", marginBottom: 12 }}>факты</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, color: "#F0EEFF", letterSpacing: -1 }}>
              Немного цифр 📊
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {[
              { num: "9", label: "класс", icon: "📚" },
              { num: "∞", label: "серий аниме", icon: "📺" },
              { num: "100+", label: "часов в Roblox", icon: "🎮" },
              { num: "7", label: "дней в неделю хорошее настроение", icon: "😎" },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: "28px 20px", borderRadius: 16, textAlign: "center",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.15)",
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.icon}</div>
                <p style={{ fontSize: "2.5rem", fontWeight: 900, color: "#A78BFA", lineHeight: 1, marginBottom: 6, letterSpacing: -1 }}>
                  {stat.num}
                </p>
                <p style={{ fontSize: 12, color: "rgba(240,238,255,0.4)", lineHeight: 1.4 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ position: "relative", zIndex: 1, padding: "40px 32px 100px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            padding: 56, borderRadius: 28,
            background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(37,99,235,0.1) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 0 80px rgba(124,58,237,0.1)",
          }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>👋</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#F0EEFF", marginBottom: 16, letterSpacing: -1 }}>
              Пиши, не стесняйся!
            </h2>
            <p style={{ color: "rgba(240,238,255,0.5)", lineHeight: 1.7, marginBottom: 36, fontSize: 15 }}>
              Хочешь обсудить аниме, поиграть в Roblox или просто чилл? — пиши.
              Всегда рад новым людям 🤙
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://t.me/" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 12,
                background: "linear-gradient(135deg, #7C3AED, #60A5FA)",
                color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
              }}>
                <Icon name="Send" size={16} /> Telegram
              </a>
              <a href="https://vk.com/" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 12,
                border: "1px solid rgba(124,58,237,0.4)",
                color: "#A78BFA", fontWeight: 600, fontSize: 14, textDecoration: "none",
                background: "rgba(124,58,237,0.08)",
              }}>
                <Icon name="Users" size={16} /> ВКонтакте
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(124,58,237,0.15)",
        padding: "24px 32px",
        textAlign: "center",
        color: "rgba(240,238,255,0.2)", fontSize: 13,
      }}>
        сделано с ⚡ — Артём, 2024
      </footer>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
