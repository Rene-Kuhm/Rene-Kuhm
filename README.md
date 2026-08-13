<img src="assets/hero.svg" alt="René Kuhm — Software Engineering" width="100%" />

# René Kuhm

**I reverse-engineer hardware protocols, build tooling for AI coding agents, and run ISP infrastructure.**

Based in Argentina (Córdoba / Eduardo Castex, La Pampa) · Open to remote work

[![Website](https://img.shields.io/badge/TecnoDespegue-tecnodespegue.com-0A66C2)](https://tecnodespegue.com)
[![YouTube](https://img.shields.io/badge/YouTube-@tecnodespegue-FF0000?logo=youtube&logoColor=white)](https://youtube.com/@tecnodespegue)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rene--kuhm-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rene-kuhm-fullstack/)

---

## What I actually do

Most of my work sits in three places that rarely overlap in one person:

**Hardware nobody else supports.** I capture the USB/HID traffic of proprietary Windows drivers, decode the protocol, and reimplement it in userspace for Linux and macOS. That means reading raw byte offsets until a display lights up — figuring out that `buf[9]` carries CPU temperature rather than the per-thread maximum, or that you must select an HID interface by `usage_page` or every write returns `EPIPE`.

**Tooling for AI coding agents.** Not prompt tinkering: spec-driven orchestration, persistent memory, verification workflows, MCP servers, and configuration harnesses that survive real projects.

**Networks that have to stay up.** I have worked with FTTH and ISP infrastructure since 2017 — fibre, servers, and the operational side where downtime is measured in angry phone calls, not error budgets.

The web and mobile work sits on top of that foundation, not instead of it.

---

## Selected work

### [hardware-reversing](https://github.com/Rene-Kuhm/hardware-reversing)
`Python` · `USB HID` · `Linux / macOS / NixOS`

Userspace drivers for PC hardware with no official support: AIO cooler displays, Gigabyte RGB Fusion (ITE8297), USB lighting controllers. Includes the complete protocol analysis, so the findings are useful even without the code. Ships systemd units, a macOS LaunchAgent, PKG/DMG installers and Nix flakes.

### [redragon-streamdeck-linux](https://github.com/Rene-Kuhm/redragon-streamdeck-linux)
`Rust` · `Tauri` · `systemd`

Open-source driver and web panel for the Redragon SS-550 Stream Deck on Linux. Multi-page layouts, custom icons, autostart, and installers for Arch, Ubuntu and Fedora — for a device the vendor never supported outside Windows.

### [flow-engineering](https://github.com/Rene-Kuhm/flow-engineering)
`Python` · `MCP` · `CLI`

Spec-driven orchestration for AI-assisted delivery: persistent context, verification workflows, CLI tooling and an optional read-only MCP server. Built to stop agents from drifting halfway through a feature.

### [opencode-productivity-suite](https://github.com/Rene-Kuhm/opencode-productivity-suite)
`PowerShell` · `Agent configuration`

Configuration harness for OpenCode and OhMyOpenCode — agents, hooks, skills and templates. My most-starred project, and the one people found on their own.

### [KineIA](https://github.com/Rene-Kuhm/KineIA)
`Python` · `RAG` · `Qdrant` · `Next.js`

Domain-expert AI agent for Argentine kinesiology: RAG over a curated knowledge base, DeepSeek as the LLM, Qdrant as the vector store, deployed with Docker Compose behind Nginx.

### [vaulta](https://github.com/Rene-Kuhm/vaulta)
`Dart` · `Flutter` · `Android / Windows`

Encrypted, offline-first password manager with biometric unlock, autofill and signed updates.

### [claude-code-enterprise-config](https://github.com/Rene-Kuhm/claude-code-enterprise-config)
`Shell` · `Agent configuration`

Enterprise Claude Code setup: 8 specialised agents, 20 invocable skills, 7 context rules, 8 automated hooks and 19 MCP server integrations, with an installer.

---

## Stack

| Area | Tools |
|---|---|
| **Systems & hardware** | Linux (Arch, CachyOS, NixOS, Fedora), Rust, Python, USB/HID, systemd, reverse engineering |
| **Backend** | Python (FastAPI), Node.js, NestJS, PostgreSQL, Docker |
| **Frontend & mobile** | TypeScript, React, Next.js, Astro, Tailwind, Flutter |
| **AI engineering** | MCP servers, agent orchestration, RAG, vector stores, spec-driven development |
| **Infrastructure** | NixOS, GitHub Actions, Nginx, FTTH / ISP operations |

---

## Beyond the code

- **[TecnoDespegue](https://tecnodespegue.com)** — my agency: internal software and process automation for LATAM clients
- **[YouTube · @tecnodespegue](https://youtube.com/@tecnodespegue)** — project walkthroughs and tooling deep-dives, in Spanish

---

## Contact

Open to remote roles and contract work — full-stack development, developer tooling, Linux/DevOps, or hybrid engineering and infrastructure positions. Also available on-site in Córdoba and La Pampa.

[LinkedIn](https://www.linkedin.com/in/rene-kuhm-fullstack/) · [tecnodespegue.com](https://tecnodespegue.com)

<sub>Interested in how I work? See <a href="COLLABORATION.md">COLLABORATION.md</a>.</sub>
