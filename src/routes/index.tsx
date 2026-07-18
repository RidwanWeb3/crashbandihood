import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/cbh_logo.jpeg";
import heroAsset from "@/assets/cbh_assets.jpeg";
import videoAsset from "@/assets/cbh_video.mp4";
import aboutFrameAsset from "@/assets/about_frame.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});



function Ribbon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      <div className="relative bg-[var(--gradient-crimson)] px-8 py-3 shadow-[var(--shadow-chunky)]"
        style={{ background: "var(--gradient-crimson)", clipPath: "polygon(4% 0, 96% 0, 100% 50%, 96% 100%, 4% 100%, 0 50%)" }}>
        <h2 className="text-chunky-white text-2xl md:text-4xl relative z-10 whitespace-nowrap">{children}</h2>
      </div>
    </div>
  );
}

function GoldButton({ children, onClick, href, external }: { children: React.ReactNode; onClick?: () => void; href?: string; external?: boolean }) {
  const cls = "relative inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-lg font-bold rev-hover glow-gold border-2 border-[oklch(0.35_0.18_25)] overflow-hidden";
  const style = { background: "var(--gradient-gold)", color: "oklch(0.22 0.14 40)", textShadow: "1px 1px 0 rgba(255,255,255,0.4)" } as React.CSSProperties;
  if (href) return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cls + " animate-shine"} style={style}>{children}</a>;
  return <button onClick={onClick} className={cls + " animate-shine"} style={style}>{children}</button>;
}

function CrimsonButton({ children, onClick, href }: { children: React.ReactNode; onClick?: () => void; href?: string }) {
  const cls = "inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-lg font-bold text-white rev-hover border-2 border-white/30";
  const style = { background: "var(--gradient-crimson)", boxShadow: "0 0 30px oklch(0.55 0.22 25 / 0.6)" };
  if (href) return <a href={href} className={cls} style={style}>{children}</a>;
  return <button onClick={onClick} className={cls} style={style}>{children}</button>;
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-3xl border border-[oklch(0.85_0.19_90_/_0.4)] bg-[oklch(0.15_0.1_145_/_0.55)] backdrop-blur-md p-6 glow-green ${className}`}>
      {children}
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(40px)";
      (el as HTMLElement).style.transition = "opacity 0.8s ease, transform 0.8s ease";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Community", href: "#community" },
  ];

  return (
    <div id="home" className="min-h-screen text-foreground overflow-x-clip">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-[oklch(0.15_0.1_145_/_0.85)] backdrop-blur-lg border-b border-primary/30 py-2" : "py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 relative animate-shine rounded-full">
            <img src={logoAsset} alt="CBH" className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary glow-gold animate-bob" style={{ background: "oklch(0.32 0.14 145)" }} />
            <span className="hidden sm:block text-chunky text-xl md:text-2xl">CBH</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-sm font-bold uppercase tracking-wider text-white/90 hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="https://x.com/CrashBandihoods" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex w-9 h-9 items-center justify-center rounded-full border border-primary/40 text-white hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/CrashBandihoodsol" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex w-9 h-9 items-center justify-center rounded-full border border-primary/40 text-white hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline poster={heroAsset} className="w-full h-full object-cover">
            <source src={videoAsset} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{
            background: "linear-gradient(180deg, oklch(0.15 0.1 145 / 0.4) 0%, oklch(0.15 0.1 145 / 0.7) 50%, oklch(0.15 0.1 145 / 0.95) 100%)"
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center w-full">
          <div>
            <div className="animate-race-in">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/60 bg-black/40 px-4 py-1.5 mb-4 backdrop-blur">
                <span className="text-primary text-sm font-bold">🏁 $CBH • LIVE ON THE TRACK</span>
              </div>
              <h1 className="text-chunky text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9]">CRASH</h1>
              <h1 className="text-chunky-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] mt-2">BANDIHOOD</h1>
              <p className="mt-6 text-xl md:text-2xl font-bold text-primary" style={{ textShadow: "2px 2px 0 #000" }}>
                Diamond Hearts. Diamond Hands.
              </p>
              <p className="mt-4 max-w-lg text-white/90 text-base md:text-lg">
                A legendary racing-arcade token born from nostalgia and forged by a community that never lifts off the throttle. Rev up. Ride hard. Never sell.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-race-in" style={{ animationDelay: "0.2s" }}>
              <CrimsonButton onClick={() => setShowModal(true)}>🎮 Play Game</CrimsonButton>
            </div>
          </div>

          <div className="hidden lg:block relative animate-bob">
            <img src={heroAsset} alt="Crash Bandihood kart race" className="rounded-3xl border-4 border-primary/60 glow-green w-full" />
            <img src={logoAsset} alt="" className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-4 border-primary glow-gold animate-spin-slow" />
          </div>
        </div>
      </section>

      {/* Track divider */}
      <div className="h-6 track-border" />

      {/* Marquee */}
      <div className="bg-black/70 border-y-4 border-primary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="text-chunky text-lg sm:text-2xl md:text-3xl flex items-center gap-6">
                  🏁 CRASH BANDIHOOD 🏆 $CBH 💎 DIAMOND HEARTS DIAMOND HANDS 🛞
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-reveal>
            <Ribbon>🏁 ABOUT $CBH 🏁</Ribbon>
          </div>

          {/* Mobile: image on top, readable text card below. Desktop: text overlaid on parchment. */}
          <div data-reveal className="relative mx-auto max-w-6xl">
            <img
              src={aboutFrameAsset}
              alt="Crash Bandihood jungle temple scroll"
              className="w-full h-auto select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
            {/* Text overlaid on the parchment area (desktop / tablet only) */}
            <div
              className="hidden md:flex absolute items-center justify-center"
              style={{ top: "10%", left: "22%", right: "12%", bottom: "14%" }}
            >
              <div className="w-full h-full flex flex-col justify-center text-center px-[2%]"
                style={{ color: "oklch(0.25 0.12 40)" }}>
                <h3 className="font-black leading-none tracking-tight"
                  style={{
                    fontFamily: "var(--font-display, 'Bungee', system-ui)",
                    fontSize: "clamp(1.25rem, 3.2vw, 3rem)",
                    color: "oklch(0.35 0.22 25)",
                    textShadow: "2px 2px 0 rgba(255,220,140,0.6)"
                  }}>
                  A LEGENDARY RACE
                </h3>
                <div className="mt-[2%] space-y-[1.5%] font-bold"
                  style={{ fontSize: "clamp(0.7rem, 1.35vw, 1.05rem)", lineHeight: 1.45 }}>
                  <p>
                    $CBH revs to life from sun-baked memories of classic kart-racing arcades —
                    that unmistakable rush when the countdown flashed{" "}
                    <span style={{ color: "oklch(0.5 0.24 25)" }}>3-2-1-GO</span> and pixel dust
                    exploded off the starting line.
                  </p>
                  <p>
                    We're not chasing pumps. We're chasing{" "}
                    <span style={{ color: "oklch(0.5 0.24 25)" }}>timeless memories</span> — a
                    community welded together by{" "}
                    <span style={{ color: "oklch(0.5 0.24 25)" }}>diamond hearts</span> and{" "}
                    <span style={{ color: "oklch(0.5 0.24 25)" }}>diamond hands</span>.
                  </p>
                  <p className="hidden lg:block">
                    The chart is our racetrack. The roadmap is our finish line. Every holder is a
                    driver behind the wheel of something legendary. Buckle up.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only readable lore card (parchment-styled) */}
          <div data-reveal className="md:hidden -mt-4 mx-auto max-w-md rounded-2xl border-4 p-5 text-center"
            style={{ background: "linear-gradient(180deg, oklch(0.92 0.08 80), oklch(0.85 0.11 70))", borderColor: "oklch(0.45 0.15 40)", color: "oklch(0.25 0.12 40)" }}>
            <h3 className="text-2xl font-black tracking-tight mb-3"
              style={{ fontFamily: "var(--font-display, 'Bungee', system-ui)", color: "oklch(0.35 0.22 25)" }}>
              A LEGENDARY RACE
            </h3>
            <div className="space-y-3 text-sm font-semibold leading-snug">
              <p>
                $CBH revs to life from sun-baked memories of classic kart-racing arcades — that rush when the countdown flashed <span style={{ color: "oklch(0.5 0.24 25)" }}>3-2-1-GO</span>.
              </p>
              <p>
                We chase <span style={{ color: "oklch(0.5 0.24 25)" }}>timeless memories</span>, welded by <span style={{ color: "oklch(0.5 0.24 25)" }}>diamond hearts</span> &amp; <span style={{ color: "oklch(0.5 0.24 25)" }}>diamond hands</span>.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Legendary Legacy", body: "Built on nostalgia for the golden age of kart-racing arcades." },
              { icon: "🛞", title: "Community-Driven", body: "Every driver holds the wheel. No pit crew calling the shots." },
              { icon: "💎", title: "Diamond Hands", body: "Holders that never brake. Only shift into a higher gear." },
              { icon: "🏁", title: "Fair Launch", body: "No presales, no team wallets. Everyone starts at the line." },
            ].map((f, i) => (
              <div key={i} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                <GlassCard className="h-full text-center">
                  <div className="text-5xl mb-3">{f.icon}</div>
                  <h4 className="text-chunky-white text-xl mb-2">{f.title}</h4>
                  <p className="text-sm text-white/80">{f.body}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-6 track-border" />

      {/* TOKENOMICS */}
      <section id="tokenomics" className="relative py-16 md:py-24 px-4">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${heroAsset})` }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14" data-reveal>
            <Ribbon>🏁 TOKENOMICS 🏁</Ribbon>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Supply", value: "1,000,000,000", sub: "$CBH" },
              { label: "Buy / Sell Tax", value: "0 / 0", sub: "Pure Racing" },
              { label: "LP Locked", value: "100%", sub: "Burned Forever" },
              { label: "Contract", value: "TBA", sub: "Coming Soon" },
            ].map((t, i) => (
              <div key={i} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <GlassCard className="text-center relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 checker" />
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">{t.label}</p>
                  <p className="text-chunky text-3xl md:text-4xl mt-2">{t.value}</p>
                  <p className="text-white/70 text-sm mt-1">{t.sub}</p>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Speedometer distribution */}
          <div data-reveal>
            <GlassCard>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <Speedometer />
                </div>
                <div className="space-y-5 text-center md:text-left">
                  <h3 className="text-chunky text-3xl md:text-4xl">DISTRIBUTION</h3>
                  <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/60 bg-black/40 px-4 py-1.5">
                    <span className="text-primary text-sm font-bold">🛞 100% COMMUNITY DRIVEN</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-white/90 mb-2">
                      <span>Community</span><span>100%</span>
                    </div>
                    <div className="h-4 rounded-full bg-black/50 overflow-hidden border border-primary/30">
                      <div className="h-full rounded-full animate-shine" style={{ width: `100%`, background: "var(--gradient-gold)", boxShadow: `0 0 14px var(--gold)` }} />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm md:text-base">
                    No team allocation. No presale. No insider bags. Every $CBH belongs to the drivers — the community holds the wheel, the throttle, and the trophy.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { k: "Team", v: "0%" },
                      { k: "Presale", v: "0%" },
                      { k: "Community", v: "100%" },
                    ].map(x => (
                      <div key={x.k} className="rounded-xl border border-primary/30 bg-black/40 py-2">
                        <p className="text-chunky text-lg md:text-xl leading-none">{x.v}</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">{x.k}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <div className="h-6 track-border" />

      {/* ROADMAP */}
      <section id="roadmap" className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-reveal>
            <Ribbon>🏁 ROADMAP 🏁</Ribbon>
          </div>

          <div className="relative">
            {/* horizontal track */}
            <div className="hidden md:block absolute top-14 left-0 right-0 h-6 track-border rounded-full" />
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                { phase: "PHASE 1", title: "IGNITION", items: ["Fair launch on PumpFun", "Website & socials live", "First 1,000 drivers onboard", "Marketing burst"] },
                { phase: "PHASE 2", title: "FULL THROTTLE", items: ["CoinGecko / CMC listings", "Community contests", "Meme & art bounties", "10K holders milestone"] },
                { phase: "PHASE 3", title: "VICTORY LAP", items: ["Playable $CBH kart game beta", "CEX listings", "NFT racer collection", "Global tournament season"] },
              ].map((p, i) => (
                <div key={i} data-reveal style={{ transitionDelay: `${i * 150}ms` }} className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-28 h-28 rounded-full checker border-4 border-primary glow-gold flex items-center justify-center">
                      <div className="absolute inset-2 rounded-full bg-black/80 flex flex-col items-center justify-center">
                        <span className="text-chunky text-lg">P{i + 1}</span>
                      </div>
                    </div>
                  </div>
                  <GlassCard>
                    <p className="text-primary text-xs uppercase tracking-widest font-bold text-center">{p.phase}</p>
                    <h4 className="text-chunky-white text-2xl text-center mt-1 mb-4">{p.title}</h4>
                    <ul className="space-y-2">
                      {p.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/90 text-sm">
                          <span className="mt-1 w-4 h-4 rounded-full flex-none border-2 border-primary" style={{ background: "radial-gradient(circle, var(--gold) 30%, transparent 32%)" }} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-6 track-border" />

      {/* COMMUNITY */}
      <section id="community" className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroAsset})`, filter: "blur(2px)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.15 0.1 145 / 0.7), oklch(0.22 0.12 145 / 0.9))" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8" data-reveal><Ribbon>🏁 JOIN THE CREW 🏁</Ribbon></div>
          <h3 data-reveal className="text-chunky text-4xl md:text-6xl mb-4">RACE WITH US</h3>
          <p data-reveal className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            The pit stop is open. Join the fastest, loudest, most diamond-handed community on the track.
          </p>
          <div data-reveal className="flex flex-wrap justify-center gap-5">
            <a href="https://x.com/CrashBandihoods" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-2xl bg-black text-white px-8 py-5 border-2 border-primary rev-hover glow-green">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <div className="text-left">
                <div className="text-xs uppercase text-primary font-bold">Follow on</div>
                <div className="text-xl font-bold">X / Twitter</div>
              </div>
            </a>
            <a href="https://t.me/CrashBandihoodsol" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-2xl px-8 py-5 border-2 border-primary rev-hover glow-green" style={{ background: "linear-gradient(135deg, #229ED9, #1B7DAC)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
              <div className="text-left text-white">
                <div className="text-xs uppercase font-bold opacity-80">Join on</div>
                <div className="text-xl font-bold">Telegram</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t-4 border-primary bg-black/70 py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="CBH" className="w-14 h-14 rounded-full border-2 border-primary" />
            <div>
              <p className="text-chunky text-xl">CBH</p>
              <p className="text-xs text-white/60">Crash Bandihood © 2026</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Quick Links</p>
            <div className="flex justify-center flex-wrap gap-4 text-sm text-white/80">
              {nav.map(n => <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>)}
            </div>
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <a href="https://x.com/CrashBandihoods" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/CrashBandihoodsol" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-white/50 mt-8 max-w-2xl mx-auto">
          $CBH is a community meme token created for entertainment. Nothing on this site is financial advice. Always DYOR before joining any race.
        </p>
      </footer>

      {/* Coming Soon Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div onClick={e => e.stopPropagation()} className="relative max-w-md w-full rounded-3xl border-4 border-primary glow-gold p-8 text-center animate-race-in" style={{ background: "var(--gradient-jungle)" }}>
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-crimson text-white font-bold hover:scale-110 transition" style={{ background: "var(--gradient-crimson)" }}>✕</button>
            <div className="text-6xl mb-4 animate-bob">🏁</div>
            <h3 className="text-chunky text-3xl md:text-4xl mb-3">COMING SOON!</h3>
            <p className="text-white/90 mb-6">The race is still being built. Rev up — the starting line drops soon.</p>
            <div className="flex justify-center">
              <GoldButton onClick={() => setShowModal(false)}>🏁 Back to the Pit</GoldButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Speedometer() {
  return (
    <svg viewBox="0 0 200 130" className="w-full max-w-xs">
      <defs>
        <linearGradient id="gaugeGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.22 145)" />
          <stop offset="60%" stopColor="oklch(0.85 0.19 90)" />
          <stop offset="100%" stopColor="oklch(0.55 0.22 25)" />
        </linearGradient>
      </defs>
      <path d="M 20 110 A 80 80 0 0 1 180 110" stroke="rgba(0,0,0,0.5)" strokeWidth="20" fill="none" strokeLinecap="round" />
      <path d="M 20 110 A 80 80 0 0 1 180 110" stroke="url(#gaugeGrad)" strokeWidth="16" fill="none" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="30" />
      {[0, 25, 50, 75, 100].map((t) => {
        const angle = Math.PI * (1 - t / 100);
        const x1 = 100 + Math.cos(angle) * 65;
        const y1 = 110 - Math.sin(angle) * 65;
        const x2 = 100 + Math.cos(angle) * 78;
        const y2 = 110 - Math.sin(angle) * 78;
        return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="2" />;
      })}
      <line x1="100" y1="110" x2={100 + Math.cos(Math.PI * 0.15) * 70} y2={110 - Math.sin(Math.PI * 0.15) * 70} stroke="oklch(0.85 0.19 90)" strokeWidth="4" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.19 90))" }} />
      <circle cx="100" cy="110" r="8" fill="oklch(0.85 0.19 90)" stroke="#000" strokeWidth="2" />
      <text x="100" y="90" textAnchor="middle" fontFamily="Luckiest Guy, sans-serif" fontSize="22" fill="oklch(0.85 0.19 90)" stroke="#000" strokeWidth="1">FULL</text>
      <text x="100" y="108" textAnchor="middle" fontFamily="Luckiest Guy, sans-serif" fontSize="14" fill="white">SEND</text>
    </svg>
  );
}
