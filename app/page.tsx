"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}


// ─── Navbar ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  ["Product", "#features"],
  ["Architecture", "#architecture"],
  ["Agents", "#agents"],
  ["FAQ", "#faq"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <a href="#top" aria-label="Payminto home" className="flex items-center gap-2.5">
          <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-full bg-brand text-[13px] font-black text-brand-ink">P</span>
          <span className="text-[16px] font-bold tracking-tight">payminto</span>
        </a>
        <div className="hidden items-center gap-3 md:flex">
          {NAV_LINKS.map(([label, href]) => <a key={label} href={href} className="nav-hover rounded-full px-3 py-1.5 text-[14px] font-semibold">{label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <a href="#setup" className="btn-pill btn-primary !px-4 !py-2 !text-[14px]">Self-hosting</a>
          <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden">
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid gap-1 border-t border-border px-6 py-3 md:hidden">
        {NAV_LINKS.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 font-semibold">{label}</a>)}
      </nav>}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Original Payminto billboard typography and supplied dashboard illustration.
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-0">
      <div className="mx-auto max-w-6xl px-6" data-reveal-stagger>
        <h1
          data-stagger-child
          className="font-display mb-8 max-w-none text-[52px] font-black text-foreground md:text-[88px] lg:text-[96px]"
          style={{ lineHeight: 0.85, letterSpacing: "-0.02em" }}
        >
          Payment infrastructure
          <br />
          you <span className="brand-underline">actually own.</span>
        </h1>

        <div data-stagger-child className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-lg text-[18px] font-semibold leading-[1.5] text-foreground-soft">
            Self-hosted, private payment infrastructure for humans and AI agents.
            Accept card and crypto payments on infrastructure you deploy, own, and control.
          </p>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <a href="#setup" className="btn-pill btn-primary">
              Explore self-hosting
            </a>
            <a href="#architecture" className="btn-pill btn-secondary">
              View architecture
            </a>
          </div>
        </div>

        {/* Supplied product illustration */}
        <div
          data-stagger-child
          className="card-ring-lg hover-tilt relative mt-6 aspect-[3/2] overflow-hidden"
        >
          <Image
            src="/generated/dashboard-mockup.png"
            alt="Illustrative Payminto dashboard showing payments, wallets, and transaction volume"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            priority
            className="object-contain"
          />
        </div>
        <p className="mt-3 text-xs font-semibold text-foreground-muted">Product illustration with example data.</p>

        {/* Stats - inline under the screenshot, no card wrapper */}
        <div
          data-stagger-child
          className="mt-12 mb-16 flex flex-wrap gap-x-16 gap-y-4"
        >
          {[
            { value: "Your server", label: "Self-hosted payment core" },
            { value: "Your rules", label: "Programmable workflows" },
            { value: "Your wallet", label: "Control over custody" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display text-[30px] font-black text-foreground md:text-[40px]"
                style={{ lineHeight: 0.85 }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-[13px] font-bold text-foreground-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust Strip ──────────────────────────────────────────────────────────────
function AudienceSection() {
  return <section id="audience" className="border-y border-border py-12">
    <div className="mx-auto max-w-6xl px-6">
      <h2 className="mb-6 text-[18px] font-bold">Built for businesses that need control over their payment stack.</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Commerce & marketplaces", "Bring card and crypto checkout into one payment layer."],
          ["AI agent builders", "Connect machine-native payment workflows through APIs and MCP."],
          ["Fintech & payment teams", "Own your orchestration, integrations, and transaction data."],
          ["iGaming & specialist merchants", "Run your own core, with rails appropriate to your industry and region."],
        ].map(([title, description]) => <div key={title}><h3 className="mb-2 font-bold">{title}</h3><p className="text-sm leading-relaxed text-foreground-soft">{description}</p></div>)}
      </div>
    </div>
  </section>;
}

// ─── Card to Crypto ───────────────────────────────────────────────────────────
function CardToCrypto() {
  return (
    <section id="card-to-crypto" className="py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-surface-mint px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#3b1d8a]">
            Card-to-crypto
          </div>
          <h2
            className="font-display mb-6 text-[48px] font-black text-foreground md:text-[72px]"
            style={{ lineHeight: 0.85 }}
            data-reveal
          >
            Cards in.
            <br />
            <span className="brand-underline">Crypto out.</span>
          </h2>
          <p className="mb-8 max-w-md text-[18px] font-semibold leading-[1.44] text-foreground-soft">
            Let customers pay by card through a connected onramp, and receive
            crypto in a wallet you control. Your payment core stays in your
            environment; the provider handles the card rail.
          </p>
          <ul className="space-y-3 text-[16px] font-semibold text-foreground">
            {[
              "Card-to-crypto through connected onramp providers",
              "Choose your settlement wallet",
              "Single integration, multi-rail under the hood",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-ring-lg hover-tilt relative aspect-[3/2] overflow-hidden">
          <Image
            src="/generated/checkout-screen.png"
            alt="Illustrative card-to-crypto checkout screen"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Custody Explained (educational infographic) ──────────────────────────────
function CustodyExplained() {
  return (
    <section className="border-y border-border bg-background py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">
              First time hearing this?
            </p>
            <h2
              className="font-display text-[44px] font-black text-foreground md:text-[72px]"
              style={{ lineHeight: 0.85 }}
              data-reveal
            >
              Where does your
              <br />
              <span className="brand-underline">money actually sit?</span>
            </h2>
          </div>
          <p className="text-[17px] font-semibold leading-[1.5] text-foreground-soft">
            With a hosted gateway, the provider operates the payment core and
            sets the rules for your account. With Payminto, you operate the core,
            manage your wallets, and connect the external rails you need.
          </p>
        </div>

        <div className="card-ring-lg relative aspect-[33/14] overflow-hidden bg-surface">
          <Image
            src="/generated/infographic-custody.png"
            alt="Custody comparison: traditional processor vs Payminto direct settlement"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            ["Hosted core", "The provider hosts the payment logic and defines account access, routing options, and data availability."],
            ["Self-hosted core", "Your environment runs the payment logic. You configure the wallets, integrations, and workflows."],
            ["External rails", "Cards still rely on processors, banks, and provider requirements. Crypto relies on networks and confirmation policies."],
          ].map(([title, desc]) => (
            <div key={title}>
              <div className="mb-1 text-[15px] font-bold text-foreground">{title}</div>
              <p className="text-[14px] font-semibold leading-[1.5] text-foreground-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Architecture (educational infographic) ───────────────────────────────────
function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-surface-mint border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#3b1d8a]">
            Inside your infrastructure
          </p>
          <h2
            className="font-display text-[44px] font-black text-foreground md:text-[72px]"
            style={{ lineHeight: 0.85 }}
            data-reveal
          >
            One payment layer.
            <br />
            <span className="brand-underline">Your environment.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] font-semibold leading-[1.5] text-foreground-soft">
            Humans, applications, and AI agents connect to your self-hosted
            payment core. Your API, dashboard, MCP interface, and block monitors
            share one environment, with connections to your chosen payment rails.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold"><span className="rounded-full border border-border bg-surface px-4 py-2">Human checkout</span><span className="rounded-full border border-border bg-surface px-4 py-2">Applications & APIs</span><span className="rounded-full border border-border bg-surface px-4 py-2">AI agents & MCP</span></div>
        <div className="rounded-[40px] border-2 border-brand p-2">
        <p className="px-4 py-3 text-sm font-bold text-brand-ink">Runs inside your infrastructure</p>
        <div className="card-ring-lg relative aspect-[16/9] overflow-hidden bg-surface">
          <Image
            src="/generated/infographic-architecture.png"
            alt="Payminto architecture: API, dashboard, MCP server, block monitor on a self-hosted VPS connecting to a cold wallet"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-contain"
          />
        </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["API", "Go service, REST + webhooks. The brain that creates invoices, validates payments, and signs payouts."],
            ["Dashboard", "Next.js merchant UI. Manage payments, wallets, sweeps, webhooks, and API keys."],
            ["MCP server", "Native Model Context Protocol bridge. Lets Claude and other agents call your Payminto instance."],
            ["Block monitor", "Per-chain workers that watch BTC / ETH / Base / Tron and reconcile on-chain confirmations."],
          ].map(([title, desc]) => (
            <div key={title} className="card-ring hover-lift p-5">
              <div className="mb-1 text-[15px] font-bold text-foreground">{title}</div>
              <p className="text-[13px] font-semibold leading-[1.5] text-foreground-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Setup ────────────────────────────────────────────────────────────────────
function SetupSection() {
  return (
    <section id="setup" className="bg-surface-mint border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display mb-8 text-[44px] md:text-[72px]">Your cloud.<br /><span className="brand-underline">Your payment core.</span></h2>
        <p className="mb-10 max-w-2xl text-[18px] font-semibold leading-relaxed text-foreground-soft">Self-hosting gives your team control of the deployment. Plan the environment, connect your rails, and validate your payment flow before accepting live payments.</p>
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            ["Prepare your environment", "Choose your cloud or private network. Configure HTTPS, secrets, backups, and access for your operations team."],
            ["Connect your payment rails", "Configure wallets, supported networks, and card-to-crypto providers for your business and region."],
            ["Validate the complete flow", "Test checkout, confirmations, webhooks, permissions, and settlement before enabling production payments."],
          ].map(([title, description], i) => <li key={title} className="card-ring p-6"><span className="mb-4 block font-mono text-sm text-brand-ink">0{i + 1}</span><h3 className="mb-3 text-xl font-bold">{title}</h3><p className="text-sm leading-relaxed text-foreground-soft">{description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

// ─── Features Grid ────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "/generated/icon-custody.png",
    title: "Control & custody",
    desc: "Configure your own wallets and settlement destinations. Keep custody decisions inside your environment.",
  },
  {
    icon: "/generated/icon-payments.png",
    title: "Payment options",
    desc: "Connect card-to-crypto providers and crypto networks through one payment layer.",
  },
  {
    icon: "/generated/icon-auth.png",
    title: "Scoped API keys",
    desc: "Manage API access for your applications and integrations from your own instance.",
  },
  {
    icon: "/generated/icon-funds.png",
    title: "SmartSweep",
    desc: "Consolidate incoming deposits to configured wallets using your sweep thresholds and network settings.",
  },
  {
    icon: "/generated/icon-compliance.png",
    title: "Audit trail",
    desc: "Keep payment records and operational visibility in your own environment for reconciliation.",
  },
  {
    icon: "/generated/icon-automation.png",
    title: "Agent-ready",
    desc: "Connect MCP-compatible agents to payment tools. Control their credentials and access within your deployment.",
  },
];

function FeaturesGrid() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">
            What you get
          </p>
          <h2
            className="font-display text-[48px] font-black text-foreground md:text-[84px]"
            style={{ lineHeight: 0.85 }}
            data-reveal
          >
            Own the logic.
            <br />
            <span className="brand-underline">Build your workflow.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`card-ring hover-lift p-8 ${
                i === 0 ? "sm:col-span-2 sm:row-span-1 bg-surface-mint" : ""
              }`}
            >
              <div className="icon-pop mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand">
                <Image src={f.icon} alt="" width={36} height={36} className="opacity-90" />
              </div>
              <h3 className="mb-2 text-[22px] font-bold text-foreground" style={{ letterSpacing: "-0.01em" }}>
                {f.title}
              </h3>
              <p className="text-[16px] font-semibold leading-[1.44] text-foreground-soft">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Payment Flow - pinned scroll-scrubbed coin on SVG path ───────────────────
const FLOW_STEPS = [
  {
    num: "01",
    title: "Capture",
    desc: "A customer or application starts a payment through your checkout or payment API.",
  },
  {
    num: "02",
    title: "Verify",
    desc: "Block monitors check on-chain confirmations. Your application receives transaction updates through webhooks.",
  },
  {
    num: "03",
    title: "Sweep",
    desc: "Move deposits to configured wallets according to your sweep thresholds and network settings.",
  },
];

function FlowDiagram() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const coinRef = useRef<SVGGElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(max-height: 799px)").matches;
    const path = pathRef.current;
    const coin = coinRef.current;
    const section = sectionRef.current;
    if (!path || !coin || !section) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: reduce ? 0 : length });
    gsap.set(coin, { autoAlpha: reduce ? 1 : 0 });
    if (reduce) {
      gsap.set(coin, { x: 80, y: 240 });
      stepRefs.current.forEach((s) => s && gsap.set(s, { opacity: 1 }));
      nodeRefs.current.forEach((n) => n && gsap.set(n, { scale: 1, transformOrigin: "center" }));
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2400",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.to(path, { strokeDashoffset: 0, ease: "none", duration: 3 }, 0);
      tl.to(coin, { autoAlpha: 1, duration: 0.2 }, 0.1);
      tl.to(
        coin,
        {
          motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5], autoRotate: false },
          ease: "none",
          duration: 3,
        },
        0
      );

      stepRefs.current.forEach((card, i) => {
        if (!card) return;
        const at = 0.4 + i * 0.9;
        tl.to(card, { opacity: 1, y: 0, duration: 0.4 }, at);
        const node = nodeRefs.current[i];
        if (node) {
          tl.fromTo(
            node,
            { scale: 0.6, transformOrigin: "center" },
            { scale: 1.4, duration: 0.3, ease: "back.out(2)" },
            at
          );
          tl.to(node, { scale: 1, duration: 0.4 }, at + 0.3);
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-border bg-background overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="flow-content relative w-full">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col px-6 pt-28 pb-12">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">
              How it flows
            </p>
            <h2
              className="font-display text-[48px] font-black text-foreground md:text-[84px]"
              style={{ lineHeight: 0.85 }}
            >
              Checkout to
              <br />
              <span className="brand-underline">cold storage,</span>
              <br />
              one motion.
            </h2>
          </div>

          <div className="relative min-h-[180px] flex-1">
            <svg
              viewBox="0 0 1200 340"
              fill="none"
              className="absolute inset-x-0 top-1/2 h-auto w-full -translate-y-1/2"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <linearGradient id="flowGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#3b1d8a" />
                  <stop offset="50%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#3b1d8a" />
                </linearGradient>
                <radialGradient id="coinGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#c4b5fd" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </radialGradient>
                <filter id="coinGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                ref={pathRef}
                d="M 80 240 C 260 240, 360 60, 600 120 S 940 260, 1120 110"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {[
                { cx: 80, cy: 240, label: "01" },
                { cx: 600, cy: 120, label: "02" },
                { cx: 1120, cy: 110, label: "03" },
              ].map((n, i) => (
                <g key={n.label}>
                  <circle
                    ref={(el) => {
                      nodeRefs.current[i] = el;
                    }}
                    cx={n.cx}
                    cy={n.cy}
                    r="16"
                    fill="#fafaf7"
                    stroke="#3b1d8a"
                    strokeWidth="2.5"
                  />
                  <text
                    x={n.cx}
                    y={n.cy + 4}
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="ui-monospace, monospace"
                    fontWeight="700"
                    fill="#3b1d8a"
                  >
                    {n.label}
                  </text>
                </g>
              ))}

              <g ref={coinRef} filter="url(#coinGlow)">
                <circle r="20" fill="url(#coinGrad)" stroke="#3b1d8a" strokeWidth="2" />
                <text
                  textAnchor="middle"
                  y="5"
                  fontSize="17"
                  fontWeight="900"
                  fill="#3b1d8a"
                  fontFamily="system-ui"
                >
                  $
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-auto grid gap-5 pt-8 sm:grid-cols-3">
            {FLOW_STEPS.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="card-ring p-6"
              >
                <div className="mb-2 font-mono text-[11px] font-bold text-[#3b1d8a]">
                  {step.num}
                </div>
                <div className="mb-1 text-[18px] font-bold text-foreground">{step.title}</div>
                <p className="text-[14px] font-semibold leading-[1.5] text-foreground-soft">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AI Agents Section ────────────────────────────────────────────────────────
function AgentsSection() {
  return (
    <section id="agents" className="section-alt border-y border-border py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">
            For AI agents
          </p>
          <h2
            className="font-display mb-6 text-[48px] font-black text-foreground md:text-[84px]"
            style={{ lineHeight: 0.85 }}
            data-reveal
          >
            Built for agents
            <br />
            that <span className="brand-underline">move money.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] font-semibold text-foreground-soft">
            Connect AI agents to your payment core through MCP. Let them
            create payment requests and query transactions with access you manage.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-ring hover-lift p-8">
            <div className="mb-5 inline-flex rounded-full bg-[#d03238]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#d03238]">
              Hosted gateways
            </div>
            <ul className="space-y-3 text-[15px] font-semibold text-foreground-soft">
              {[
                "Payment core hosted by a provider",
                "Account and provider requirements",
                "Provider-defined payment workflows",
                "Separate integrations for different rails",
                "Infrastructure changes depend on the provider",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[#d03238]">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-ring hover-lift p-8 bg-surface-mint">
            <div className="mb-5 inline-flex rounded-full bg-[#3b1d8a] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">
              Payminto
            </div>
            <ul className="space-y-3 text-[15px] font-semibold text-foreground">
              {[
                "Payment core hosted in your environment",
                "Credentials managed by your team",
                "Programmable workflows and MCP tools",
                "Wallets and settlement you configure",
                "Transaction events through webhooks",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-[#3b1d8a]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-ring mt-6 overflow-hidden font-mono text-[13px]">
          <div className="border-b border-border bg-surface-soft px-4 py-2.5 text-[11px] font-bold text-foreground-muted">
            Illustrative agent payment request
          </div>
          <div className="bg-[#0e0f0c] px-5 py-5 leading-relaxed text-[#fafaf7]">
            <div className="text-white/50">{"// expose payminto tools to Claude"}</div>
            <div>
              <span className="text-brand">const</span>{" "}
              <span className="text-white">invoice</span>{" "}
              <span className="text-white/50">=</span>{" "}
              <span className="text-brand">await</span>{" "}
              <span className="text-brand-hover">payminto</span>
              <span className="text-white/50">.createInvoice({"{"}</span>
            </div>
            <div className="pl-6">
              amount<span className="text-white/50">:</span>{" "}
              <span className="text-[#ffd11a]">49.99</span>
              <span className="text-white/50">,</span>
            </div>
            <div className="pl-6">
              currency<span className="text-white/50">:</span>{" "}
              <span className="text-brand-hover">&quot;USDC&quot;</span>
              <span className="text-white/50">,</span>
            </div>
            <div className="pl-6">
              chain<span className="text-white/50">:</span>{" "}
              <span className="text-brand-hover">&quot;base&quot;</span>
              <span className="text-white/50">,</span>
            </div>
            <div className="pl-6">
              memo<span className="text-white/50">:</span>{" "}
              <span className="text-brand-hover">&quot;Pro plan subscription&quot;</span>
              <span className="text-white/50">,</span>
            </div>
            <div className="text-white/50">{"});"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Dashboard Showcase ───────────────────────────────────────────────────────
function DashboardShowcase() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">
            The dashboard
          </p>
          <h2
            className="font-display text-[48px] font-black text-foreground md:text-[84px]"
            style={{ lineHeight: 0.85 }}
            data-reveal
          >
            See every dollar.
            <br />
            <span className="brand-underline">Move every coin.</span>
          </h2>
        </div>
        <div className="card-ring-lg hover-tilt relative aspect-[3/2] overflow-hidden">
          <Image
            src="/generated/dashboard-mockup.png"
            alt="Illustrative Payminto dashboard showing payments, wallets, and transaction volume"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Payment volume", "Review payment activity across configured assets and networks."],
            ["Transaction stream", "Every confirmation, every webhook, every retry."],
            ["Wallet balances", "Review wallets by asset, network, and configured purpose."],
            ["Withdrawal queue", "Review withdrawal requests and their current status."],
          ].map(([title, desc]) => (
            <div key={title}>
              <div className="mb-1 text-[16px] font-bold text-foreground">{title}</div>
              <p className="text-[14px] font-semibold leading-[1.5] text-foreground-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mobile App ───────────────────────────────────────────────────────────────
function MobileApp() {
  return (
    <section className="section-alt border-y border-border py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
          <Image
            src="/generated/mobile-app.png"
            alt="Payminto mobile companion concept illustration"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-contain"
          />
        </div>
        <div>
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">
            Mobile companion concept
          </p>
          <h2
            className="font-display mb-6 text-[48px] font-black text-foreground md:text-[72px]"
            style={{ lineHeight: 0.85 }}
            data-reveal
          >
            Approve payouts
            <br />
            from <span className="brand-underline">anywhere.</span>
          </h2>
          <p className="mb-8 max-w-md text-[18px] font-semibold leading-[1.44] text-foreground-soft">
            A mobile companion concept for reviewing payments and wallet
            activity from your own instance. This illustration shows the
            planned direction, rather than an available mobile release.
          </p>
          <ul className="space-y-4">
            {[
              ["Payment visibility", "Planned access to transaction activity."],
              ["Wallet overview", "Planned balance monitoring across assets."],
              ["Your instance", "Designed around your self-hosted environment."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
                <div>
                  <div className="text-[16px] font-bold text-foreground">{title}</div>
                  <div className="text-[14px] font-semibold text-foreground-soft">{desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── Supported Chains ─────────────────────────────────────────────────────────
const COINS = [
  { symbol: "BTC", name: "Bitcoin", color: "#f7931a" },
  { symbol: "ETH", name: "Ethereum", color: "#627eea" },
  { symbol: "USDT", name: "Tether", color: "#26a17b" },
  { symbol: "USDC", name: "USD Coin", color: "#2775ca" },
  { symbol: "TRX", name: "TRON", color: "#ef0027" },
  { symbol: "BASE", name: "Base", color: "#0052ff" },
];

function SupportedChains() {
  return (
    <section id="networks" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">
          Multi-chain
        </p>
        <h2
          className="font-display mb-12 text-[40px] font-black text-foreground md:text-[60px]"
          style={{ lineHeight: 0.85 }}
          data-reveal
        >
          Cards and crypto.
          <br />
          <span className="brand-underline">One payment layer.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {COINS.map((coin) => (
            <div
              key={coin.symbol}
              className="card-ring hover-chip flex items-center gap-3 px-5 py-3"
            >
              <div
                className="grid h-9 w-9 place-items-center rounded-full text-[12px] font-black text-white"
                style={{ backgroundColor: coin.color }}
              >
                {coin.symbol.slice(0, 1)}
              </div>
              <div className="text-left">
                <div className="text-[14px] font-bold text-foreground">{coin.symbol}</div>
                <div className="text-[11px] font-semibold text-foreground-muted">{coin.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ──────────────────────────────────────────────────────────────


// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "What does self-hosted mean?", a: "You deploy and operate the payment core in your own cloud, VPS, or private environment. Your team manages its access, configuration, transaction data, backups, and updates." },
  { q: "Does Payminto replace banks or card processors?", a: "No. Payminto is the payment software and orchestration layer. Card payments still use external providers, processors, and banks. Card-to-crypto availability, verification, and fees depend on the connected provider." },
  { q: "Are there costs for payments?", a: "Budget for hosting and operations, blockchain network fees, and any fees charged by connected card or onramp providers. Self-hosting does not remove the costs of the underlying payment rails." },
  { q: "How do AI agents connect?", a: "MCP-compatible agents can connect to payment tools in your instance. Your team controls the credentials and permitted access. Validate the tools and authorization rules in your deployment before allowing an agent to act." },
  { q: "Who is Payminto for?", a: "Commerce businesses, marketplaces, fintech teams, specialist merchants, and AI agent developers who need more control over their payment infrastructure. Your available payment methods depend on your network and provider integrations." },
];


function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background border-y border-border py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2
          className="font-display mb-12 text-center text-[48px] font-black text-foreground md:text-[72px]"
          style={{ lineHeight: 0.85 }}
          data-reveal
        >
          Questions,
          <br />
          <span className="brand-underline">answered.</span>
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="card-ring overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
                className="hover-faq flex w-full items-center justify-between px-6 py-5 text-left text-[17px] font-bold text-foreground"
              >
                {faq.q}
                <span
                  className={`ml-4 grid h-8 w-8 place-items-center rounded-full bg-surface-mint text-[#3b1d8a] transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} className="border-t border-border px-6 py-5 text-[15px] font-semibold leading-[1.6] text-foreground-soft">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mesh-bg opacity-80" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2
          className="font-display mb-8 text-[56px] font-black text-foreground md:text-[112px]"
          style={{ lineHeight: 0.85 }}
        >
          Stop renting your
          <br />
          <span className="brand-underline">payment stack.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-[18px] font-semibold text-foreground-soft">
          Deploy your payment core in your environment. Connect the rails you
          need, and control how humans, applications, and agents move money.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#setup" className="btn-pill btn-primary !text-[18px] !px-7 !py-4">
            Explore self-hosting
          </a>
          <a href="#architecture" className="btn-pill btn-secondary !text-[18px] !px-7 !py-4">
            View architecture
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return <footer className="border-t border-border bg-[#0e0f0c] py-16 text-[#fafaf7]">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div><a href="#top" className="text-xl font-bold">payminto</a><p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">Private payment infrastructure for humans and AI agents. Deploy it in your environment. Make it yours.</p></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-start gap-6 text-sm font-semibold">
          {NAV_LINKS.map(([label, href]) => <a key={label} href={href} className="hover:text-brand">{label}</a>)}
          <a href="#setup" className="hover:text-brand">Self-hosting</a>
        </nav>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row">
        <p>© 2026 Payminto.</p><p>Self-hosted core. Connected payment rails.</p>
      </div>
    </div>
  </footer>;
}



export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <div id="main-content" tabIndex={-1}>
      <Hero />
      <AudienceSection />
      <CardToCrypto />
      <CustodyExplained />
      <ArchitectureSection />
      <SetupSection />
      <FeaturesGrid />
      <FlowDiagram />
      <DashboardShowcase />
      <AgentsSection />
      <MobileApp />
      <SupportedChains />
      <FAQ />
      <CTABanner />
      </div>
      <Footer />
    </main>
  );
}
