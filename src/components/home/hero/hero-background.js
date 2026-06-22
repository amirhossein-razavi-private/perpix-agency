export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Glows */}
      <div className="hero-glow glow-dynamic w-[700px] h-[700px] top-[-200px] left-[-100px] bg-blue-400/10 dark:bg-blue-600/15" />
      <div
        className="hero-glow glow-dynamic w-[500px] h-[500px] bottom-[-100px] right-[-80px] bg-violet-400/10 dark:bg-violet-700/15"
        style={{ animationDelay: "2.5s" }}
      />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,110,247,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,0.8) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          opacity: 0.028,
          animation: "gridFade 7s ease-in-out infinite",
        }}
      />

      {/* Morph blob */}
      <div
        className="absolute top-1/3 right-[20%] w-[260px] h-[260px] morph-blob opacity-[0.04] dark:opacity-[0.09]"
        style={{ background: "linear-gradient(135deg, #4f6ef7, #7c3aed)" }}
      />

      {/* Orbit rings */}
      <div className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[320px] h-[320px] hidden xl:block">
        <div className="absolute inset-0 rounded-full border border-primary-400/10 pulse-ring" />
        <div className="absolute inset-[-50px] rounded-full border border-primary-400/10 pulse-ring2" />
      </div>

      {/* Floating particles */}
      <span className="particle absolute top-[22%] left-[44%] w-2 h-2 rounded-full bg-primary-400/40" style={{ "--dur": "5s", "--delay": "0s" }} />
      <span className="particle absolute top-[58%] left-[54%] w-1.5 h-1.5 rounded-full bg-violet-400/30" style={{ "--dur": "7s", "--delay": "1.2s" }} />
      <span className="particle absolute top-[38%] right-[30%] w-2.5 h-2.5 rounded-full bg-primary-300/25" style={{ "--dur": "6s", "--delay": "2s" }} />
      <span className="particle absolute top-[68%] right-[42%] w-1 h-1 rounded-full bg-primary-500/50" style={{ "--dur": "4s", "--delay": "0.5s" }} />
      <span className="particle absolute top-[12%] right-[36%] w-2 h-2 rounded-full bg-violet-300/35" style={{ "--dur": "8.5s", "--delay": "3s" }} />

      {/* Concentric ring */}
      <div className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-400/10 dark:border-primary-500/10 hidden lg:block" />
    </div>
  );
}

export default HeroBackground;
