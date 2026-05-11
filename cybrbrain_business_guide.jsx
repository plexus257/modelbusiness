
import { useState } from "react";

const SECTIONS = [
  { id: "executive", label: "Executive Summary", icon: "📋" },
  { id: "problem", label: "The Problem", icon: "🔥" },
  { id: "solution", label: "Our Solution", icon: "💡" },
  { id: "how", label: "How It Works", icon: "⚙️" },
  { id: "phase1", label: "Phase 1 — Built", icon: "✅" },
  { id: "phase2", label: "Phase 2 — ERP", icon: "🏗️" },
  { id: "phase3", label: "Phase 3 — CA AI", icon: "🤖" },
  { id: "market", label: "Market & TAM", icon: "📊" },
  { id: "competitors", label: "Competitors", icon: "⚔️" },
  { id: "financials", label: "Financials", icon: "💰" },
  { id: "investment", label: "Investment Ask", icon: "🤝" },
  { id: "pipeline", label: "Full Pipeline", icon: "🗺️" },
];

export default function BusinessGuide() {
  const [active, setActive] = useState("executive");

  const pages = {
    executive: <ExecutivePage />,
    problem: <ProblemPage />,
    solution: <SolutionPage />,
    how: <HowPage />,
    phase1: <Phase1Page />,
    phase2: <Phase2Page />,
    phase3: <Phase3Page />,
    market: <MarketPage />,
    competitors: <CompetitorsPage />,
    financials: <FinancialsPage />,
    investment: <InvestmentPage />,
    pipeline: <PipelinePage />,
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f1c3f 0%, #1a3a6b 100%)", padding: "24px 28px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>Confidential Business Document · May 2026</div>
            <div style={{ color: "#fff", fontSize: 26, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.2 }}>Cybrbrain</div>
            <div style={{ color: "#93c5fd", fontSize: 13, marginTop: 4 }}>by Kryn Intelligence · Ahmedabad, India</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#f59e0b", fontSize: 28, fontWeight: 900 }}>₹2,000 Cr</div>
            <div style={{ color: "#64748b", fontSize: 11 }}>ARR target · 2032</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 0, overflowX: "auto", paddingBottom: 0 }}>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)}
              style={{
                padding: "10px 14px", background: "transparent", border: "none",
                borderBottom: active === s.id ? "3px solid #f59e0b" : "3px solid transparent",
                color: active === s.id ? "#f59e0b" : "#94a3b8",
                fontSize: 11.5, fontWeight: active === s.id ? 700 : 400,
                cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s"
              }}>
              {s.icon} {s.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "28px 28px 60px", maxWidth: 900, margin: "0 auto" }}>
        {pages[active]}
      </div>
    </div>
  );
}

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function H1({ children }) {
  return <h1 style={{ fontSize: 26, fontWeight: 900, color: "#0f172a", margin: "0 0 8px", letterSpacing: "-0.02em" }}>{children}</h1>;
}
function H2({ children, color = "#0f172a" }) {
  return <h2 style={{ fontSize: 18, fontWeight: 800, color, margin: "0 0 14px" }}>{children}</h2>;
}
function H3({ children }) {
  return <h3 style={{ fontSize: 14, fontWeight: 700, color: "#374151", margin: "0 0 10px" }}>{children}</h3>;
}
function Para({ children }) {
  return <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.75, margin: "0 0 16px" }}>{children}</p>;
}
function Tag({ children, color = "#1a56db", bg = "#eff6ff" }) {
  return <span style={{ background: bg, color, borderRadius: 20, padding: "3px 12px", fontSize: 11, fontWeight: 700, display: "inline-block", marginRight: 6, marginBottom: 6 }}>{children}</span>;
}
function Card({ children, style = {} }) {
  return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 24px", ...style }}>{children}</div>;
}
function Highlight({ children, color = "#f59e0b" }) {
  return <span style={{ background: color + "20", color, fontWeight: 700, borderRadius: 4, padding: "1px 6px" }}>{children}</span>;
}
function Check({ children }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
      <span style={{ color: "#16a34a", fontSize: 16, marginTop: 1 }}>✓</span>
      <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{children}</span>
    </div>
  );
}
function Arrow({ children }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
      <span style={{ color: "#1a56db", fontSize: 14, marginTop: 2 }}>→</span>
      <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{children}</span>
    </div>
  );
}
function NavyBox({ children, title }) {
  return (
    <div style={{ background: "#0f1c3f", borderRadius: 14, padding: "22px 26px", color: "#fff", marginBottom: 20 }}>
      {title && <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>{title}</div>}
      {children}
    </div>
  );
}
function StatCard({ value, label, sub, color = "#1a56db" }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "18px 20px", textAlign: "center" }}>
      <div style={{ fontSize: 26, fontWeight: 900, color, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: "#64748b" }}>{sub}</div>}
    </div>
  );
}
function Timeline({ steps }) {
  return (
    <div style={{ position: "relative" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 32, height: 32, minWidth: 32, borderRadius: "50%", background: s.color || "#1a56db", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800 }}>{i + 1}</div>
            {i < steps.length - 1 && <div style={{ width: 2, flex: 1, background: "#e2e8f0", minHeight: 20 }} />}
          </div>
          <div style={{ paddingTop: 6, paddingBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{s.title}</div>
            <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

function ExecutivePage() {
  return (
    <div>
      <H1>Business Overview — Cybrbrain</H1>
      <Para>This document is written in plain language so that anyone — whether you are a Chartered Accountant, an investor, a pharma factory owner, or a friend of the founder — can fully understand what Cybrbrain does, why it matters, and how big it can become.</Para>

      <NavyBox title="In one sentence">
        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1.4 }}>
          Cybrbrain is the WhatsApp-native software that keeps Indian pharma factories out of legal trouble and ensures they get paid on time — automatically.
        </div>
      </NavyBox>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
        <Card>
          <H3>The Company</H3>
          <Arrow><strong>Name:</strong> Cybrbrain (by Kryn Intelligence)</Arrow>
          <Arrow><strong>Founder:</strong> Dhruv Shah, Ahmedabad</Arrow>
          <Arrow><strong>Founded:</strong> 2026</Arrow>
          <Arrow><strong>Status:</strong> Product live at cybrbrain.vercel.app</Arrow>
          <Arrow><strong>Tech stack:</strong> Next.js, Supabase, WhatsApp, AI</Arrow>
          <Arrow><strong>Revenue model:</strong> ₹25,000/year per factory</Arrow>
        </Card>
        <Card>
          <H3>The Opportunity</H3>
          <Arrow><strong>8,500+</strong> pharma factories in India</Arrow>
          <Arrow><strong>₹8,500 Cr</strong> addressable market in India</Arrow>
          <Arrow><strong>Zero</strong> good software exists for this</Arrow>
          <Arrow><strong>SAP</strong> costs ₹8-25L/yr, takes 18 months</Arrow>
          <Arrow><strong>Schedule M</strong> compliance is now mandatory</Arrow>
          <Arrow><strong>Section 43B(h)</strong> law gives payment rights</Arrow>
        </Card>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <H3>What we have already built (Phase 1 — Complete)</H3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {["Document management + WhatsApp upload", "Compliance readiness score (0-100)", "Deviation & CAPA tracking", "CDSCO inspection pack (15 seconds)", "43B(h) payment tracker", "Automated buyer reminders", "Payment proof pack for Samadhaan", "CA exceptions panel", "Razorpay billing (₹25K/year)", "7 AM WhatsApp daily digest"].map((f, i) => (
            <div key={i} style={{ background: "#f0fdf4", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#166534" }}>✓ {f}</div>
          ))}
        </div>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        <StatCard value="₹25K" label="Per factory / year" sub="Current pricing" color="#1a56db" />
        <StatCard value="14 min" label="Setup time" sub="vs 18 months for SAP" color="#16a34a" />
        <StatCard value="15 sec" label="Inspection pack" sub="vs 2 days manually" color="#7c3aed" />
        <StatCard value="₹2,000Cr" label="ARR target 2032" sub="50,000 customers" color="#f59e0b" />
      </div>

      <NavyBox title="Investment opportunity">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {[
            { label: "Pre-Seed (Now)", amt: "₹50L — ₹1 Cr", use: "Team + 50 customers" },
            { label: "Seed (2027)", amt: "₹5 — 10 Cr", use: "500 customers + Phase 2" },
            { label: "Series A (2028)", amt: "₹40 — 75 Cr", use: "Pan-India + International" },
          ].map((r, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 700, marginBottom: 6 }}>{r.label}</div>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 900, marginBottom: 4 }}>{r.amt}</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>{r.use}</div>
            </div>
          ))}
        </div>
      </NavyBox>
    </div>
  );
}

function ProblemPage() {
  return (
    <div>
      <H1>The Two Problems We Solve</H1>
      <Para>There are 8,500+ pharma factories in India making medicines worth billions of rupees. These are not large corporations — most have 20 to 200 workers, a factory in an industrial area like Vatva (Ahmedabad) or Tarapur (Maharashtra), and a family running the business for decades. They have two nightmares that keep them up at night.</Para>

      <div style={{ background: "#fef2f2", border: "2px solid #fecaca", borderRadius: 16, padding: "24px 28px", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div style={{ fontSize: 40 }}>🔴</div>
          <div>
            <H2 color="#dc2626">Problem 1: The Government Inspector</H2>
            <Para>India's drug regulator (CDSCO — Central Drugs Standard Control Organisation) can send an inspector to any pharma factory, unannounced, at any time. The inspector looks for one thing: <Highlight color="#dc2626">proof</Highlight> that the factory is following rules called <strong>Schedule M</strong> and an international standard called <strong>ALCOA+</strong>.</Para>
            <Para>What does ALCOA+ mean in simple terms? Every batch of medicine made must have a paper trail proving: <em>Who made it, when, using which raw materials, with which equipment, and that quality was checked at every step.</em> If any record is missing, altered, or not instantly available — the factory gets a warning notice. If it's serious, the factory gets shut down.</Para>
            <Card style={{ background: "#fff5f5", border: "1px solid #fecaca", marginBottom: 16 }}>
              <H3>What happens in a real factory today</H3>
              <Arrow>BMR (Batch Manufacturing Records) are written on paper and stored in a filing cabinet</Arrow>
              <Arrow>SOPs (Standard Operating Procedures) are in a binder that nobody has updated in 2 years</Arrow>
              <Arrow>When an inspector arrives, the QA Head spends 2-3 hours searching for documents</Arrow>
              <Arrow>The inspector finds 3 missing signatures from 6 months ago</Arrow>
              <Arrow>Factory gets a show-cause notice → potential shutdown for 3-6 months</Arrow>
              <Arrow>Financial loss: ₹50L to ₹5 Cr depending on factory size</Arrow>
            </Card>
            <div style={{ background: "#dc262615", borderRadius: 10, padding: "14px 18px" }}>
              <strong style={{ color: "#dc2626" }}>Scale of the problem:</strong>
              <span style={{ fontSize: 13, color: "#374151" }}> Since December 2025, Schedule M compliance is <strong>mandatory</strong> for all Indian pharma manufacturers. CDSCO has begun surprise inspection drives across Gujarat, Maharashtra, and Karnataka. Hundreds of notices have already been issued.</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#fffbeb", border: "2px solid #fcd34d", borderRadius: 16, padding: "24px 28px", marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div style={{ fontSize: 40 }}>⏱️</div>
          <div>
            <H2 color="#d97706">Problem 2: The Payment Never Arrives</H2>
            <Para>A pharma factory supplies medicines worth ₹5,00,000 to a distributor in January. The distributor says "I'll pay next week." It's now April. The payment still hasn't come. The factory owner has already paid for the raw materials, labour, and electricity. His working capital is stuck.</Para>
            <Para>In 2006, India passed the <strong>MSMED Act</strong> to protect small businesses like this. In 2023, <strong>Section 43B(h)</strong> of the Income Tax Act made it even stronger: buyers <em>must</em> pay MSME suppliers within <strong>45 days</strong> of receiving goods. If they don't, they cannot claim the payment as a tax deduction — which should force them to pay.</Para>
            <Card style={{ background: "#fffbf0", border: "1px solid #fcd34d", marginBottom: 16 }}>
              <H3>The ground reality</H3>
              <Arrow>Most factory owners don't know about their legal rights under 43B(h)</Arrow>
              <Arrow>Even those who know have no organized proof — no reminder logs, no delivery acknowledgements</Arrow>
              <Arrow>Lawyers cost ₹2-5L to hire for a dispute. Not worth it for a ₹3L payment</Arrow>
              <Arrow>The government's Samadhaan portal exists — but getting your case heard needs organized documentation</Arrow>
              <Arrow>Average pharma MSME has <strong>₹73 lakhs</strong> stuck in outstanding payments at any given time</Arrow>
            </Card>
            <div style={{ background: "#d9770615", borderRadius: 10, padding: "14px 18px" }}>
              <strong style={{ color: "#d97706" }}>Combined impact:</strong>
              <span style={{ fontSize: 13, color: "#374151" }}> A factory running at 40% cash efficiency because ₹70L is stuck with buyers who keep saying "next week" is a factory that cannot grow, cannot modernize, and often cannot even pay its staff on time. This is the daily reality for 8,500+ factories.</span>
            </div>
          </div>
        </div>
      </div>

      <NavyBox title="Why nobody has solved this yet">
        <Arrow><span style={{ color: "#e2e8f0" }}>SAP and Oracle are built for large companies — minimum ₹8L/year, 18-month implementation, requires a dedicated IT team. A 50-person factory in Vatva cannot afford this.</span></Arrow>
        <Arrow><span style={{ color: "#e2e8f0" }}>Indian pharma software (Busy, Tally plugins) handles accounting but has zero compliance features — no audit trail, no ALCOA+, no deviation tracking.</span></Arrow>
        <Arrow><span style={{ color: "#e2e8f0" }}>No existing software integrates with WhatsApp — which is the communication channel for every factory in India. Staff can't use email. They use WhatsApp.</span></Arrow>
        <Arrow><span style={{ color: "#e2e8f0" }}>No software has built the 43B(h) payment defense system — because this law is only 2 years old and nobody has acted fast enough.</span></Arrow>
      </NavyBox>
    </div>
  );
}

function SolutionPage() {
  return (
    <div>
      <H1>Our Solution — Cybrbrain</H1>
      <Para>Cybrbrain is software that sits on your phone and your computer and does two things: keeps your factory inspection-ready, and makes sure you get paid on time. It works through WhatsApp for staff who don't use computers, and through a clean web dashboard for owners and QA Heads.</Para>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div style={{ background: "#eff6ff", border: "2px solid #93c5fd", borderRadius: 14, padding: "22px" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>🛡️</div>
          <H2 color="#1a56db">Solution 1: Inspection Armor</H2>
          <Para style={{ fontSize: 13 }}>Staff sends document photos via WhatsApp. AI reads and identifies them. QA Head confirms with one tap. Every document is stored with a digital fingerprint and exact timestamp. When an inspector arrives, generate a complete pack in 15 seconds.</Para>
          <div style={{ background: "#fff", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>Before vs After</div>
            <div style={{ fontSize: 12, color: "#dc2626", marginBottom: 4 }}>❌ Before: 2-3 hours of panic searching for papers</div>
            <div style={{ fontSize: 12, color: "#16a34a" }}>✓ After: 15-second inspection pack with full audit trail</div>
          </div>
        </div>
        <div style={{ background: "#fffbeb", border: "2px solid #fcd34d", borderRadius: 14, padding: "22px" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>💰</div>
          <H2 color="#d97706">Solution 2: Payment Defense</H2>
          <Para style={{ fontSize: 13 }}>The moment a buyer acknowledges receiving your goods, a 45-day countdown starts automatically. Reminders go out on Day 30, 40, 44, and 45 via WhatsApp. If payment still doesn't come, one click generates the complete legal proof pack for Samadhaan filing.</Para>
          <div style={{ background: "#fff", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>Before vs After</div>
            <div style={{ fontSize: 12, color: "#dc2626", marginBottom: 4 }}>❌ Before: ₹73L stuck, no organized proof, no leverage</div>
            <div style={{ fontSize: 12, color: "#16a34a" }}>✓ After: Automated reminders, legal proof, Samadhaan-ready</div>
          </div>
        </div>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <H3>The key insight — Why WhatsApp?</H3>
        <Para>India has 550 million WhatsApp users. A store keeper in a pharma factory in Ankleshwar knows how to send a photo on WhatsApp. He does not know how to use enterprise software. Cybrbrain works by accepting photos on a WhatsApp number — the staff doesn't need to learn anything new. This is why Cybrbrain can be deployed in a 50-person factory in 10 minutes, while SAP takes 18 months.</Para>
      </Card>

      <Card style={{ marginBottom: 20 }}>
        <H3>Who uses Cybrbrain and how</H3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { role: "Factory Owner / MD", usage: "Opens WhatsApp at 7 AM → Cybrbrain sends overnight digest: factory score, payment status, open issues. Never needs to log in.", color: "#1a56db" },
            { role: "QA Head", usage: "Reviews AI-detected documents in tagging queue. Activates inspection mode when inspector arrives. Generates compliance packs.", color: "#7c3aed" },
            { role: "Factory Staff", usage: "Sends document photos to the Cybrbrain WhatsApp number. That's it. No training needed. No app to download.", color: "#16a34a" },
            { role: "Chartered Accountant", usage: "Sees payment exceptions for all their client factories in one panel. AI drafts legal letters. CA reviews and approves.", color: "#d97706" },
          ].map((u, i) => (
            <div key={i} style={{ background: "#f8fafc", borderRadius: 10, padding: "14px", borderTop: `3px solid ${u.color}` }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: u.color, marginBottom: 8 }}>{u.role}</div>
              <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.6 }}>{u.usage}</div>
            </div>
          ))}
        </div>
      </Card>

      <NavyBox title="The unfair advantage — What makes Cybrbrain impossible to copy quickly">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { title: "Immutable Audit Trail", desc: "Every document, every action is permanently recorded with SHA-256 cryptographic proof. A CDSCO inspector or court accepts this as legal evidence. Once a factory's compliance history is in Cybrbrain, it cannot be moved — switching software means losing years of audit trail." },
            { title: "WhatsApp-Native Architecture", desc: "Building on WhatsApp Business API requires Twilio partnership, sandbox management, message template approvals — 6 months of work minimum. Then you need the AI layer to read Indian pharma documents (BMR, SOP, COA). This is years of work." },
            { title: "CA Distribution Network", desc: "One Chartered Accountant serves 10-20 pharma factories. When a CA adopts Cybrbrain's CA panel, all their clients come with them. This network effect compounds — 50 CAs = 750 factories." },
            { title: "Regulatory Depth", desc: "Schedule M, ALCOA+, 43B(h), MSMED Act, CDSCO inspection procedures — all encoded into the rules engine. A competitor needs 3 years of pharma compliance expertise to replicate this. We already have it." },
          ].map((a, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ color: "#f59e0b", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{a.title}</div>
              <div style={{ color: "#cbd5e1", fontSize: 12, lineHeight: 1.7 }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </NavyBox>
    </div>
  );
}

function HowPage() {
  return (
    <div>
      <H1>How It Actually Works — A Day in the Life</H1>
      <Para>Let us walk through a real day at Mehta Pharmaceuticals, a 60-person tablet manufacturing factory in Vatva GIDC, Ahmedabad. They have been using Cybrbrain for 3 months.</Para>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div>
          <H2 color="#1a56db">Morning — Factory Operations</H2>
          <Timeline steps={[
            { title: "7:00 AM — Owner wakes up", desc: "WhatsApp from Cybrbrain already waiting: 'Good morning, Ashwinbhai! 🌅 Factory readiness: 87% ✅ | 0 critical issues | 2 invoices aging (Day 32 & Day 38) | 4 documents waiting for QA review'", color: "#1a56db" },
            { title: "8:30 AM — Production starts", desc: "Batch BN-2026-048 of Paracetamol 500mg begins. Store keeper Ramesh takes a photo of the BMR start page and sends it to the Cybrbrain WhatsApp number.", color: "#7c3aed" },
            { title: "8:31 AM — AI reads the document", desc: "Cybrbrain's AI reads the photo: 'Batch Manufacturing Record | Product: Paracetamol 500mg | Batch: BN-2026-048 | Manufacture Date: 11 May 2026'. Sends confirmation WhatsApp to Ramesh.", color: "#16a34a" },
            { title: "9:00 AM — QA Head reviews", desc: "Priya (QA Head) opens the Cybrbrain app on her laptop. She sees the document in the tagging queue, confirms the AI reading with one click. Readiness score updates from 87% to 89%.", color: "#d97706" },
          ]} />
        </div>

        <div>
          <H2 color="#dc2626">Afternoon — The Inspector Arrives</H2>
          <Timeline steps={[
            { title: "2:30 PM — Unannounced visit", desc: "CDSCO inspector Mr. Sharma walks through the factory gate. Priya (QA Head) feels her heart rate spike. She opens Cybrbrain on her phone.", color: "#dc2626" },
            { title: "2:31 PM — Inspection Mode activated", desc: "Priya taps 'Activate Inspection Mode'. The dashboard locks to read-only. Ashwinbhai (Owner) gets an instant WhatsApp: '⚠️ INSPECTION MODE ACTIVATED — Plant Vatva Unit 1 — Readiness: 89%'", color: "#dc2626" },
            { title: "2:45 PM — Inspector asks for records", desc: "'Show me all batch records from Q1 2026 for your Paracetamol line.' Priya types 'Paracetamol' in the search bar. All 12 batches appear instantly with full documents.", color: "#374151" },
            { title: "2:47 PM — Pack generated", desc: "Inspector wants everything in one file. Priya clicks 'Generate Inspection Pack → Q1 2026 → Paracetamol'. 15 seconds later: ZIP with every document, PDF index with digital fingerprints, full audit trail.", color: "#16a34a" },
            { title: "3:15 PM — Inspection complete", desc: "Inspector reviews everything. Zero findings. 'Your records are very well organized.' He leaves. Priya sends a WhatsApp to Ashwinbhai: '✅ Inspection complete. Zero findings.'", color: "#16a34a" },
          ]} />
        </div>
      </div>

      <H2>Evening — Payment Follow-up (Automatic)</H2>
      <Card style={{ marginBottom: 20 }}>
        <Para>Meanwhile, Cybrbrain has been running in the background. It noticed that Surat Pharma Distributors acknowledged delivery of Invoice INV-2026-031 (₹2,80,000) 30 days ago and hasn't paid yet.</Para>
        <div style={{ background: "#f8fafc", borderRadius: 10, padding: "16px", fontFamily: "monospace", fontSize: 12, color: "#374151", lineHeight: 1.8 }}>
          <div style={{ color: "#64748b", marginBottom: 8 }}>// Automated WhatsApp sent to buyer at 2:30 PM IST</div>
          <div>"Hello Nilesh Bhai,</div>
          <div style={{ marginLeft: 16 }}>This is a friendly reminder regarding Invoice #INV-2026-031</div>
          <div style={{ marginLeft: 16 }}>dated 11 April 2026 for <strong>₹2,80,000</strong> from Mehta Pharmaceuticals.</div>
          <div style={{ marginLeft: 16 }}>As per our records, payment is due by <strong>26 May 2026</strong> (15 days from today).</div>
          <div style={{ marginLeft: 16 }}>For any queries, please contact us. Thank you.</div>
          <div>— Mehta Pharmaceuticals"</div>
        </div>
        <Para style={{ marginTop: 14 }}>Ashwinbhai sees this logged in his payment dashboard. Day 30 reminder sent automatically. Day 40 will go out with a formal legal reference to Section 43B(h). Day 44 will be a final notice. Ashwinbhai didn't have to do anything.</Para>
      </Card>

      <NavyBox title="The key experience difference">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ color: "#f87171", fontWeight: 700, marginBottom: 10 }}>Before Cybrbrain</div>
            <Arrow><span style={{ color: "#fca5a5" }}>Inspection day = 3 hours of chaos, searching cabinets</span></Arrow>
            <Arrow><span style={{ color: "#fca5a5" }}>Owner calls each buyer manually every week for payment</span></Arrow>
            <Arrow><span style={{ color: "#fca5a5" }}>QA Head spends 40% of time on paperwork and filing</span></Arrow>
            <Arrow><span style={{ color: "#fca5a5" }}>Compliance score unknown until inspector tells you</span></Arrow>
          </div>
          <div>
            <div style={{ color: "#86efac", fontWeight: 700, marginBottom: 10 }}>After Cybrbrain</div>
            <Arrow><span style={{ color: "#86efac" }}>Inspection pack ready in 15 seconds. Zero findings.</span></Arrow>
            <Arrow><span style={{ color: "#86efac" }}>Payment reminders automated. Legal proof organized.</span></Arrow>
            <Arrow><span style={{ color: "#86efac" }}>QA Head focuses on actual quality work, not filing</span></Arrow>
            <Arrow><span style={{ color: "#86efac" }}>Live score every morning via WhatsApp before breakfast</span></Arrow>
          </div>
        </div>
      </NavyBox>
    </div>
  );
}

function Phase1Page() {
  const features = [
    { cat: "Document Management", items: ["WhatsApp photo upload for all staff", "AI auto-identifies document type (BMR, SOP, COA, etc.)", "SHA-256 digital fingerprint for every document", "Full-text search by batch number or product name", "Immutable audit trail — every action logged forever"] },
    { cat: "Compliance Dashboard", items: ["Readiness score 0-100 (6 fixed rules, no AI guessing)", "Red/Yellow/Green risk level for the plant", "7 AM WhatsApp digest to owner every morning", "Compliance calendar with due date alerts", "Live activity feed of all factory actions"] },
    { cat: "Deviations & CAPAs", items: ["Create deviation with auto-number (DEV-2026-0001)", "Critical deviations trigger instant WhatsApp to owner", "CAPA (corrective action) with target date and assignee", "CAPA closure requires evidence upload", "Score updates automatically when CAPA closes"] },
    { cat: "Inspection Mode", items: ["One-tap dashboard lock to read-only", "Owner + CA get instant WhatsApp alert", "Document search optimized for inspector flow", "Generate inspection ZIP pack in 15 seconds", "PDF index with SHA-256 hashes for every file", "Every document view logged during inspection"] },
    { cat: "43B(h) Payment Defense", items: ["45-day countdown from acknowledgement date", "Color-coded aging: Green → Amber → Red → Critical", "Day 30/40/44/45 WhatsApp reminders auto-sent to buyer", "Messages reference the actual law (Section 43B(h))", "One-click Samadhaan proof pack (ZIP + legal PDF)", "CA panel to review and approve formal letters"] },
    { cat: "Business Infrastructure", items: ["14-day free trial (no card needed)", "₹25,000/year subscription via Razorpay", "Auto-provisioning on payment (WhatsApp + email receipt)", "Role-based access: Owner, QA Head, Staff, CA, Admin", "Team invite via WhatsApp", "Admin panel to manage all companies"] },
  ];

  return (
    <div>
      <H1>Phase 1 — What We Built (Complete)</H1>
      <div style={{ background: "#f0fdf4", border: "2px solid #86efac", borderRadius: 14, padding: "18px 24px", marginBottom: 24 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: "#15803d", marginBottom: 4 }}>✅ Phase 1 is complete and live at cybrbrain.vercel.app</div>
        <div style={{ fontSize: 13, color: "#166534" }}>Built in 14 evenings (~28 hours) using Claude Code AI. Full product — not a prototype. Real customers can sign up, pay, and use it today.</div>
      </div>

      <div style={{ display: "grid", gap: 14 }}>
        {features.map((f, i) => (
          <Card key={i}>
            <H3>{f.cat}</H3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {f.items.map((item, j) => <Check key={j}>{item}</Check>)}
            </div>
          </Card>
        ))}
      </div>

      <Card style={{ marginTop: 20, background: "#f8fafc" }}>
        <H3>Technology stack (for technical readers)</H3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {[["Next.js 16", "Frontend framework (same as Vercel, Notion)"], ["Supabase", "Database + Auth (PostgreSQL, Google OAuth)"], ["Groq AI", "Document reading, letter drafting (llama-3.3-70b)"], ["Twilio", "WhatsApp messaging API"], ["Razorpay", "Payment processing (UPI, cards)"], ["Resend", "Email delivery"], ["Vercel", "Hosting + deployment + CRON jobs"], ["JSZip + react-pdf", "ZIP generation + PDF creation"]].map(([t, d], i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "10px 12px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: "#0f172a", marginBottom: 2 }}>{t}</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>{d}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Phase2Page() {
  const [open, setOpen] = useState("2a");

  const phases = {
    "2a": {
      label: "Phase 2A — CRM + Sales + Procurement",
      color: "#1a56db",
      timeline: "Q3 2026 – Q1 2027",
      what: "This phase turns Cybrbrain from a compliance tool into the front office of a pharma factory. Instead of managing compliance documents only, the factory now manages its entire buyer and supplier relationships, sales quotations, purchase orders, and goods receipt — all in one place.",
      modules: [
        { name: "Buyer-Supplier Master (CRM)", desc: "Complete database of all buyers and suppliers with GSTIN, drug license numbers, credit limits, and contact details. System automatically calculates each buyer's payment risk score based on how reliably they've paid in the past. Owner can see at a glance: 'This buyer always pays late — set credit limit to ₹50,000 only.'", impact: "Never get surprised by a late-paying buyer again" },
        { name: "Sales Quotation & Order Management", desc: "Owner creates a quotation for a buyer — selects products, quantities, rates. System auto-fills GST (12% for most pharma products), generates a professional PDF quotation. Buyer accepts → one click converts to Sales Order. When goods are dispatched, Delivery Note is auto-generated with batch numbers for full traceability.", impact: "Complete sales cycle in one system — no more Excel" },
        { name: "Procurement & Purchase Orders", desc: "When raw materials run low, system raises a Purchase Request automatically. Compares top 3 suppliers by COA pass rate and price, shows recommendation. Owner approves → Purchase Order sent to supplier via WhatsApp. Goods arrive → store keeper logs receipt → QA uploads COA for verification → 3-way match (PO = GRN = Invoice) before payment is released.", impact: "Zero raw material shortages. No bad batch enters production." },
      ],
    },
    "2b": {
      label: "Phase 2B — Production + Inventory + Equipment",
      color: "#7c3aed",
      timeline: "Q2 2027 – Q4 2027",
      what: "This is where Cybrbrain becomes a manufacturing ERP. The Batch Manufacturing Record — currently the most important paper document in the factory — becomes a live digital system. Every step of production is recorded in real time.",
      modules: [
        { name: "Digital Batch Manufacturing Record (BMR) Engine", desc: "QA Head creates a Bill of Materials (formula) for each product — ingredients, quantities, process steps, and quality checks at each stage. When production starts, the system generates a digital BMR automatically from the formula. Each production step must be completed and electronically signed before the next step unlocks. In-process quality checks (tablet hardness, dissolution time, etc.) are recorded with actual values vs. specification limits. If anything is out of specification, a deviation is automatically raised.", impact: "Schedule M compliance built into every batch. Zero paper BMRs." },
        { name: "Inventory & Warehouse Management", desc: "Complete stock tracking for every raw material, packaging material, and finished good — by batch, location, and expiry date. FEFO (First Expiry First Out) is automatically enforced — the system always picks the batch expiring soonest. If a raw material batch is recalled by a supplier, the system instantly shows every finished goods batch made with that material — and can send recall notices to buyers automatically.", impact: "Zero expiry waste. Instant recall traceability." },
        { name: "Equipment & Calibration Management", desc: "Every piece of equipment (autoclave, HPLC, dissolution tester, HVAC) is registered with its calibration schedule. 30 days before calibration is due, QA Head gets a WhatsApp reminder. If calibration expires, the equipment is automatically blocked from being used in production. IQ/OQ/PQ (Installation, Operational, and Performance Qualification) documents are stored and tracked.", impact: "No equipment is ever used with expired calibration." },
      ],
    },
    "2c": {
      label: "Phase 2C — Finance + AI Analytics",
      color: "#dc2626",
      timeline: "Q1 2028 – Q3 2028",
      what: "Cybrbrain becomes a full ERP with accounting, GST, and AI-powered analytics. The CA's job of monthly closing, GST filing, and financial reporting is reduced to a review-and-approve workflow.",
      modules: [
        { name: "Full Accounting & GST Engine", desc: "Every transaction in Cybrbrain automatically posts to the general ledger — sales invoice → debit buyer account, credit revenue, credit GST payable. GST is calculated and split (CGST, SGST, IGST) based on state of supply. At month end, GSTR-1 data is ready for export. Bank statements can be imported and auto-reconciled — most transactions match automatically. P&L, Balance Sheet, and Cash Flow statements are generated in one click.", impact: "CA's monthly closing time: from 5 days to 1 day." },
        { name: "AI Analytics & Demand Planning", desc: "Natural language queries: owner types 'What was our revenue from Gujarat buyers in Q3?' and gets an instant chart. AI analyzes 24 months of sales data to forecast what to produce next quarter. Insight cards appear on the dashboard: 'Your Paracetamol yield dropped 1.2% — check granulation step timing' or 'You should order Paracetamol API in 12 days based on current consumption.' Annual Product Review (required by CDSCO) is auto-generated from batch data.", impact: "Owner makes data-driven decisions without a management consultant." },
      ],
    },
  };

  const p = phases[open];

  return (
    <div>
      <H1>Phase 2 — Full Pharma ERP</H1>
      <Para>Phase 1 solved compliance and payment. Phase 2 turns Cybrbrain into a complete Enterprise Resource Planning (ERP) system — the software that manages every aspect of running a pharma factory. This is where we compete directly with SAP Business One but win on cost (10x cheaper), speed (1,000x faster to deploy), and relevance (India-specific, WhatsApp-native).</Para>

      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        {Object.entries(phases).map(([key, ph]) => (
          <button key={key} onClick={() => setOpen(key)}
            style={{
              padding: "10px 20px", borderRadius: 10, border: `2px solid ${open === key ? ph.color : "#e2e8f0"}`,
              background: open === key ? ph.color + "15" : "#fff", color: open === key ? ph.color : "#64748b",
              fontWeight: 700, fontSize: 13, cursor: "pointer"
            }}>
            {ph.label.split("—")[0]}
          </button>
        ))}
      </div>

      <div style={{ background: p.color + "10", border: `2px solid ${p.color}40`, borderRadius: 16, padding: "22px 26px", marginBottom: 20 }}>
        <H2 color={p.color}>{p.label}</H2>
        <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
          <Tag color={p.color} bg={p.color + "20"}>📅 {p.timeline}</Tag>
        </div>
        <Para>{p.what}</Para>
      </div>

      <div style={{ display: "grid", gap: 14 }}>
        {p.modules.map((m, i) => (
          <Card key={i} style={{ borderLeft: `4px solid ${p.color}` }}>
            <H3>{m.name}</H3>
            <Para>{m.desc}</Para>
            <div style={{ background: p.color + "15", borderRadius: 8, padding: "10px 14px", fontSize: 13, fontWeight: 600, color: p.color }}>
              💡 Impact: {m.impact}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Phase3Page() {
  return (
    <div>
      <H1>Phase 3 — The CA Revolution</H1>

      <NavyBox title="The Big Idea">
        <div style={{ fontSize: 18, fontWeight: 800, color: "#f59e0b", lineHeight: 1.4, marginBottom: 12 }}>
          Cybrbrain becomes the AI Co-pilot for every Chartered Accountant in India who serves pharma clients — automating 70% of their routine work.
        </div>
        <div style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.7 }}>
          There are 3.5 lakh practising CAs in India. An estimated 50,000+ serve pharma manufacturing clients. Each CA visits 10-20 factories per month for GST filing, compliance reviews, payment dispute support, and financial reporting. This is 8-16 days per month per CA of largely repetitive work. Cybrbrain phase 3 automates this — the CA reviews and signs off, instead of doing the grunt work.
        </div>
      </NavyBox>

      <H2>What Cybrbrain does for a CA today (Phase 1)</H2>
      <Card style={{ marginBottom: 24 }}>
        <Arrow>Sees payment exceptions (invoices &gt;40 days) for all client factories in one panel</Arrow>
        <Arrow>AI drafts a legal reminder letter referencing 43B(h) — CA reviews and approves in one click</Arrow>
        <Arrow>Views compliance deviations and overdue CAPAs across all clients</Arrow>
        <Para style={{ fontSize: 12, color: "#64748b" }}>This already saves a CA 1-2 hours per client visit. Phase 3 goes much further.</Para>
      </Card>

      <H2 color="#7c3aed">Phase 3 — Complete CA Automation Suite</H2>

      <div style={{ display: "grid", gap: 16 }}>
        {[
          {
            id: "01",
            title: "Automated Monthly Closing",
            subtitle: "CA's biggest time sink — eliminated",
            color: "#7c3aed",
            flow: [
              "All transactions auto-posted throughout the month (Phase 2C foundation)",
              "On 1st of each month, Cybrbrain runs auto-closing: bank reconciliation, accrual postings, depreciation, provision entries",
              "CA receives WhatsApp: '📊 Monthly closing for Mehta Pharma complete. 3 items need your review.'",
              "CA opens the review screen — sees only exceptions, not 500 routine entries",
              "CA approves with one click. Books closed. Reports ready.",
              "Time saved: from 3-4 days of data entry to 30 minutes of review",
            ],
            hardcore: "AI learns the CA's preferences over time — which entries they always approve, which they modify. After 6 months, the auto-approval threshold rises to 95%+ of entries. CA only sees the truly unusual items.",
          },
          {
            id: "02",
            title: "Zero-Touch GST Filing",
            subtitle: "GSTR-1, GSTR-3B, GSTR-2A reconciliation — automated",
            color: "#1a56db",
            flow: [
              "Cybrbrain connects to GST portal via API (GSTN sandbox authorization by CA)",
              "GSTR-1 data auto-compiled from sales invoices — invoice-wise, HSN-wise, state-wise",
              "GSTR-2A auto-pulled from GST portal for the month",
              "AI reconciles: compares GSTR-2A (what suppliers filed) vs AP invoices in system",
              "Mismatches flagged: 'Supplier XYZ reported ₹15,200 but you booked ₹15,000 — check'",
              "CA reviews mismatches, approves filing. One click submits to GSTN.",
              "ITC (Input Tax Credit) maximized because every mismatch is caught.",
            ],
            hardcore: "AI knows every pharma HSN code and correct GST rate. It flags when a supplier has charged wrong GST rate — the factory can recover the difference. Saves thousands per month in wrong GST claims.",
          },
          {
            id: "03",
            title: "AI Audit Preparation",
            subtitle: "Income tax audit, statutory audit — auto-documented",
            color: "#16a34a",
            flow: [
              "Auditor asks for: trial balance, bank statements, fixed asset register, stock statement, debtors list — all auto-generated from Cybrbrain in 30 seconds",
              "For income tax audit: Section 43B(h) compliance report auto-generated (proves all MSME payments made in time, or documented reasons for delay)",
              "Schedule M compliance report: all deviations, CAPAs, audit trail for the year — one click",
              "CA uploads audit documentation from Cybrbrain directly to the auditor's portal",
              "Time saved: from 5-7 days of document compilation to 2 hours of review",
            ],
            hardcore: "Cybrbrain learns audit patterns from thousands of factories. It pre-identifies likely audit queries — 'Your inventory as of March 31 doesn't match your production records by ₹42,000 — investigate before auditor asks' — and prompts the CA to fix before the audit begins.",
          },
          {
            id: "04",
            title: "Payment Dispute Legal Automation",
            subtitle: "From complaint to legal notice — zero manual effort",
            color: "#dc2626",
            flow: [
              "Invoice crosses Day 45 without payment — Cybrbrain auto-escalates to CA panel",
              "CA sees: buyer details, invoice, delivery proof, all 4 reminder logs with timestamps, Samadhaan reference",
              "One click: AI generates a formal legal demand notice in the correct format for MSME Facilitation Council",
              "CA reads, makes minor edits, approves. System sends via registered email + WhatsApp simultaneously",
              "If payment not received in 7 days: AI prepares Samadhaan portal filing with all documents pre-filled",
              "CA reviews filing, submits. Complaint reference number auto-logged in system.",
              "CA gets credit with client: 'I recovered ₹4.2 lakh for you last month'",
            ],
            hardcore: "Cybrbrain builds a database of payment dispute outcomes — which buyers paid after Day 40 reminder vs who needed Samadhaan vs who always pays on time. AI scores every new buyer on risk at the time of first invoice creation. CA can advise owner: 'Don't give credit above ₹1 lakh to this buyer — their score is 42/100.'",
          },
          {
            id: "05",
            title: "Multi-Factory Consolidated Reporting",
            subtitle: "For CAs managing 10-20 pharma clients",
            color: "#d97706",
            flow: [
              "CA dashboard aggregates all client factories in one view",
              "Morning summary: 'Good morning! 3 factories need attention today: Mehta Pharma — 1 critical deviation. Patel Pharma — GST payment due tomorrow. Shah Labs — 2 invoices overdue >45 days.'",
              "Consolidated compliance report: all clients' readiness scores in one table",
              "Client portfolio revenue analysis: which clients are growing, which are declining (based on sales orders and invoices in system)",
              "CA can benchmark: 'Mehta Pharma's payment collection is 38 days average. Industry median in our portfolio is 42 days. Mehta is doing well.'",
            ],
            hardcore: "CA subscription (₹60,000/year) gives access to the CA Intelligence Platform — includes anonymized benchmarking across all Cybrbrain factories. CA can tell a client: 'Your yield on Paracetamol is 97.8% — the top quartile of factories in our network is 99.2%. Here is where you are losing margin.'",
          },
          {
            id: "06",
            title: "AI Tax Planning Engine",
            subtitle: "MSME-specific tax optimization",
            color: "#475569",
            flow: [
              "Cybrbrain analyzes the factory's financials and flags tax-saving opportunities automatically",
              "Section 43B analysis: 'You made payments to MSME vendors on Day 47 — ₹3,20,000 is at risk of disallowance under 43B(h). Pay before March 31 to save ₹96,000 in tax.'",
              "R&D deduction (Section 35): 'Your formulation development costs qualify as R&D — claim 150% deduction. Potential tax saving: ₹45,000.'",
              "Depreciation optimization: 'Block of assets analysis shows you can claim additional ₹2,10,000 depreciation if you put Equipment X into service before March 31.'",
              "CA reviews AI suggestions, selects which ones to act on, sends recommendations to client via WhatsApp.",
            ],
            hardcore: "Over time, Cybrbrain trains on successful tax planning strategies across thousands of pharma factories. The AI knows every MSME-specific tax provision, pharma industry-specific deductions, and state-level incentives (Gujarat's pharma hub incentives, Himachal Pradesh pharmaceutical cluster benefits). The CA becomes a strategic advisor, not a calculator.",
          },
        ].map((item, i) => {
          const [open, setOpen] = useState(false);
          return (
            <Card key={i} style={{ borderLeft: `4px solid ${item.color}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 6 }}>
                    <span style={{ background: item.color, color: "#fff", borderRadius: 8, padding: "3px 10px", fontSize: 12, fontWeight: 800 }}>{item.id}</span>
                    <H3 style={{ margin: 0 }}>{item.title}</H3>
                  </div>
                  <div style={{ fontSize: 12, color: item.color, fontWeight: 600, marginBottom: 8 }}>{item.subtitle}</div>
                </div>
                <button onClick={() => setOpen(!open)} style={{ border: "none", background: "#f1f5f9", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 12, color: "#64748b" }}>
                  {open ? "Less ↑" : "Details ↓"}
                </button>
              </div>
              {open && (
                <div style={{ marginTop: 14 }}>
                  <H3>Step-by-step flow</H3>
                  <Timeline steps={item.flow.map(f => ({ title: f, desc: "", color: item.color }))} />
                  <div style={{ background: "#0f1c3f", borderRadius: 10, padding: "14px 18px", marginTop: 10 }}>
                    <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>🔥 Hardcore vision (3-year horizon)</div>
                    <div style={{ color: "#e2e8f0", fontSize: 13, lineHeight: 1.7 }}>{item.hardcore}</div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <NavyBox title="Phase 3 Revenue Model — CA as a distribution AND revenue channel" style={{ marginTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {[
            { plan: "CA Basic Access", price: "Free forever", desc: "CA sees client compliance exceptions. Drives factory adoption." },
            { plan: "CA Professional", price: "₹60,000/year", desc: "Full CA automation suite. GST filing, monthly closing, legal notices." },
            { plan: "CA Enterprise", price: "₹1,80,000/year", desc: "Unlimited clients, tax planning AI, portfolio analytics, CA-branded client reports." },
          ].map((p, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px" }}>
              <div style={{ color: "#f59e0b", fontWeight: 700, marginBottom: 6 }}>{p.plan}</div>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 900, marginBottom: 6 }}>{p.price}</div>
              <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, color: "#94a3b8", fontSize: 13, lineHeight: 1.7 }}>
          <strong style={{ color: "#f59e0b" }}>The network flywheel:</strong> Every CA who pays for the Professional plan brings 10-20 factories. Those factories pay ₹25,000-1,50,000/year each. One CA Professional subscription (₹60K) generates ₹3-15 lakh in factory subscriptions. This is the most powerful growth loop in the business.
        </div>
      </NavyBox>
    </div>
  );
}

function MarketPage() {
  return (
    <div>
      <H1>Market Size & Opportunity</H1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
        <div style={{ background: "#eff6ff", border: "2px solid #93c5fd", borderRadius: 14, padding: "20px", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#1a56db", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>TAM — Total Addressable Market</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#1a56db", marginBottom: 4 }}>₹8,500 Cr</div>
          <div style={{ fontSize: 12, color: "#374151", marginBottom: 8 }}>India pharma compliance + ERP</div>
          <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.6 }}>8,500 pharma units × avg ₹1L/year (Phase 2 ERP pricing)</div>
        </div>
        <div style={{ background: "#f0fdf4", border: "2px solid #86efac", borderRadius: 14, padding: "20px", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#16a34a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>SAM — Serviceable Market</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#16a34a", marginBottom: 4 }}>₹2,500 Cr</div>
          <div style={{ fontSize: 12, color: "#374151", marginBottom: 8 }}>Pharma MSMEs with 20-500 workers</div>
          <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.6 }}>~5,000 factories in our target segment × ₹50,000 avg ARPU</div>
        </div>
        <div style={{ background: "#fef2f2", border: "2px solid #fca5a5", borderRadius: 14, padding: "20px", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#dc2626", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>SOM — Serviceable Obtainable (5yr)</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#dc2626", marginBottom: 4 }}>₹300 Cr</div>
          <div style={{ fontSize: 12, color: "#374151", marginBottom: 8 }}>10% market share by 2030</div>
          <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.6 }}>3,000 customers × ₹1L avg ARPU (Phase 2 pricing)</div>
        </div>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <H3>Why the market is ready RIGHT NOW</H3>
        <div style={{ display: "grid", gap: 10 }}>
          {[
            { trigger: "Schedule M Deadline (Dec 2025)", desc: "CDSCO made Schedule M compliance mandatory for ALL pharma manufacturers. Non-compliance = show-cause notice → potential shutdown. 8,500 factories are scrambling for solutions. The urgency has never been higher." },
            { trigger: "Section 43B(h) — Income Tax Act (2024)", desc: "Buyers who don't pay MSME suppliers within 45 days face tax disallowance. This law is 18 months old and just starting to be enforced. Every factory owner who reads about it wants the tool to use it." },
            { trigger: "WhatsApp Business API Maturation", desc: "WhatsApp opened its Business API to developers in 2023. The technology to build WhatsApp-native business software is now accessible. Cybrbrain is first to use it specifically for pharma compliance." },
            { trigger: "Digital India + GST + E-Invoicing", desc: "Indian pharma factories are being pushed to digitize by government mandate (GST, e-invoicing, drug traceability). The mindset shift has happened — they are ready to pay for software." },
          ].map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 14, padding: "12px 16px", background: "#f8fafc", borderRadius: 10 }}>
              <div style={{ width: 120, minWidth: 120, fontWeight: 700, fontSize: 12, color: "#1a56db", lineHeight: 1.4 }}>{m.trigger}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ marginBottom: 20 }}>
        <H3>Geographic concentration — why Gujarat first is right</H3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            { state: "Gujarat", units: "2,200+", areas: "Vatva, Naroda, Pandesara, Ankleshwar, Vapi", share: "26% of India pharma" },
            { state: "Maharashtra", units: "1,800+", areas: "MIDC Tarapur, Ambernath, Mahape, Badlapur", share: "21% of India pharma" },
            { state: "Himachal Pradesh", units: "1,200+", areas: "Baddi, Solan, Paonta Sahib", share: "14% of India pharma" },
            { state: "Telangana", units: "800+", areas: "Genome Valley, IDA Pashamylaram", share: "9% of India pharma" },
            { state: "Karnataka", units: "600+", areas: "Peenya, Jigani, Bommasandra", share: "7% of India pharma" },
            { state: "Others", units: "1,900+", areas: "UP, Rajasthan, MP, Tamil Nadu", share: "23% of India pharma" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#f8fafc", borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 2 }}>{s.state}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#1a56db", marginBottom: 4 }}>{s.units}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>{s.areas}</div>
              <Tag color="#16a34a" bg="#f0fdf4">{s.share}</Tag>
            </div>
          ))}
        </div>
      </Card>

      <NavyBox title="Global market — Phase 3">
        <Para style={{ color: "#cbd5e1" }}>The global pharma compliance software market is valued at $4.5 billion (₹37,500 Cr) and growing at 12% annually. Every country that manufactures medicines has the same core problems: document management, batch records, equipment calibration, supplier quality. Cybrbrain's ALCOA+ foundation maps directly to FDA (USA), MHRA (UK), WHO PQ (Africa), TGA (Australia), and GCC drug regulations. Phase 3 expands to these markets.</Para>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
          {[["🇺🇸", "USA", "FDA 21 CFR Part 11"], ["🇬🇧", "UK", "MHRA GMP"], ["🇿🇦", "Africa", "WHO PQ"], ["🇦🇪", "GCC", "GCC-DR"], ["🇦🇺", "Australia", "TGA"], ["🇸🇬", "Singapore", "HSA"]].map(([f, c, r], i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: 22 }}>{f}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>{c}</div>
              <div style={{ color: "#64748b", fontSize: 10 }}>{r}</div>
            </div>
          ))}
        </div>
      </NavyBox>
    </div>
  );
}

function CompetitorsPage() {
  const comps = [
    { name: "SAP Business One", type: "ERP", price: "₹8-25L/year", setup: "12-18 months", india: "Strong", pharma: "Generic, needs add-ons", whatsapp: "❌", alcoa: "❌ native", who: "200+ employee companies", weakness: "Too expensive, too slow, not India-pharma specific", market: "~5% of Indian pharma use any ERP at all" },
    { name: "Oracle NetSuite", type: "ERP", price: "₹12-30L/year", setup: "12-24 months", india: "Moderate", pharma: "Generic", whatsapp: "❌", alcoa: "❌ native", who: "Large corporates", weakness: "Even more expensive, US-centric", market: "Negligible in pharma MSME" },
    { name: "Tally ERP 9 / Prime", type: "Accounting", price: "₹18,000/year", setup: "1 week", india: "Very strong", pharma: "Zero compliance", whatsapp: "❌", alcoa: "❌", who: "Almost every Indian SME", weakness: "Accounting only, no compliance, no pharma knowledge", market: "Dominant in accounting, zero in compliance" },
    { name: "Busy Accounting", type: "Accounting", price: "₹9,000-18,000/year", setup: "Few days", india: "Strong", pharma: "Zero compliance", whatsapp: "❌", alcoa: "❌", who: "Small businesses", weakness: "Same as Tally — accounting only", market: "~15% of pharma SME for accounting" },
    { name: "MasterControl", type: "QMS", price: "₹5-15L/year", setup: "6-12 months", india: "Weak", pharma: "Quality focused", whatsapp: "❌", alcoa: "✓ (expensive)", who: "Export-oriented, large pharma", weakness: "US-designed, no Indian context, no WhatsApp, no payments", market: "<1% of Indian pharma" },
    { name: "Veeva Vault", type: "QMS/Docs", price: "₹20L+/year", setup: "12+ months", india: "Weak", pharma: "Very strong (but enterprise)", whatsapp: "❌", alcoa: "✓", who: "MNC pharma companies", weakness: "Built for Pfizer-scale companies, not MSMEs", market: "<0.1% of Indian pharma" },
    { name: "TrackWise", type: "QMS", price: "₹8-20L/year", setup: "9-18 months", india: "Weak", pharma: "Quality focused", whatsapp: "❌", alcoa: "✓ (partial)", who: "Large pharma", weakness: "Same as above — enterprise only", market: "<0.5% of Indian pharma" },
    { name: "Cybrbrain ✓", type: "Full OS", price: "₹25K-1.5L/year", setup: "10 minutes", india: "Native", pharma: "Purpose-built", whatsapp: "✓ Native", alcoa: "✓ Built-in", who: "20-500 employee pharma factories", weakness: "Early stage, building trust", market: "0% today → 10% target 2030" },
  ];

  return (
    <div>
      <H1>Competitive Landscape</H1>
      <Para>The Indian pharma MSME software market has a classic gap: software is either too expensive and complex (SAP, Oracle, Veeva) or too simple and compliance-free (Tally, Busy). Nobody has built in the middle for this specific segment with these specific needs. That is the Cybrbrain opportunity.</Para>

      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ background: "#0f1c3f" }}>
              {["Company", "Type", "Price/Year", "Setup Time", "WhatsApp", "ALCOA+", "Target Segment"].map(h => (
                <th key={h} style={{ padding: "10px 12px", color: "#fff", textAlign: "left", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comps.map((c, i) => (
              <tr key={i} style={{ background: c.name.includes("Cybrbrain") ? "#eff6ff" : i % 2 === 0 ? "#f8fafc" : "#fff", borderBottom: "1px solid #f1f5f9" }}>
                <td style={{ padding: "10px 12px", fontWeight: c.name.includes("Cybrbrain") ? 800 : 600, color: c.name.includes("Cybrbrain") ? "#1a56db" : "#0f172a" }}>{c.name}</td>
                <td style={{ padding: "10px 12px", color: "#64748b" }}>{c.type}</td>
                <td style={{ padding: "10px 12px", fontWeight: 700, color: c.name.includes("Cybrbrain") ? "#16a34a" : "#374151" }}>{c.price}</td>
                <td style={{ padding: "10px 12px", color: c.name.includes("Cybrbrain") ? "#16a34a" : "#dc2626", fontWeight: 700 }}>{c.setup}</td>
                <td style={{ padding: "10px 12px", textAlign: "center" }}>{c.whatsapp}</td>
                <td style={{ padding: "10px 12px", textAlign: "center" }}>{c.alcoa}</td>
                <td style={{ padding: "10px 12px", color: "#374151", fontSize: 11 }}>{c.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        <Card>
          <H3>Why incumbents cannot respond quickly</H3>
          <Arrow><strong>SAP/Oracle:</strong> Their go-to-market is enterprise sales — 6-month sales cycles, expensive implementation partners. They cannot sell ₹25,000/year products. Unit economics don't work.</Arrow>
          <Arrow><strong>Tally/Busy:</strong> Accounting software companies have no pharma domain expertise, no WhatsApp integration capability, no regulatory knowledge. Would take 3-4 years to build what Cybrbrain has.</Arrow>
          <Arrow><strong>MasterControl/Veeva:</strong> US-designed, US-priced, US sales model. They don't serve this market segment and won't pivot to it — too small for their business model.</Arrow>
          <Arrow><strong>New entrants:</strong> Need 2-3 years of pharma regulatory knowledge, WhatsApp Business API setup, CA network relationships, and trust from a risk-averse sector. Cybrbrain has a 2-year head start.</Arrow>
        </Card>
        <Card>
          <H3>Market share currently held</H3>
          <div style={{ marginBottom: 16 }}>
            {[
              { name: "No software (paper records)", pct: 65, color: "#dc2626" },
              { name: "Tally/Busy (accounting only)", pct: 20, color: "#d97706" },
              { name: "SAP/Oracle (large companies)", pct: 5, color: "#7c3aed" },
              { name: "Other (custom/legacy software)", pct: 8, color: "#475569" },
              { name: "Cybrbrain (target)", pct: 2, color: "#1a56db" },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 12 }}>
                  <span style={{ color: "#374151" }}>{s.name}</span>
                  <span style={{ fontWeight: 700, color: s.color }}>{s.pct}%</span>
                </div>
                <div style={{ height: 8, background: "#f1f5f9", borderRadius: 4 }}>
                  <div style={{ height: 8, background: s.color, borderRadius: 4, width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, background: "#f0fdf4", borderRadius: 8, padding: "10px 12px" }}>
            💡 65% of pharma factories use zero compliance software. This is not a competitive displacement story — it is a greenfield market creation story.
          </div>
        </Card>
      </div>
    </div>
  );
}

function FinancialsPage() {
  const projections = [
    { year: "2026", customers: 50, arpu: 25000, arr: "₹12.5L", costs: "₹40L", net: "-₹27.5L", milestone: "Product-market fit, first revenueGujarat pilot" },
    { year: "2027", customers: 500, arpu: 40000, arr: "₹2 Cr", costs: "₹1.2 Cr", net: "₹80L", milestone: "Phase 2A live, Seed round, Gujarat expansion" },
    { year: "2028", customers: 2000, arpu: 60000, arr: "₹12 Cr", costs: "₹6 Cr", net: "₹6 Cr", milestone: "Phase 2C live, Pan-India, Series A" },
    { year: "2029", customers: 6000, arpu: 80000, arr: "₹48 Cr", costs: "₹20 Cr", net: "₹28 Cr", milestone: "International (UK/Africa), Series B" },
    { year: "2030", customers: 15000, arpu: 1000000, arr: "₹150 Cr", costs: "₹60 Cr", net: "₹90 Cr", milestone: "Global pharma compliance leader" },
    { year: "2032", customers: 50000, arpu: 400000, arr: "₹2,000 Cr", costs: "₹600 Cr", net: "₹1,400 Cr", milestone: "IPO ready" },
  ];

  return (
    <div>
      <H1>Financial Projections & Unit Economics</H1>

      <Card style={{ marginBottom: 20 }}>
        <H3>Unit economics — why the business model is exceptional</H3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          <StatCard value="₹25K" label="Current ARPU" sub="Annual Revenue Per User" color="#1a56db" />
          <StatCard value="~1 month" label="Payback period" sub="1 recovered payment > annual fee" color="#16a34a" />
          <StatCard value="<5%" label="Expected annual churn" sub="Audit trail creates lock-in" color="#7c3aed" />
          <StatCard value="~80%" label="Gross margins" sub="SaaS at scale" color="#d97706" />
          <StatCard value="₹2L-5L" label="LTV per customer" sub="5-10 year customer lifetime" color="#dc2626" />
          <StatCard value="<₹10K" label="CAC target" sub="Customer Acquisition Cost via CA channel" color="#475569" />
        </div>
      </Card>

      <H3>Why churn will be below 5%</H3>
      <Card style={{ marginBottom: 24 }}>
        <Para>A pharma factory that has been using Cybrbrain for 1 year has uploaded 500+ documents, created 50+ batch records, closed 20+ CAPAs, and has a complete audit trail of everything that happened in their factory. This data is their legal defense in any CDSCO inspection or court proceeding. They cannot afford to lose it by switching software. The audit trail is the product — and it creates permanent lock-in.</Para>
      </Card>

      <H3>Revenue projections</H3>
      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#0f1c3f" }}>
              {["Year", "Customers", "ARPU", "ARR", "Costs", "Net", "Key Milestone"].map(h => (
                <th key={h} style={{ padding: "10px 12px", color: "#fff", textAlign: "left", fontWeight: 600, fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projections.map((p, i) => (
              <tr key={i} style={{ background: i === projections.length - 1 ? "#0f1c3f" : i % 2 === 0 ? "#f8fafc" : "#fff", borderBottom: "1px solid #f1f5f9" }}>
                <td style={{ padding: "10px 12px", fontWeight: 800, color: i === projections.length - 1 ? "#f59e0b" : "#0f172a" }}>{p.year}</td>
                <td style={{ padding: "10px 12px", color: i === projections.length - 1 ? "#e2e8f0" : "#374151" }}>{p.customers.toLocaleString('en-IN')}</td>
                <td style={{ padding: "10px 12px", color: i === projections.length - 1 ? "#e2e8f0" : "#374151" }}>₹{(p.arpu / 1000).toFixed(0)}K</td>
                <td style={{ padding: "10px 12px", fontWeight: 700, color: i === projections.length - 1 ? "#f59e0b" : "#1a56db" }}>{p.arr}</td>
                <td style={{ padding: "10px 12px", color: i === projections.length - 1 ? "#94a3b8" : "#64748b" }}>{p.costs}</td>
                <td style={{ padding: "10px 12px", fontWeight: 700, color: i === projections.length - 1 ? "#86efac" : p.net.includes("-") ? "#dc2626" : "#16a34a" }}>{p.net}</td>
                <td style={{ padding: "10px 12px", fontSize: 11, color: i === projections.length - 1 ? "#94a3b8" : "#64748b" }}>{p.milestone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <H3>Cost structure at scale</H3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { item: "Engineering (team of 8-12)", pct: "30%", note: "Core product development, Phase 2-3 build" },
            { item: "Sales & Marketing", pct: "25%", note: "CA partner program, field sales Gujarat/Maha" },
            { item: "Customer Success", pct: "15%", note: "WhatsApp support, onboarding, retention" },
            { item: "Infrastructure (Supabase, Vercel, APIs)", pct: "10%", note: "Scales predictably with customer count" },
            { item: "G&A (legal, finance, admin)", pct: "10%", note: "CA, company secretary, office" },
            { item: "R&D (AI, Phase 3 features)", pct: "10%", note: "Groq, AI model training, CA automation" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "#f8fafc", borderRadius: 8 }}>
              <div style={{ fontSize: 13, color: "#374151" }}>{c.item}</div>
              <div>
                <span style={{ fontWeight: 700, color: "#1a56db", fontSize: 14 }}>{c.pct}</span>
                <div style={{ fontSize: 10, color: "#94a3b8", textAlign: "right" }}>{c.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function InvestmentPage() {
  return (
    <div>
      <H1>Investment Structure & Use of Funds</H1>
      <Para>Cybrbrain is looking for investors who understand B2B SaaS, Indian pharma, or MSME digitization — and who are excited about building a category-defining company in a market that nobody has cracked yet.</Para>

      <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
        {[
          {
            round: "Pre-Seed Round — NOW",
            amount: "₹50 Lakhs — ₹1 Crore",
            valuation: "₹4 — 8 Crore (pre-money)",
            dilution: "12-15%",
            color: "#1a56db",
            from: "Angel investors: pharma industry veterans, CA networks, Gujarat entrepreneur community, family offices",
            timeline: "Target close: August 2026",
            use: [
              "1 full-stack developer co-founder (30-40% equity or ₹12-15L/year)",
              "1 sales person for Gujarat/Maharashtra field sales (₹5-6L + commission)",
              "Marketing budget: WhatsApp groups, LinkedIn, pharma association events (₹5L)",
              "Server, API, and operational costs for 12 months (₹8L)",
              "Legal setup: company registration, trademark, IP filing (₹3L)",
              "Buffer for first year losses while reaching ₹25L ARR",
            ],
            milestone: "Reach ₹25L ARR (50 paying customers). Prove unit economics. Prepare for Seed.",
          },
          {
            round: "Seed Round — 2027",
            amount: "₹5 — 10 Crore",
            valuation: "₹30 — 60 Crore (pre-money)",
            dilution: "15-20%",
            color: "#7c3aed",
            from: "Artha Venture Fund, Blume Ventures, Stellaris Venture Partners, Matrix Partners India, Entrepreneur First",
            timeline: "Target: Q2 2027 (when at ₹2 Cr ARR)",
            use: [
              "Phase 2A build: CRM, Sales Orders, Procurement (6 evening sprints)",
              "Team: 2 more engineers, 1 PM, 1 customer success lead (total team: 6 people)",
              "Expand to Maharashtra + Himachal Pradesh (2,000 more target customers)",
              "CA partner program: 50 CAs onboarded with Professional accounts",
              "Marketing: pharma association memberships, events, webinar series",
              "Infrastructure for 500+ customers",
            ],
            milestone: "Reach ₹5 Cr ARR (500 customers). Phase 2A live. Prove CA distribution model.",
          },
          {
            round: "Series A — 2028",
            amount: "₹40 — 75 Crore",
            valuation: "₹200 — 400 Crore",
            dilution: "20-25%",
            color: "#dc2626",
            from: "Sequoia Capital India Surge, Accel India, Tiger Global, Lightspeed India",
            timeline: "Target: Q3 2028 (when at ₹10-15 Cr ARR)",
            use: [
              "Phase 2B+2C: Full production, inventory, finance, AI analytics",
              "International: UK (MHRA), Africa (WHO PQ) market entry",
              "Team scale: 30-40 people (engineering, sales, CS, regulatory experts)",
              "Phase 3 CA automation platform development",
              "Potential M&A of smaller compliance tools in adjacent markets",
            ],
            milestone: "₹50 Cr ARR. Pan-India. Two international markets live.",
          },
        ].map((r, i) => (
          <div key={i} style={{ background: "#fff", border: `2px solid ${r.color}30`, borderRadius: 16, overflow: "hidden" }}>
            <div style={{ background: r.color, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{r.round}</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#fff", fontSize: 22, fontWeight: 900 }}>{r.amount}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Valuation: {r.valuation} · Dilution: {r.dilution}</div>
              </div>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>From</div>
                  <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, marginBottom: 12 }}>{r.from}</div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Timeline</div>
                  <div style={{ fontSize: 13, color: "#374151" }}>{r.timeline}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Use of funds</div>
                  {r.use.map((u, j) => <Arrow key={j}>{u}</Arrow>)}
                </div>
              </div>
              <div style={{ background: r.color + "10", borderRadius: 10, padding: "12px 16px", marginTop: 14, fontSize: 13, fontWeight: 600, color: r.color }}>
                🎯 Success milestone: {r.milestone}
              </div>
            </div>
          </div>
        ))}
      </div>

      <NavyBox title="For angel investors — why invest now">
        {[
          "Product is LIVE. This is not a deck or an idea — cybrbrain.vercel.app is a working product you can sign up for today. Investment risk is much lower than pre-product stage.",
          "The regulatory tailwind is permanent. Schedule M compliance is mandatory by law. Every factory that gets inspected will eventually need this software. It's not a trend — it's a mandate.",
          "The CA channel is a distribution machine. One CA = 15 factories. Getting 20 CAs = 300 warm leads. This is not a cold-call sales business.",
          "Founder is full-stack technical. The entire Phase 1 product was built by Dhruv Shah alone in 28 hours. Low burn rate, high velocity — rare combination.",
          "₹25,000/year for a factory is not an expense — it's insurance. One inspection that goes well because of Cybrbrain = ₹50L-5Cr in avoided losses. The ROI is obvious.",
        ].map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
            <div style={{ width: 24, height: 24, minWidth: 24, background: "#f59e0b", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#0f1c3f" }}>{i + 1}</div>
            <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.7, paddingTop: 3 }}>{p}</div>
          </div>
        ))}
      </NavyBox>
    </div>
  );
}

function PipelinePage() {
  return (
    <div>
      <H1>Complete End-to-End Pipeline</H1>
      <Para>This is the full picture — from a factory owner's first WhatsApp message to the factory being completely managed by Cybrbrain across compliance, production, finance, and CA services.</Para>

      <div style={{ position: "relative", marginBottom: 28 }}>
        {[
          {
            phase: "NOW — Phase 1",
            color: "#16a34a",
            status: "LIVE",
            title: "Compliance OS + Payment Defense",
            items: ["Staff sends document photo to WhatsApp number", "AI reads: BMR, SOP, COA, deviation report, license", "QA Head confirms in tagging queue", "Readiness score 0-100 updates automatically", "Critical deviation → instant WhatsApp to owner", "Inspection Mode: 15-second ZIP pack generator", "43B(h) tracker: Day 30/40/44/45 auto-reminders", "Buyer delay → one-click Samadhaan proof pack", "CA sees all client exceptions in one panel", "AI drafts legal letters, CA approves", "₹25,000/year via Razorpay — auto-provisioned", "7 AM WhatsApp digest to owner every morning"],
          },
          {
            phase: "2026-27 — Phase 2A",
            color: "#1a56db",
            status: "BUILDING",
            title: "Front Office: CRM + Sales + Procurement",
            items: ["Buyer master with GSTIN, drug license, credit limit", "Buyer risk score from payment history", "Quotation → Sales Order → Delivery Note → AR Invoice", "Full batch traceability from sales to delivery", "Supplier master with COA compliance rate", "Auto-PR when stock below reorder level", "PO sent to supplier via WhatsApp", "3-way match: PO = GRN = AP Invoice before payment", "Supplier COA auto-verified against specs", "Complete sales and procurement pipeline"],
          },
          {
            phase: "2027 — Phase 2B",
            color: "#7c3aed",
            status: "ROADMAP",
            title: "Factory Floor: Production + Inventory + Equipment",
            items: ["Bill of Materials with version control", "Digital BMR auto-generated from formula", "Step-by-step production with electronic sign-off", "OOS auto-raises deviation with batch reference", "FEFO inventory management across warehouse", "Batch recall: trace forward and backward instantly", "Equipment master with calibration tracking", "Expired calibration → auto-blocks production use", "IQ/OQ/PQ documents stored and tracked", "Full manufacturing ERP replacing paper completely"],
          },
          {
            phase: "2028 — Phase 2C",
            color: "#dc2626",
            status: "ROADMAP",
            title: "Finance: Full Accounting + GST + AI Analytics",
            items: ["Auto-posting to GL from every transaction", "GST auto-calculated with CGST/SGST/IGST split", "GSTR-1, GSTR-3B, GSTR-2A reconciliation", "Bank statement import + auto-reconciliation", "P&L, Balance Sheet, Cash Flow in one click", "Natural language analytics: type a question, get a chart", "AI demand forecasting from 24-month history", "Annual Product Review auto-generated for CDSCO", "AI insight cards on dashboard with actionable advice", "Product-wise and plant-wise profitability"],
          },
          {
            phase: "2028+ — Phase 3",
            color: "#d97706",
            status: "VISION",
            title: "CA Revolution: Automate 70% of CA Routine Work",
            items: ["Monthly closing: AI does it, CA reviews exceptions only", "GSTR filing: auto-compiled, CA reviews, one-click submit", "Audit preparation: all documents auto-organized", "Payment dispute: legal notice to court filing — automated", "Tax planning: AI flags every MSME-specific saving opportunity", "Multi-factory dashboard for CA managing 10-20 clients", "Benchmarking: factory vs industry median from Cybrbrain network", "CA subscription: ₹60K-1.8L/year (new revenue stream)", "International compliance: FDA, MHRA, WHO PQ report generation", "50,000 factories on platform → India's pharma intelligence network"],
          },
        ].map((phase, i) => (
          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: "50%", background: phase.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800 }}>{i + 1}</div>
              {i < 4 && <div style={{ width: 2, flex: 1, background: "#e2e8f0", minHeight: 20, marginTop: 4 }} />}
            </div>
            <div style={{ flex: 1, paddingBottom: 20 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>{phase.phase}</div>
                <span style={{ background: phase.color + "20", color: phase.color, borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 800 }}>{phase.status}</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#0f172a", marginBottom: 12 }}>{phase.title}</div>
              <div style={{ background: "#fff", border: `1.5px solid ${phase.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  {phase.items.map((item, j) => <Check key={j}>{item}</Check>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NavyBox title="The 2032 vision — what does ₹2,000 Cr ARR look like?">
        <Para style={{ color: "#cbd5e1" }}>50,000 pharma factories across India and 6 international markets are running on Cybrbrain. Their entire operation — from raw material procurement to finished goods dispatch, from compliance documentation to CA filing — flows through one system. The audit trail of every batch of medicine made in India is in Cybrbrain's database. This is the most comprehensive pharma manufacturing intelligence dataset in Asia.</Para>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 16 }}>
          {[
            { label: "Factory customers (India)", value: "40,000" },
            { label: "Factory customers (International)", value: "10,000" },
            { label: "CA Professional subscribers", value: "5,000" },
            { label: "Average ARPU", value: "₹4L/year" },
            { label: "Gross margin at scale", value: "82%" },
            { label: "Implied valuation (10x ARR)", value: "₹20,000 Cr" },
          ].map((s, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "14px", textAlign: "center" }}>
              <div style={{ color: "#f59e0b", fontSize: 18, fontWeight: 900, marginBottom: 4 }}>{s.value}</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </NavyBox>

      <Card style={{ marginTop: 20, background: "#f0fdf4", border: "2px solid #86efac" }}>
        <H3 style={{ color: "#15803d" }}>To summarize — what makes this a great startup</H3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Large market: 8,500 factories, zero good software today",
            "Regulatory tailwind: Schedule M mandatory since Dec 2025",
            "WhatsApp distribution: staff already knows how to use it",
            "CA channel: 1 CA = 15 factory referrals, multiplier effect",
            "Stickiness: audit trail creates permanent, irreversible lock-in",
            "10x cheaper than SAP: accessible to every MSME, not just large companies",
            "Founder-built: Phase 1 complete in 28 hours — rare technical speed",
            "3-sided network: factories + CAs + government data = platform moat",
            "Expansion path: Phase 2 → 3 → International = 50x revenue potential",
            "Defensible IP: ALCOA+ system, WhatsApp-to-compliance workflow (patent filed)",
          ].map((p, i) => <Check key={i}>{p}</Check>)}
        </div>
      </Card>
    </div>
  );
}
