import { Icon } from "@/components/icon";

function Avatar({ className = "" }) {
  return (
    <span
      className={`rounded-full border-2 border-white dark:border-gray-900 gradient-bg ${className}`}
    />
  );
}

export function HeroVisual({ v }) {
  return (
    <div
      className="relative hidden lg:flex items-center justify-center select-none"
      style={{ minHeight: 600 }}
    >
      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-primary-300/10 dark:border-primary-500/10 pulse-ring2" />
        <div className="absolute w-[390px] h-[390px] rounded-full border border-primary-400/10 dark:border-primary-400/10 pulse-ring" />
      </div>

      {/* Main dashboard card */}
      <div className="float-main relative z-10">
        <div className="hero-visual-card rounded-2xl p-5 w-[360px] relative overflow-hidden">
          <div className="scan-line" />

          {/* Browser chrome */}
          <div className="flex items-center gap-2 mb-4 snap-1">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 pixel-cell" style={{ "--pdelay": "0.9s" }} />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 pixel-cell" style={{ "--pdelay": "1.0s" }} />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 pixel-cell" style={{ "--pdelay": "1.1s" }} />
            </div>
            <div className="flex-1 h-5 bg-gray-100 dark:bg-white/6 rounded-lg flex items-center px-3 gap-2 build-1">
              <Icon name="lock" className="text-gray-300 dark:text-gray-600 text-[9px]" />
              <span className="text-[10px] text-gray-300 dark:text-gray-600 font-mono num-ltr">{v.url}</span>
              <span className="ms-auto w-1.5 h-3.5 bg-primary-400/60 type-cursor" />
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {v.kpis.map((kpi, i) => (
              <div
                key={kpi.label}
                className={`rounded-xl p-2.5 text-center snap-${i + 2}`}
                style={{
                  background: `linear-gradient(135deg,rgba(79,110,247,${0.13 - i * 0.04}),rgba(124,58,237,${0.13 - i * 0.04}))`,
                }}
              >
                <div className="text-primary-500 font-black text-sm count-animate num-ltr" style={{ "--delay": `${1.3 + i * 0.2}s` }}>
                  {kpi.value}
                </div>
                <div className="text-[9px] text-gray-400 mt-0.5">{kpi.label}</div>
              </div>
            ))}
          </div>

          {/* Progress modules */}
          <div className="space-y-2.5 mb-4 build-2">
            {v.modules.map((mod, i) => (
              <div key={mod.label}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">{mod.label}</span>
                  <span className="text-[10px] font-bold text-primary-500 num-ltr">{mod.value}</span>
                </div>
                <div className="h-1.5 bg-gray-100 dark:bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="progress-fill rounded-full"
                    style={{ "--target-width": mod.width, "--delay": `${1.6 + i * 0.3}s` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="h-[72px] rounded-xl bg-gray-50 dark:bg-white/4 border border-gray-100 dark:border-white/6 p-2 flex items-end justify-around gap-1 build-3">
            {[
              { h: "35%", bg: "bg-primary-300/50", d: "2.3s" },
              { h: "58%", bg: "bg-primary-400/60", d: "2.45s" },
              { h: "44%", bg: "bg-primary-400/70", d: "2.6s" },
              { h: "78%", grad: true, d: "2.75s" },
              { h: "52%", bg: "bg-primary-500/65", d: "2.9s" },
              { h: "68%", bg: "bg-primary-500/75", d: "3.05s" },
              { h: "90%", gradFull: true, d: "3.2s" },
            ].map((bar, i) => (
              <div
                key={i}
                className={`w-4 rounded-t-md ${bar.bg ?? ""} ${bar.gradFull ? "gradient-bg" : ""}`}
                style={{
                  height: bar.h,
                  ...(bar.grad
                    ? { background: "linear-gradient(to top,#4f6ef7,#7c3aed)" }
                    : {}),
                  animation: `fadeSlideUp 0.4s ease ${bar.d} both`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* AI node graph card (top-right) */}
      <div className="float-card2 absolute top-[3%] end-[-28px] z-20">
        <div className="hero-visual-card rounded-2xl p-4 w-[208px] snap-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 shadow-md shadow-primary-500/30 relative overflow-hidden">
              <Icon name="brain" className="text-white text-[10px]" />
              <div className="scan-line" style={{ animationDuration: "2s", opacity: 0.5 }} />
            </div>
            <div>
              <p className="font-black text-xs text-gray-900 dark:text-white">{v.aiPipeline}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-blink" />
                <span className="text-[9px] text-emerald-500 font-semibold">{v.aiStatus}</span>
              </div>
            </div>
          </div>
          <div className="relative h-[68px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180 68">
              <defs>
                <linearGradient id="lgNode" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f6ef7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <line x1="30" y1="34" x2="90" y2="16" stroke="url(#lgNode)" strokeWidth="1.5" className="draw-path" style={{ "--line-delay": "1.2s" }} />
              <line x1="30" y1="34" x2="90" y2="52" stroke="url(#lgNode)" strokeWidth="1.5" className="draw-path" style={{ "--line-delay": "1.45s" }} />
              <line x1="90" y1="16" x2="155" y2="34" stroke="url(#lgNode)" strokeWidth="1.5" className="draw-path" style={{ "--line-delay": "1.7s" }} />
              <line x1="90" y1="52" x2="155" y2="34" stroke="url(#lgNode)" strokeWidth="1.5" className="draw-path" style={{ "--line-delay": "1.95s" }} />
            </svg>
            <div className="absolute left-[8px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center node-pulse pixel-cell" style={{ "--pdelay": "1.0s" }}>
              <Icon name="database" className="text-white text-[9px]" />
            </div>
            <div className="absolute left-[43%] top-[6px] w-7 h-7 rounded-full bg-violet-500/20 border border-violet-400/40 flex items-center justify-center node-pulse2 pixel-cell" style={{ "--pdelay": "1.3s" }}>
              <Icon name="circle-nodes" className="text-violet-500 text-[9px]" />
            </div>
            <div className="absolute left-[43%] bottom-[4px] w-7 h-7 rounded-full bg-primary-500/15 border border-primary-400/30 flex items-center justify-center node-pulse3 pixel-cell" style={{ "--pdelay": "1.5s" }}>
              <Icon name="code-branch" className="text-primary-500 text-[9px]" />
            </div>
            <div className="absolute right-[6px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center pixel-cell" style={{ "--pdelay": "2.0s" }}>
              <Icon name="check" className="text-emerald-500 text-[9px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Growth metric badge (top-left) */}
      <div className="badge-float1 absolute top-[10%] start-[-44px] z-20">
        <div className="hero-visual-card rounded-xl px-4 py-3 flex items-center gap-3 snap-2">
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-primary-500/30 relative overflow-hidden">
            <Icon name="rocket" className="text-white text-xs relative z-10" />
            <div className="scan-line" style={{ animationDuration: "2.2s", opacity: 0.4 }} />
          </div>
          <div>
            <p className="font-black text-sm text-gray-900 dark:text-white num-ltr">{v.growthValue}</p>
            <p className="text-[10px] text-gray-400">{v.growthLabel}</p>
          </div>
        </div>
      </div>

      {/* Code snippet card (bottom-right) */}
      <div className="float-card3 absolute bottom-[10%] end-[-50px] z-20">
        <div className="hero-visual-card rounded-2xl p-4 w-[218px] snap-5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gray-900 dark:bg-gray-800 flex items-center justify-center">
                <Icon name="code" className="text-emerald-400 text-[9px]" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 font-mono">ai.config.ts</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-blink" />
          </div>
          <div className="rounded-lg bg-gray-950 p-3 font-mono text-[9px] leading-relaxed space-y-0.5 num-ltr text-left">
            <div style={{ animation: "slideInRight 0.4s ease 2.0s both", opacity: 0 }}>
              <span className="text-violet-400">const</span> <span className="text-sky-300">config</span> <span className="text-gray-400">=</span> <span className="text-amber-300">{"{"}</span>
            </div>
            <div className="pl-3" style={{ animation: "slideInRight 0.4s ease 2.2s both", opacity: 0 }}>
              <span className="text-emerald-400">model</span><span className="text-gray-400">:</span> <span className="text-amber-200">&quot;gpt-4o&quot;</span>
            </div>
            <div className="pl-3" style={{ animation: "slideInRight 0.4s ease 2.4s both", opacity: 0 }}>
              <span className="text-emerald-400">mode</span><span className="text-gray-400">:</span> <span className="text-amber-200">&quot;stream&quot;</span>
            </div>
            <div className="pl-3" style={{ animation: "slideInRight 0.4s ease 2.6s both", opacity: 0 }}>
              <span className="text-emerald-400">temp</span><span className="text-gray-400">:</span> <span className="text-orange-300">0.7</span>
            </div>
            <div style={{ animation: "slideInRight 0.4s ease 2.8s both", opacity: 0 }}>
              <span className="text-amber-300">{"}"}</span>
            </div>
            <div className="flex items-center gap-1 mt-1" style={{ animation: "slideInRight 0.4s ease 3.0s both", opacity: 0 }}>
              <span className="text-gray-500 text-[8px]">▶ {v.compiling}</span>
              <span className="w-1.5 h-3.5 bg-primary-400/80 type-cursor" />
            </div>
          </div>
        </div>
      </div>

      {/* On-time badge (bottom-left) */}
      <div className="badge-float2 absolute bottom-[22%] start-[-35px] z-20">
        <div className="hero-visual-card rounded-xl px-4 py-3 flex items-center gap-3 snap-6">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
            <Icon name="check" className="text-emerald-500 text-xs" />
          </div>
          <div>
            <p className="font-black text-sm text-gray-900 dark:text-white">{v.onTimeTitle}</p>
            <p className="text-[10px] text-gray-400">{v.onTimeSub}</p>
          </div>
        </div>
      </div>

      {/* Tech stack badge (mid-right) */}
      <div className="badge-float3 absolute top-[44%] end-[-58px] z-20">
        <div className="hero-visual-card rounded-xl px-4 py-3 shadow-xl flex items-center gap-2.5 snap-7">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{v.stackLabel}</p>
          <div className="flex items-center gap-2.5">
            <Icon name="react" className="text-primary-400 text-base" />
            <Icon name="node" className="text-emerald-500 text-base" />
            <Icon name="brain" className="text-violet-500 text-base" />
            <Icon name="figma" className="text-pink-400 text-base" />
          </div>
        </div>
      </div>

      {/* Senior team badge (mid-left) */}
      <div className="badge-float1 absolute top-[55%] start-[-50px] z-20" style={{ animationDelay: "0.9s" }}>
        <div className="hero-visual-card rounded-xl px-4 py-3 shadow-xl flex items-center gap-2.5 snap-4">
          <div className="flex -space-x-2">
            <Avatar className="w-7 h-7" />
            <Avatar className="w-7 h-7" />
          </div>
          <div>
            <p className="font-bold text-xs text-gray-900 dark:text-white">{v.teamTitle}</p>
            <div className="flex gap-0.5 mt-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="text-amber-400 text-[9px]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
