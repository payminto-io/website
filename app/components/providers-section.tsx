"use client";

import { useState } from "react";

// Hackathon-only section: every provider and track team in one place.
// Remove this component (and its nav link) after the hackathon.

type Category = "Acquirers" | "Custody" | "Networks" | "Infrastructure";

const CATEGORIES: ("All" | Category)[] = ["All", "Acquirers", "Custody", "Networks", "Infrastructure"];

const PROVIDERS: { name: string; mark: string; category: Category; status: "Connector" | "Hackathon track" | "Planned"; desc: string }[] = [
  { name: "Kuberpayss", mark: "Ku", category: "Acquirers", status: "Connector", desc: "Card acquiring through your own merchant credentials, routed by corridor and currency." },
  { name: "Payvang", mark: "Pv", category: "Acquirers", status: "Connector", desc: "Card acquiring connector with hosted checkout and webhook-driven status updates." },
  { name: "BitGo", mark: "Bg", category: "Custody", status: "Connector", desc: "Institutional custody for settlement wallets, with transfers signed by your policy." },
  { name: "Solana", mark: "So", category: "Networks", status: "Hackathon track", desc: "Fast confirmations and low fees for stablecoin payments, settlement, and frequent agent transactions." },
  { name: "Cardano", mark: "Ca", category: "Networks", status: "Hackathon track", desc: "Agent-driven storefront payments with onchain confirmation and merchant reconciliation." },
  { name: "Ethereum", mark: "Et", category: "Networks", status: "Connector", desc: "ERC-20 stablecoin and native payments, watched by a per-chain block monitor." },
  { name: "Base", mark: "Ba", category: "Networks", status: "Connector", desc: "Low-cost EVM settlement for USDC payments and agent workflows." },
  { name: "Tron", mark: "Tr", category: "Networks", status: "Connector", desc: "TRC-20 stablecoin payments with confirmation tracking and sweeps." },
  { name: "Bitcoin", mark: "Bt", category: "Networks", status: "Connector", desc: "Native BTC payments reconciled against your configured confirmation policy." },
  { name: "NOWNodes", mark: "Nn", category: "Infrastructure", status: "Hackathon track", desc: "Node access for reading transactions and tracking confirmations across supported networks." },
  { name: "Chainlink CRE", mark: "Cl", category: "Infrastructure", status: "Hackathon track", desc: "Programmable workflows that combine payment events, external pricing data, and onchain conditions." },
];

const TRACKS = [
  { team: "Payminto Core", track: "Main", desc: "Composable, self-hosted payment infrastructure for humans and AI agents. Deploy your payment layer, connect supported acquirers, and integrate checkout through APIs and webhooks. Configure payment links, dynamic payments, multiple fiat currencies, crypto settlement, layered fees, conversion buffers, and rolling reserves." },
  { team: "Payminto Solana", track: "Solana", desc: "A self-hosted payment layer for e-commerce stores and AI agents, with Solana powering stablecoin payments and settlement. Connect checkout, agent workflows, and payment providers through modular APIs and webhooks, on infrastructure you own and operate." },
  { team: "Payminto Multichain", track: "NOWNodes", desc: "A self-hosted payment router with modular blockchain integrations on NOWNodes. Read transactions, track confirmations, and reconcile crypto payments across supported networks, with consistent APIs and webhooks for stores and AI agents." },
  { team: "Payminto Agent Commerce", track: "Cardano", desc: "A self-hosted payment layer for agentic commerce on Cardano. An agent-driven storefront connects to payment requests, onchain confirmation, and merchant reconciliation, for both human checkout and coordinated AI-agent workflows." },
  { team: "Payminto Workflows", track: "Chainlink", desc: "Programmable payment workflows with Chainlink CRE and a self-hosted payment core. Payment events, external pricing data, conversion buffers, and onchain settlement conditions combine into one auditable workflow." },
];

export function ProvidersSection() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const shown = filter === "All" ? PROVIDERS : PROVIDERS.filter(p => p.category === filter);

  return (
    <section id="providers" className="section-alt border-y border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground-muted">Providers & networks</p>
            <h2 className="font-display text-[44px] font-bold text-foreground md:text-[56px]">
              Bring your providers.
              <br />
              <span className="brand-underline">Keep one integration.</span>
            </h2>
          </div>
          <p className="text-[17px] font-semibold leading-[1.5] text-foreground-soft">
            Operators connect supported processors with their own credentials.
            Developers add new processors as connector modules built from the provider&apos;s API documentation.
            Routing, checkout, settlement, and events stay on the same APIs and webhooks.
          </p>
        </div>

        <div role="group" aria-label="Filter providers" className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.map(c => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className={`provider-filter ${filter === c ? "provider-filter-active" : ""}`}>
              {c}
            </button>
          ))}
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Providers">
          {shown.map(p => (
            <li key={p.name} className="card-ring hover-lift flex gap-4 p-5">
              <span className="provider-mark" aria-hidden="true">{p.mark}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[16px] font-bold">{p.name}</h3>
                  <span className={`provider-status ${p.status === "Connector" ? "provider-status-live" : ""}`}>{p.status}</span>
                </div>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[.12em] text-foreground-muted">{p.category}</p>
                <p className="mt-2 text-[14px] font-semibold leading-[1.5] text-foreground-soft">{p.desc}</p>
              </div>
            </li>
          ))}
          <li className="flex gap-4 rounded-xl border border-dashed border-border-strong p-5">
            <span className="provider-mark provider-mark-add" aria-hidden="true">+</span>
            <div>
              <h3 className="text-[16px] font-bold">Your processor</h3>
              <p className="mt-2 text-[14px] font-semibold leading-[1.5] text-foreground-soft">Write a connector module against the provider&apos;s API and route payments through it like any other rail.</p>
            </div>
          </li>
        </ul>
        <p className="mt-4 text-xs font-semibold text-foreground-muted">Provider availability, verification, and fees depend on each provider, network, and region.</p>

        <div className="mt-20">
          <h3 className="mb-2 text-[24px] font-bold md:text-[28px]">One product, five hackathon tracks.</h3>
          <p className="mb-8 max-w-2xl text-[16px] font-semibold leading-[1.5] text-foreground-soft">
            Payminto stays the shared identity. Each team builds a proposed integration aligned with the{" "}
            <a href="https://token2049.com/singapore/2049-origins" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-ink underline underline-offset-4">TOKEN2049 Origins tracks</a>.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TRACKS.map((t, i) => (
              <article key={t.team} className={`card-ring p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <span className="provider-status provider-status-live">{t.track} track</span>
                <h4 className="mt-4 text-[19px] font-bold tracking-[-.02em]">{t.team}</h4>
                <p className="mt-2 text-[14px] font-semibold leading-[1.55] text-foreground-soft">{t.desc}</p>
              </article>
            ))}
            <article className="grid gap-4 rounded-xl bg-brand-navy p-6 text-white md:col-span-2 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 lg:col-span-3">
              <span className="provider-status provider-status-inverse">Why Solana</span>
              <p className="text-[15px] font-semibold leading-[1.55] text-white/85">
                Fast confirmations, low transaction fees, and stablecoin payment tooling suit merchant settlement and frequent agent transactions.
                Solana is the hackathon&apos;s onchain payment rail, while the wider payment infrastructure stays modular.
              </p>
              <a href="https://solana.com/docs/payments" target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold whitespace-nowrap text-white underline underline-offset-4">Solana payment docs</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
