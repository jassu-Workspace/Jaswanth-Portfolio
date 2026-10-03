"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Satellite,
  ShieldCheck,
  Cpu,
  Server,
  Zap,
  Binary,
  Activity,
  Eye,
  Lock,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Layers,
  FileCheck,
  AlertTriangle,
  Flame,
  ArrowRight,
  Terminal,
  Compass,
} from "lucide-react";

export default function ZeroTrustShowcase() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "pillars" | "benchmarks" | "isro">("overview");
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  const benchmarkStats = [
    { label: "Unified Test Suite", val: "515 / 515", sub: "100% Precision across all suites", icon: CheckCircle2, color: "text-[#2d5e83]" },
    { label: "PII Firewall Speed", val: "0.16 µs", sub: "6,087,613 scans / second", icon: Zap, color: "text-[#d06752]" },
    { label: "DOM Perception", val: "1.79 ms", sub: "20 web archetypes benchmarked", icon: Cpu, color: "text-[#ac7b2f]" },
    { label: "Zero-Egress Invariant", val: "0 Leaks", sub: "1,200 forensic entity sweeps", icon: ShieldCheck, color: "text-[#2d5e83]" },
    { label: "Tactical DOM Pilot", val: "577–667 ms", sub: "10x faster than cloud VLMs", icon: Flame, color: "text-[#d06752]" },
    { label: "Edge Face Redaction", val: "36.8 ms", sub: "MediaPipe landmark blurring", icon: Eye, color: "text-[#ac7b2f]" },
  ];

  const technicalPillars = [
    {
      num: "01",
      title: "On-Device Edge Enclave (MV3 Extension)",
      lead: "25-Class PII Sanitizer & Sovereign WebGPU/WASM Vision",
      bullets: [
        "25-Class PII & Credential Sanitizer: Deterministic regexes & algorithmic validators (Luhn check, Verhoeff checksums for Aadhaar, PAN, IFSC/SWIFT, crypto wallets, JWTs, private keys) replacing sensitive tokens with [MASKED_AADHAAR_R1] before DOM egress.",
        "MediaPipe Facial Landmark Redaction: Auto-locates faces in the browser viewport and burns semantic [REDACTED: FACE] privacy badges on canvas frames in 36.8 ms.",
        "Sovereign ONNX OCR (PP-OCRv4 + DBNet): INT8 quantized OCR model running in-browser via ONNX Runtime WebAssembly/WebGPU, parsing classified stamps and coordinates without transmitting raw pixels.",
        "Local UI Vision (Custom YOLOv8n): 8-class target detector (buttons, inputs, links, dropdowns, radios, tabs) running locally for coordinate-grounded execution.",
        "Fail-Closed Leak Verifier: Geometric enclosure proofs and plaintext sweeps ensure zero unredacted artifacts ever escape the sandbox.",
      ],
    },
    {
      num: "02",
      title: "20 Universal Web Archetype DOM Engines",
      lead: "Benchmarked across 102 scenarios with 1.79ms average latency",
      bullets: [
        "Core Archetypes (1–8): Dynamic Form Controls, Embedded Canvas/Docs, Spatial Deduplication, Sovereign GIS Map Overlays (ISRO Bhuvan), Enterprise ERPs (SAP/Oracle), Hydrated SPAs (React/Vue/Angular), Shadow DOM & Web Components, Security Boundaries.",
        "Advanced Archetypes (9–20): Infinite Feeds & Virtual Lists, Stepper Wizards, Virtualized Data Tables, Media Players, Auth0/Okta MFA Portals, Collaborative Canvas (Figma/Miro), Cloud DevOps Consoles (AWS/GCP), E-Commerce Configurators, Nested Framesets, Dynamic Toast Dialogs, WebRTC Calling, Semantic Trees.",
        "Precision Baseline: 100% precision in element detection and state resolution across diverse enterprise interfaces.",
      ],
    },
    {
      num: "03",
      title: "Multi-Tier Intelligent Orchestration Gateway",
      lead: "Sub-microsecond security firewall + 6-gate decision cascade",
      bullets: [
        "Sub-Microsecond Firewall: Evaluates payloads at 6,087,613 scans/sec (0.16 µs latency), instantaneously quarantining unredacted payloads before LLM transmission.",
        "6-Gate Decision Cascade (2 µs): Routes tasks deterministically without wasting expensive LLM calls.",
        "Tier 2: Jev System One Tactical Pilot: Fast DOM model executing clicks, simple inputs, and navigation in 577 ms – 667 ms (10x faster than full vision models).",
        "Tier 3: Google Gemini 3.8 Flash Vision Engine: Zero-thinking configuration with automatic fallback (ag/gemini-3.8-flash(minimal) → ag/gemini-3.8-flash-low) reducing latency by 49%.",
        "Tier 4: Dynamic Completion Verification Gate: Multimodal visual/textual proof of completion granting dynamic +15 step extensions (up to 75 steps).",
      ],
    },
    {
      num: "04",
      title: "Real-World Sovereign Workflows (ISRO Pillars)",
      lead: "Mission-critical defense, telemetry, and aerospace automation",
      bullets: [
        "Mission Control & Telemetry (MOX): Interacting with launch vehicle stage pressures, cryo-stage status, and reaction wheels.",
        "Earth Observation & GIS (Bhuvan / Bhoonidhi): Navigating geospatial layers, drought/flood thematic maps, and coordinate bounding boxes.",
        "Ground Station Network (ISTRAC / DSN Byalalu): Scheduling antenna passes and tracking azimuth/elevation data.",
        "Space Situational Awareness (Project NETRA): Monitoring orbital debris conjunction risks and Collision Avoidance Maneuver (CAM) telemetry.",
        "Aerospace Supply Chain (GeM / e-Procure): Securely parsing defense raw material tenders (e.g., Inconel 718, Ti-6Al-4V) without credential leakage.",
      ],
    },
  ];

  return (
    <article className="project-card map-card map-card-hover relative overflow-hidden p-6 md:p-9 border-2 border-[#2d5e83]/30 shadow-xl bg-gradient-to-b from-white/90 via-[#f9f6ef]/80 to-[#ecdfc7]/50">
      {/* Decorative background watermark */}
      <div className="pointer-events-none absolute -right-12 -top-12 opacity-[0.04] text-[#12263a]">
        <Satellite className="h-96 w-96" />
      </div>

      {/* Header Badge & Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#21405b]/12 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip !border-[#2d5e83] !bg-[#2d5e83]/10 !text-[#2d5e83] font-bold">
            <Satellite className="h-3.5 w-3.5" aria-hidden="true" />
            ISRO SIH Problem Statement 26171 · Project &ldquo;171&rdquo;
          </span>
          <span className="chip !border-[#d0675233] !bg-[#d06752]/10 !text-[#d06752] font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Zero-Trust Sovereign AI
          </span>
          <span className="chip !border-[#ac7b2f33] !text-[#ac7b2f]">
            <Binary className="h-3.5 w-3.5" aria-hidden="true" />
            515 / 515 Tests Passing
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCaseStudyModal(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2d5e83]/30 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#2d5e83] shadow-sm transition-all hover:bg-[#2d5e83] hover:text-white"
          >
            <FileCheck className="h-3.5 w-3.5" />
            Full Technical Case Study
          </button>
        </div>
      </div>

      {/* Main Title & One-Liner */}
      <div className="mt-6">
        <div className="flex flex-col gap-2">
          <p className="section-kicker !text-[0.68rem] tracking-wider uppercase text-[#2d5e83]">
            Autonomous Web Perception &bull; Defense &amp; Aerospace Enclaves
          </p>
          <h3 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-tight text-[#0e1d2b]">
            Zero-Trust AI Web Agent
          </h3>
          <p className="text-base md:text-lg font-medium text-[#2d5e83]">
            Sovereign On-Device Privacy-Preserving Browser Automation Platform
          </p>
        </div>

        {/* The Split-Brain Quote */}
        <div className="mt-4 rounded-xl border-l-4 border-[#2d5e83] bg-[#2d5e83]/[0.06] p-4 text-sm md:text-base italic text-[#12263a]">
          &ldquo;The Cloud does the thinking; The Edge does the acting.&rdquo;
          <span className="block not-italic text-xs md:text-sm text-[#21405b]/75 mt-1">
            Autonomous web agent that perceives and manipulates complex sovereign portals while guaranteeing zero raw PII egress.
          </span>
        </div>
      </div>

      {/* Metric Quick-Glance Cards */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {benchmarkStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-between rounded-xl border border-[#21405b]/12 bg-white/70 p-3 shadow-xs transition hover:border-[#2d5e83]/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#21405b]/70">
                {stat.label}
              </span>
              <stat.icon className={`h-3.5 w-3.5 ${stat.color}`} />
            </div>
            <div className="mt-2">
              <span className="text-lg md:text-xl font-bold text-[#12263a]">{stat.val}</span>
              <p className="mt-0.5 text-[0.68rem] leading-tight text-[#21405b]/75">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Tabs */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-1.5 border-b border-[#21405b]/12 pb-3">
          {[
            { id: "overview", label: "Executive Overview", icon: Compass },
            { id: "architecture", label: "Split-Brain Architecture", icon: Cpu },
            { id: "pillars", label: "4 Technical Pillars", icon: Layers },
            { id: "isro", label: "ISRO Mission Workflows", icon: Satellite },
            { id: "benchmarks", label: "Empirical Benchmarks", icon: Activity },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs md:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#2d5e83] text-white shadow-sm"
                    : "bg-white/50 text-[#21405b] hover:bg-white/90"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="mt-5 min-h-[320px]">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-[#d06752]/20 bg-[#d06752]/[0.04] p-5">
                  <div className="flex items-center gap-2 text-[#d06752] font-semibold text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    The Core Paradox of Autonomous AI Agents
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#21405b]/85">
                    Modern browser agents (e.g. Anthropic Computer Use, OpenAI Operator) operate by capturing raw full-screen screenshots and entire DOM trees, uploading them to remote multimodal LLMs.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm text-[#21405b]/80 list-disc pl-5">
                    <li><strong>Critical PII &amp; Secret Leakage:</strong> Passwords, Aadhaar, PAN, session tokens, and cryptographic keys egress in plaintext.</li>
                    <li><strong>Classified Visual Exposure:</strong> Faces on badges, proprietary schematics, and classified orbital telemetry are sent to external vision models.</li>
                    <li><strong>Execution Brittleness:</strong> Screen-coordinate clicks break during viewport resize, SPA re-rendering, or Shadow DOM isolation.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#2d5e83]/20 bg-[#2d5e83]/[0.05] p-5">
                  <div className="flex items-center gap-2 text-[#2d5e83] font-semibold text-sm">
                    <ShieldCheck className="h-4 w-4" />
                    The Split-Brain Solution
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#21405b]/85">
                    Enforces a strict architectural isolation: all perception, computer vision, OCR, and redaction execute strictly <strong>on-device inside the browser tab enclave</strong>.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm text-[#21405b]/80 list-disc pl-5">
                    <li><strong>Cryptographic Legend System:</strong> Only anonymized, masked artifacts egress (<code className="rounded bg-black/5 px-1 py-0.5 text-xs text-[#2d5e83]">[MASKED_AADHAAR_R1]</code>).</li>
                    <li><strong>Fail-Closed Verifier:</strong> Mathematical enclosure proof guarantees no unmasked pixel or secret text leaves the device.</li>
                    <li><strong>Zero Thinking Overhead:</strong> Google Gemini 3.8 Flash configured for fast semantic cognition, with tactical pilot for fast discrete DOM actions.</li>
                  </ul>
                </div>
              </div>

              {/* Target Organizations */}
              <div className="rounded-2xl border border-[#21405b]/12 bg-white/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#21405b]/70">
                  Target Sovereign &amp; Enterprise Domains
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "ISRO Telemetry & Control (MOX)",
                    "Sovereign Geospatial (Bhuvan/Bhoonidhi)",
                    "Space Situational Awareness (Project NETRA)",
                    "Defense Supply Chains (GeM / e-Procure)",
                    "Enterprise ERPs (SAP / Oracle / Salesforce)",
                    "Sovereign Cloud Enclaves",
                  ].map((target) => (
                    <span key={target} className="chip !text-xs !bg-white">
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Architecture Blueprint Card */}
              <div className="rounded-2xl border border-[#21405b]/14 bg-[#0e1d2b] p-5 text-[#f6f2e7] font-mono text-xs overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/70">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-[#5f99bc]" />
                    <span>SYSTEM TOPOLOGY BLUEPRINT // EDGE-CLOUD HYBRID ENCLAVE</span>
                  </div>
                  <span className="text-[10px] text-[#ac7b2f]">STATUS: 100% INVARIANT VERIFIED</span>
                </div>

                <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Edge Enclave */}
                  <div className="rounded-xl border border-[#5f99bc]/30 bg-white/5 p-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-[#5f99bc] font-bold text-xs uppercase tracking-wide">
                      <Cpu className="h-3.5 w-3.5" />
                      1. Edge Client Enclave (Browser Sandbox)
                    </div>
                    <p className="text-[11px] text-white/75 font-sans leading-normal">
                      Runs fully client-side via WebGPU/WASM in MV3 browser tab:
                    </p>
                    <ul className="text-[10px] space-y-1 text-white/80 list-disc pl-4 font-mono">
                      <li>20-Archetype DOM Engine</li>
                      <li>MediaPipe Face Landmarker (36.8ms)</li>
                      <li>Sovereign ONNX PP-OCRv4 (WASM)</li>
                      <li>Local YOLOv8n INT8 UI Vision</li>
                      <li>Fail-Closed Enclosure Verifier</li>
                    </ul>
                    <div className="mt-2 rounded bg-black/40 p-2 text-[10px] text-[#c39a4a]">
                      &rarr; Egress: POST /api/step &#123; maskedDom, redactedImage, legend &#125;
                    </div>
                  </div>

                  {/* Orchestration Gateway */}
                  <div className="rounded-xl border border-[#d06752]/30 bg-white/5 p-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-[#d06752] font-bold text-xs uppercase tracking-wide">
                      <Server className="h-3.5 w-3.5" />
                      2. Orchestration Server (Hono / Node.js)
                    </div>
                    <p className="text-[11px] text-white/75 font-sans leading-normal">
                      Zero-Trust quarantined gateway with multi-tier routing:
                    </p>
                    <ul className="text-[10px] space-y-1 text-white/80 list-disc pl-4 font-mono">
                      <li>PII Quarantine Firewall (0.16µs / 6M/s)</li>
                      <li>6-Gate Heuristic Cascade (2µs)</li>
                      <li>Tier 2: Jev System One Pilot (~600ms)</li>
                      <li>Tier 3: Gemini 3.8 Flash (Zero-Thinking)</li>
                      <li>Tier 4: Dynamic Completion Gate (+15)</li>
                    </ul>
                    <div className="mt-2 rounded bg-black/40 p-2 text-[10px] text-[#5f99bc]">
                      &rarr; Egress: Structured Action JSON (Click, Type, Drag)
                    </div>
                  </div>

                  {/* Execution Enclave */}
                  <div className="rounded-xl border border-[#ac7b2f]/30 bg-white/5 p-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-[#ac7b2f] font-bold text-xs uppercase tracking-wide">
                      <Zap className="h-3.5 w-3.5" />
                      3. Execution Enclave (Browser Active Tab)
                    </div>
                    <p className="text-[11px] text-white/75 font-sans leading-normal">
                      Humanized browser actuation &amp; cryptographic audit trail:
                    </p>
                    <ul className="text-[10px] space-y-1 text-white/80 list-disc pl-4 font-mono">
                      <li>Synthetic Humanized Events (Click/Type)</li>
                      <li>MutationObserver Dynamic Settling (800ms)</li>
                      <li>Live Telemetry HUD Overlay</li>
                      <li>Downloadable Cryptographic Certificate</li>
                      <li>Zero raw PII ever logged or saved</li>
                    </ul>
                    <div className="mt-2 rounded bg-black/40 p-2 text-[10px] text-[#3f769d]">
                      &check; 100% Invariant: Zero Raw Leakage
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "pillars" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {technicalPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="rounded-2xl border border-[#21405b]/14 bg-white/60 p-5 transition hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2d5e83] text-xs font-bold text-white">
                      {pillar.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#12263a] leading-tight">{pillar.title}</h4>
                      <p className="text-[11px] text-[#2d5e83] font-medium">{pillar.lead}</p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#21405b]/82 list-disc pl-5">
                    {pillar.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "isro" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="rounded-xl bg-[#2d5e83]/10 border border-[#2d5e83]/20 p-4 text-xs md:text-sm text-[#12263a]">
                <strong>Problem Statement 26171 (ISRO):</strong> Autonomous, sovereign execution on critical space agency consoles without leaking sensitive orbital ephemerides, telemetry parameters, or personnel credentials.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    title: "1. Mission Control & Telemetry (MOX)",
                    desc: "Interacting with launch vehicle stage pressures, cryo-stage status, and reaction wheel telemetry without exposing real-time flight metrics.",
                    tag: "Launch Vehicles",
                  },
                  {
                    title: "2. Earth Observation & GIS (Bhuvan)",
                    desc: "Navigating geospatial layers, drought/flood thematic maps, and coordinate bounding boxes without leaking classified resolution layers.",
                    tag: "Geospatial GIS",
                  },
                  {
                    title: "3. Ground Station Network (ISTRAC)",
                    desc: "Scheduling antenna passes across DSN Byalalu, tracking azimuth/elevation data, and coordinating ground dish communication windows.",
                    tag: "Deep Space Network",
                  },
                  {
                    title: "4. Space Situational Awareness (NETRA)",
                    desc: "Monitoring orbital debris conjunction risks and Collision Avoidance Maneuver (CAM) telemetry data safely in air-gapped web consoles.",
                    tag: "Debris & Orbit",
                  },
                  {
                    title: "5. Aerospace Supply Chain (GeM)",
                    desc: "Securely parsing defense raw material tenders (e.g., Inconel 718, Ti-6Al-4V titanium alloys) without procurement or credential leakage.",
                    tag: "Strategic Supply",
                  },
                  {
                    title: "6. Sovereign Enclave ERPs",
                    desc: "SAP and Oracle sovereign deployments with automated form completion and zero risk of cross-session PII contamination.",
                    tag: "Zero-Trust ERP",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#21405b]/12 bg-white/60 p-4">
                    <span className="chip !text-[10px] !bg-[#2d5e83]/10 !text-[#2d5e83] mb-2 inline-block">
                      {item.tag}
                    </span>
                    <h5 className="font-bold text-sm text-[#12263a]">{item.title}</h5>
                    <p className="mt-2 text-xs leading-relaxed text-[#21405b]/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "benchmarks" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="overflow-x-auto rounded-xl border border-[#21405b]/14 bg-white/70">
                <table className="w-full min-w-[640px] text-left text-xs">
                  <thead className="border-b border-[#21405b]/10 bg-[#21405b]/5 text-[#21405b]/80 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="px-4 py-3">Metric</th>
                      <th className="px-4 py-3">Measured Value</th>
                      <th className="px-4 py-3">Engineering Significance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#21405b]/8 text-[#21405b]/85">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">Total Test Suite Health</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#2d5e83]">515 / 515 passing (100%)</td>
                      <td className="px-4 py-3">Zero regressions across client, server, DOM, and hybrid suites</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">Server PII Firewall Throughput</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#d06752]">6,087,613 scans/sec (0.16 µs)</td>
                      <td className="px-4 py-3">Non-blocking cryptographic gatekeeper rejecting leaks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">DOM Perception Latency</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#ac7b2f]">1.79 ms / archetype</td>
                      <td className="px-4 py-3">Instantaneous client-side extraction across 20 web archetypes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">Face Redaction Latency</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#2d5e83]">36.8 ms</td>
                      <td className="px-4 py-3">Real-time viewport blurring before screenshot serialization</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">On-Device OCR Latency</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#d06752]">78.6 ms</td>
                      <td className="px-4 py-3">On-device text detection via WebAssembly / WebGPU (PP-OCRv4)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">Tactical Pilot Response Time</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#ac7b2f]">577 ms – 667 ms</td>
                      <td className="px-4 py-3">5x–10x faster execution on deterministic DOM interactions</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">Gemini 3.8 Flash Latency</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#2d5e83]">3,261 ms (minimal fallback)</td>
                      <td className="px-4 py-3">49% turnaround latency reduction with zero thinking overhead</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#12263a]">Zero-Egress Security Invariant</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#3f769d]">0 leaks / 1,200 audits</td>
                      <td className="px-4 py-3">Verified over 150 scenarios &times; 8 sensitive entity permutations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Tech Stack Pills Footer */}
      <div className="mt-8 border-t border-[#21405b]/12 pt-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#21405b]/60 mb-2">
          Engineering Stack &bull; Dual-GPU Trained INT8 &bull; MV3 Enclave
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "React 18",
            "TypeScript",
            "WXT (Manifest V3)",
            "ONNX Runtime Web (WebGPU/WASM)",
            "YOLOv8n INT8",
            "PP-OCRv4 INT8",
            "MediaPipe Tasks Vision",
            "Hono (@hono/node-server)",
            "Google Gemini 3.8 Flash",
            "Jev System One Pilot",
            "Vitest (241 tests)",
            "Node Test Runner (70 tests)",
          ].map((item) => (
            <span key={item} className="chip !text-[11px] !py-1 !px-2.5">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Full Technical Case Study Modal */}
      <AnimatePresence>
        {showCaseStudyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setShowCaseStudyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#21405b]/20 bg-[#f9f6ef] p-6 md:p-10 shadow-2xl text-[#12263a]"
            >
              <div className="flex items-start justify-between border-b border-[#21405b]/12 pb-4">
                <div>
                  <span className="chip !border-[#2d5e83] !text-[#2d5e83] mb-2 inline-block">
                    SIH Problem Statement 26171 &bull; ISRO
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0e1d2b]">
                    Zero-Trust AI Web Agent: Architecture Deep Dive
                  </h2>
                  <p className="text-sm text-[#2d5e83] font-medium mt-1">
                    Sovereign Edge-Cloud Split-Brain Browser Automation
                  </p>
                </div>
                <button
                  onClick={() => setShowCaseStudyModal(false)}
                  className="rounded-full p-2 text-[#21405b]/60 hover:bg-[#21405b]/10 hover:text-[#12263a]"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#21405b]/85">
                <div>
                  <h4 className="font-bold text-[#12263a] text-base">1. The Hook: The Hidden Danger of Modern AI Agents</h4>
                  <p className="mt-1">
                    Autonomous web agents typically operate by capturing uncompressed screenshots and raw DOM strings, streaming them straight to commercial multimodal models. In defense (ISRO geospatial layers, launch vehicle telemetry) and sovereign enterprise portals (defense tenders, banking, ERPs), this is an existential vulnerability: credentials, encryption keys, and classified imagery are irreversibly leaked to external servers.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#12263a] text-base">2. The Architectural Insight: Split-Brain Design</h4>
                  <p className="mt-1">
                    We bifurcated the autonomous loop:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Edge Tab Sandbox (MV3):</strong> Senses and Acts. Runs local computer vision, face landmarker blurring, and INT8 OCR in browser WebGPU/WASM memory.</li>
                    <li><strong>Cryptographic Legend Gate:</strong> Deterministically scrubs 25 PII classes into synthetic tokens before transmission.</li>
                    <li><strong>Cloud Intelligence:</strong> Reasons in the abstract over scrubbed semantics without seeing raw classified pixels or tokens.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#12263a] text-base">3. Machine Learning Pipeline: From PyTorch to Browser WebGPU</h4>
                  <p className="mt-1">
                    Trained custom YOLOv8n (8-class UI element detector) and PP-OCRv4 / DBNet + SVTR-CRNN text recognition models with dual-GPU Distributed Data Parallel (DDP). Exported to INT8 ONNX and accelerated locally in-browser with WebAssembly SIMD and WebGPU execution providers.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#12263a] text-base">4. Quantitative Validation &amp; Verification</h4>
                  <p className="mt-1">
                    The platform achieved 100% precision across a 515-test unified suite spanning 102 DOM benchmark scenarios and 1,200 forensic entity leak checks, backed by a 0.16 µs server firewall processing over 6 million scans per second.
                  </p>
                </div>

                {/* STAR bullet points for recruiters */}
                <div className="rounded-2xl border border-[#2d5e83]/20 bg-white/70 p-5">
                  <h4 className="font-bold text-[#2d5e83] text-sm uppercase tracking-wide">
                    Resume / CV Experience Highlights (STAR Framework)
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm list-disc pl-5">
                    <li><strong>Engineered an edge-cloud split-brain autonomous web agent</strong> for ISRO sovereign and defense portals (SIH Problem Statement 26171), guaranteeing zero raw-PII cloud egress across 1,200 forensic security audits.</li>
                    <li><strong>Architected on-device perception pipelines</strong> using ONNX Runtime Web (WebGPU/WASM), integrating a dual-GPU trained INT8 YOLOv8n UI detector and MediaPipe facial landmarker with sub-40ms execution times.</li>
                    <li><strong>Built 20 deterministic DOM perception engines</strong> covering complex web archetypes (GIS map canvases, ERPs, Shadow DOM, virtual tables), achieving 100% precision and 1.79ms average latency across a 102-scenario test harness.</li>
                    <li><strong>Developed a high-throughput Hono orchestration gateway</strong> featuring a 0.16 µs (6.08M scans/sec) zero-trust PII firewall and a 6-gate decision cascade that routes discrete actions to a fast tactical pilot (667ms) and complex vision tasks to Gemini 3.8 Flash.</li>
                    <li><strong>Delivered 515/515 passing unified tests</strong> encompassing end-to-end client redaction, server wire contracts, and multimodal visual grounding benchmarks.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowCaseStudyModal(false)}
                  className="rounded-full bg-[#2d5e83] px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#21405b] transition"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
