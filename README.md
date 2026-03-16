<!-- Hero Header SVG personalizado -->
<div align="center">
<svg width="100%" viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>
    @keyframes rk-float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes rk-float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
    @keyframes rk-dash  { to { stroke-dashoffset: -60; } }
    @keyframes rk-fade  { 0%,100%{opacity:.18} 50%{opacity:.55} }
    @keyframes rk-glow  { 0%,100%{opacity:.08} 50%{opacity:.22} }
    @keyframes rk-pop   { 0%{opacity:0;transform:scale(.6)} 100%{opacity:1;transform:scale(1)} }
    @keyframes rk-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
    @keyframes rk-slide { from{transform:translateX(-40px);opacity:0} to{transform:translateX(0);opacity:1} }
    @keyframes rk-orbit { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    .rk-ow  { transform-origin: 340px 155px; animation: rk-orbit 28s linear infinite; }
    .rk-ow2 { transform-origin: 340px 155px; animation: rk-orbit 18s linear infinite reverse; }
    .rk-p1 { animation: rk-float1 4s ease-in-out infinite; }
    .rk-p2 { animation: rk-float2 5.2s ease-in-out infinite .8s; }
    .rk-p3 { animation: rk-float1 3.7s ease-in-out infinite 1.4s; }
    .rk-ln  { stroke-dasharray: 20 10; animation: rk-dash 2.4s linear infinite; }
    .rk-ln2 { stroke-dasharray: 12 8;  animation: rk-dash 3.1s linear infinite .5s; }
    .rk-pk  { animation: rk-fade 3s ease-in-out infinite; }
    .rk-gw  { animation: rk-glow 4s ease-in-out infinite; }
    .rk-pp  { animation: rk-pop .6s cubic-bezier(.34,1.56,.64,1) both; }
    .rk-pp2 { animation: rk-pop .6s cubic-bezier(.34,1.56,.64,1) .15s both; }
    .rk-pp3 { animation: rk-pop .6s cubic-bezier(.34,1.56,.64,1) .3s both; }
    .rk-sl  { animation: rk-slide .7s ease both; }
    .rk-sl2 { animation: rk-slide .7s ease .2s both; }
    .rk-sl3 { animation: rk-slide .7s ease .4s both; }
    .rk-cur { animation: rk-blink 1s step-end infinite; }
  </style>
  <radialGradient id="rk-bg1" cx="40%" cy="50%" r="60%">
    <stop offset="0%" stop-color="#1a0a2e"/>
    <stop offset="100%" stop-color="#0a0a12"/>
  </radialGradient>
  <radialGradient id="rk-acc1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#7C3AED" stop-opacity="0.4"/>
    <stop offset="100%" stop-color="#7C3AED" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="rk-acc2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="#06B6D4" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="rk-acc3" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.25"/>
    <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="rk-ng1" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#6d28d9"/>
  </radialGradient>
  <radialGradient id="rk-ng2" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#67e8f9"/><stop offset="100%" stop-color="#0891b2"/>
  </radialGradient>
  <radialGradient id="rk-ng3" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fcd34d"/><stop offset="100%" stop-color="#d97706"/>
  </radialGradient>
  <radialGradient id="rk-ng4" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#f9a8d4"/><stop offset="100%" stop-color="#be185d"/>
  </radialGradient>
  <clipPath id="rk-clip"><rect width="680" height="320"/></clipPath>
</defs>
<g clip-path="url(#rk-clip)">
  <rect width="680" height="320" fill="url(#rk-bg1)" rx="16"/>
  <g opacity=".12" fill="#fff">
    <circle cx="40" cy="40" r="1"/><circle cx="120" cy="40" r="1"/><circle cx="200" cy="40" r="1"/>
    <circle cx="280" cy="40" r="1"/><circle cx="360" cy="40" r="1"/><circle cx="440" cy="40" r="1"/>
    <circle cx="520" cy="40" r="1"/><circle cx="600" cy="40" r="1"/>
    <circle cx="40" cy="120" r="1"/><circle cx="120" cy="120" r="1"/><circle cx="200" cy="120" r="1"/>
    <circle cx="280" cy="120" r="1"/><circle cx="360" cy="120" r="1"/><circle cx="440" cy="120" r="1"/>
    <circle cx="520" cy="120" r="1"/><circle cx="600" cy="120" r="1"/>
    <circle cx="40" cy="200" r="1"/><circle cx="120" cy="200" r="1"/><circle cx="200" cy="200" r="1"/>
    <circle cx="280" cy="200" r="1"/><circle cx="360" cy="200" r="1"/><circle cx="440" cy="200" r="1"/>
    <circle cx="520" cy="200" r="1"/><circle cx="600" cy="200" r="1"/>
    <circle cx="40" cy="280" r="1"/><circle cx="120" cy="280" r="1"/><circle cx="200" cy="280" r="1"/>
    <circle cx="280" cy="280" r="1"/><circle cx="360" cy="280" r="1"/><circle cx="440" cy="280" r="1"/>
    <circle cx="520" cy="280" r="1"/><circle cx="600" cy="280" r="1"/>
  </g>
  <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#rk-acc1)" class="rk-gw"/>
  <ellipse cx="520" cy="100" rx="130" ry="100" fill="url(#rk-acc2)"/>
  <ellipse cx="580" cy="260" rx="100" ry="80"  fill="url(#rk-acc3)" class="rk-gw"/>
  <g class="rk-ow">
    <g transform="translate(340,55)">
      <circle r="22" fill="url(#rk-ng2)" opacity=".9"/>
      <text font-family="monospace" font-size="10" fill="#e0f7fa" text-anchor="middle" dominant-baseline="central" font-weight="700">TSX</text>
    </g>
  </g>
  <g class="rk-ow2">
    <g transform="translate(490,155)">
      <circle r="18" fill="url(#rk-ng1)" opacity=".9"/>
      <text font-family="monospace" font-size="9" fill="#ede9fe" text-anchor="middle" dominant-baseline="central" font-weight="700">n8n</text>
    </g>
  </g>
  <g class="rk-ow">
    <g transform="translate(340,255)">
      <circle r="20" fill="url(#rk-ng3)" opacity=".9"/>
      <text font-family="monospace" font-size="9" fill="#fef3c7" text-anchor="middle" dominant-baseline="central" font-weight="700">SQL</text>
    </g>
  </g>
  <g class="rk-ow2">
    <g transform="translate(190,155)">
      <circle r="16" fill="url(#rk-ng4)" opacity=".9"/>
      <text font-family="monospace" font-size="8" fill="#fce7f3" text-anchor="middle" dominant-baseline="central" font-weight="700">AI</text>
    </g>
  </g>
  <circle cx="340" cy="155" r="100" fill="none" stroke="#7C3AED" stroke-width=".5" stroke-dasharray="4 6" opacity=".3"/>
  <line x1="135" y1="60"  x2="88"  y2="54"  stroke="#a78bfa" stroke-width=".8" class="rk-ln"  opacity=".4"/>
  <line x1="135" y1="80"  x2="88"  y2="100" stroke="#06B6D4" stroke-width=".8" class="rk-ln2" opacity=".35"/>
  <line x1="610" y1="200" x2="640" y2="230" stroke="#fcd34d" stroke-width=".8" class="rk-ln"  opacity=".35"/>
  <g class="rk-p1">
    <rect x="18" y="38" width="120" height="38" rx="6" fill="#1e1b4b" opacity=".9" stroke="#7C3AED" stroke-width=".8"/>
    <text font-family="monospace" font-size="9.5" fill="#a78bfa" x="28" y="54" font-weight="600">const dev = {</text>
    <text font-family="monospace" font-size="9"   fill="#67e8f9" x="28" y="68">  stack: "React"</text>
  </g>
  <g class="rk-p2">
    <rect x="10" y="105" width="130" height="38" rx="6" fill="#0c1a2e" opacity=".9" stroke="#06B6D4" stroke-width=".8"/>
    <text font-family="monospace" font-size="9" fill="#67e8f9" x="20" y="121" font-weight="600">async function build()</text>
    <text font-family="monospace" font-size="9" fill="#a78bfa" x="20" y="135">  await deploy()</text>
  </g>
  <g class="rk-p3">
    <rect x="18" y="175" width="110" height="28" rx="6" fill="#1a1200" opacity=".9" stroke="#F59E0B" stroke-width=".8"/>
    <text font-family="monospace" font-size="9"   fill="#fcd34d" x="26" y="187" font-weight="600">// 7+ años coding</text>
    <text font-family="monospace" font-size="8.5" fill="#d97706" x="26" y="198">// La Pampa 🇦🇷</text>
  </g>
  <g class="rk-pk">
    <rect x="590" y="218" width="80" height="36" rx="18" fill="#0a1628" stroke="#06B6D4" stroke-width="1"/>
    <text font-family="monospace" font-size="10" fill="#67e8f9" x="630" y="232" text-anchor="middle" font-weight="700">7+ yrs</text>
    <text font-family="monospace" font-size="8"  fill="#7dd3fc" x="630" y="246" text-anchor="middle">experiencia</text>
  </g>
  <g class="rk-sl">
    <rect x="160" y="42" width="140" height="24" rx="12" fill="#1e0a3c" stroke="#7C3AED" stroke-width=".8" opacity=".9"/>
    <text font-family="monospace" font-size="10" fill="#c4b5fd" x="174" y="58">🇦🇷  Eduardo Castex</text>
  </g>
  <text font-family="Georgia,serif" font-size="54" fill="#f8fafc" x="160" y="136" font-weight="700" letter-spacing="-1" class="rk-sl2">René Kuhm</text>
  <rect x="160" y="142" width="220" height="3" rx="1.5" fill="url(#rk-ng1)" class="rk-sl2"/>
  <g class="rk-sl3">
    <text font-family="monospace" font-size="14" fill="#94a3b8" x="162" y="172">Full Stack · FTTH · OS Builder · AI</text>
  </g>
  <rect x="536" y="156" width="2" height="18" rx="1" fill="#7C3AED" class="rk-cur"/>
  <g class="rk-pp">
    <rect x="160" y="195" width="74" height="22" rx="11" fill="#1e1b4b" stroke="#7C3AED" stroke-width="1"/>
    <text font-family="monospace" font-size="9.5" fill="#a78bfa" x="197" y="210" text-anchor="middle" font-weight="600">React</text>
  </g>
  <g class="rk-pp2">
    <rect x="242" y="195" width="74" height="22" rx="11" fill="#0c1a2e" stroke="#06B6D4" stroke-width="1"/>
    <text font-family="monospace" font-size="9.5" fill="#67e8f9" x="279" y="210" text-anchor="middle" font-weight="600">Next.js</text>
  </g>
  <g class="rk-pp3">
    <rect x="324" y="195" width="82" height="22" rx="11" fill="#1a1200" stroke="#F59E0B" stroke-width="1"/>
    <text font-family="monospace" font-size="9.5" fill="#fcd34d" x="365" y="210" text-anchor="middle" font-weight="600">Linux/OS</text>
  </g>
  <g class="rk-pp3">
    <rect x="160" y="246" width="160" height="36" rx="18" fill="#7C3AED"/>
    <rect x="160" y="246" width="160" height="36" rx="18" fill="none" stroke="#a78bfa" stroke-width=".8" opacity=".6"/>
    <text font-family="monospace" font-size="11" fill="#fff" x="240" y="269" text-anchor="middle" font-weight="700">tecnodespegue.com</text>
  </g>
  <path d="M650 10 L670 10 L670 30" fill="none" stroke="#7C3AED" stroke-width="1.5" opacity=".5" stroke-linecap="round"/>
  <path d="M10 290 L10 310 L30 310" fill="none" stroke="#06B6D4" stroke-width="1.5" opacity=".5" stroke-linecap="round"/>
</g>
</svg>
</div>

<!-- Typing SVG -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=26&pause=1000&color=00D9FF&center=true&vCenter=true&random=false&width=650&lines=Full+Stack+Developer+%F0%9F%9A%80;FTTH+%26+Network+Specialist+%F0%9F%8C%90;Custom+OS+Builder+%F0%9F%90%A7+Linux+%7C+Unix+%7C+Windows;Automatización+con+n8n+%26+AI+%F0%9F%A4%96;7%2B+años+construyendo+para+la+web+%E2%9C%A8" alt="Typing SVG" />
</p>

<!-- Badges de redes sociales -->
<p align="center">
  <a href="https://tecnodespegue.com">
    <img src="https://img.shields.io/badge/🌐_Web-tecnodespegue.com-00D9FF?style=for-the-badge&logoColor=white" alt="Website"/>
  </a>
  <a href="https://youtube.com/@tecnodespegue">
    <img src="https://img.shields.io/badge/YouTube-TecnoDespegue-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/>
  </a>
  <a href="https://tdpblog.com.ar">
    <img src="https://img.shields.io/badge/Blog-TDP_Blog-21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="Blog"/>
  </a>
</p>

<p align="center">
  <a href="https://linkedin.com/in/rene-kuhm">
    <img src="https://img.shields.io/badge/LinkedIn-René_Kuhm-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://twitter.com/REPARO22">
    <img src="https://img.shields.io/badge/Twitter-@REPARO22-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/>
  </a>
  <a href="https://instagram.com/tecnodespegue">
    <img src="https://img.shields.io/badge/Instagram-@tecnodespegue-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
  </a>
  <a href="mailto:contacto@tdpblog.com.ar">
    <img src="https://img.shields.io/badge/Email-contacto@tdpblog.com.ar-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
</p>

<!-- Stats rápidos -->
<p align="center">
  <img src="https://komarev.com/ghpvc/?username=Rene-Kuhm&label=Profile%20Views&color=00D9FF&style=flat" alt="Profile views" />
  <img src="https://img.shields.io/github/followers/Rene-Kuhm?label=Followers&style=social" alt="GitHub followers" />
  <img src="https://img.shields.io/github/stars/Rene-Kuhm?label=Stars&style=social" alt="GitHub stars" />
</p>

---

## 👋 ¡Hola! Soy René Kuhm

> **Full Stack Developer & FTTH Specialist** con **7+ años** de experiencia construyendo soluciones web modernas y sistemas personalizados, desde Eduardo Castex, La Pampa 🇦🇷

Combino el desarrollo de aplicaciones con **React, Next.js y Astro** con trabajo especializado en **infraestructura FTTH** en COSPEC Ltd. También diseño y construyo **sistemas operativos personalizados** basados en Linux, Unix y Windows, y soy creador de contenido técnico en **YouTube** y mi **blog**.

🌐 **Visita mi web:** [tecnodespegue.com](https://tecnodespegue.com)

---

## 🚀 ¿Qué hago?

```javascript
const reneKuhm = {
  ubicacion: "Eduardo Castex, La Pampa 🇦🇷",
  rol: "Full Stack Developer & FTTH Specialist & OS Builder",
  experiencia: "7+ años",
  empresa: "COSPEC Ltd.",

  stack: {
    frontend:  ["React", "Next.js", "Astro", "TypeScript", "TailwindCSS"],
    backend:   ["Node.js", "Express", "Python", "PostgreSQL"],
    devops:    ["Docker", "Vercel", "GitHub Actions"],
    ai_tools:  ["n8n", "Claude AI", "Automatización de workflows"],
    sistemas:  ["Linux personalizado", "Unix", "Windows custom builds", "NixOS"],
    redes:     ["FTTH", "Fibra óptica", "ISP consulting", "DNS/Namecheap"],
  },

  proyectos: ["TecnoDespegue 🌐", "Canal YouTube 📺", "Tech Blog 📝", "Custom OS 🐧"],
  filosofia:  ["Clean Code", "Automatización > Repetición", "Enseñar fortalece"],
  hobbies:    ["Ciclismo 🚴", "Gaming 🎮", "Hardware DIY 🔧", "Café ☕"],
};
```

---

## 🔥 Foco Actual

<table>
  <tr>
    <td width="50%">

### 💻 Desarrollo Web
- 🎨 **Frontend**: React, Next.js, Astro, TailwindCSS
- 🔧 **Backend**: Node.js, TypeScript, REST APIs
- 📦 **Deploy**: Vercel, Docker, GitHub Actions
- 🎯 **Foco**: Performance, SEO técnico, UX/UI

    </td>
    <td width="50%">

### 🐧 Sistemas Operativos Personalizados
- 🛠️ Builds custom basados en **Linux / Unix**
- 🪟 Configuraciones optimizadas en **Windows**
- ⚡ Entornos de desarrollo con **NixOS**
- 🔒 Hardening, automatización y scripts de sistema

    </td>
  </tr>
  <tr>
    <td width="50%">

### 🌐 FTTH & Redes
- 🔌 Instalación y mantenimiento de fibra óptica
- 📡 Optimización de redes para ISPs
- 🛠️ Gestión de DNS y dominios
- 📊 Consultoría en infraestructura de Internet

    </td>
    <td width="50%">

### 🤖 AI & Automatización
- 🔄 Workflows con **n8n** y APIs de AI
- 🌐 Integración de **LLMs** en proyectos web
- 📊 Automatización de contenido y redes sociales
- ⚡ Self-hosted tools en **NixOS/Linux**

    </td>
  </tr>
</table>

---

## 🛠️ Stack Tecnológico

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

### Backend & Bases de Datos
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"/>
</p>

### Sistemas Operativos & DevOps
<p>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"/>
  <img src="https://img.shields.io/badge/Unix-4D4D4D?style=for-the-badge&logo=unix&logoColor=white"/>
  <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"/>
  <img src="https://img.shields.io/badge/NixOS-5277C3?style=for-the-badge&logo=nixos&logoColor=white"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"/>
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
</p>

### AI & Automatización
<p>
  <img src="https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white"/>
  <img src="https://img.shields.io/badge/Claude_AI-D97757?style=for-the-badge&logo=anthropic&logoColor=white"/>
  <img src="https://img.shields.io/badge/REST_APIs-009688?style=for-the-badge&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/Metricool-3B5998?style=for-the-badge&logoColor=white"/>
</p>

---

## 📊 GitHub Analytics

<p align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=Rene-Kuhm&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&bg_color=0d1117"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rene-Kuhm&layout=compact&langs_count=8&theme=tokyonight&hide_border=true&bg_color=0d1117"/>
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Rene-Kuhm&theme=tokyonight&hide_border=true&background=0d1117" alt="GitHub Streak"/>
</p>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=Rene-Kuhm&theme=tokyo-night&hide_border=true&bg_color=0d1117&color=00d9ff&line=00d9ff&point=ffffff" width="100%"/>
</p>

---

## 🏆 GitHub Achievements

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=Rene-Kuhm&theme=tokyonight&no-frame=true&no-bg=true&column=7&margin-w=15&margin-h=15" alt="GitHub Trophies"/>
</p>

---

## 🔥 Proyectos Destacados

<table>
  <tr>
    <td width="50%">
      <h3 align="center">🌐 TecnoDespegue</h3>
      <div align="center">
        <a href="https://tecnodespegue.com" target="_blank">
          <img src="https://img.shields.io/badge/Ver_Web-00D9FF?style=for-the-badge&logo=google-chrome&logoColor=white"/>
        </a>
        <p>
          <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white"/>
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
          <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"/>
        </p>
        <p><strong>Portal principal</strong> de TecnoDespegue. Hub de contenido técnico, tutoriales y recursos para desarrolladores. Integrado con YouTube API y blog.</p>
      </div>
    </td>
    <td width="50%">
      <h3 align="center">🎓 CampusMind SaaS</h3>
      <div align="center">
        <a href="https://github.com/Rene-Kuhm/CampusMind-sass" target="_blank">
          <img src="https://img.shields.io/badge/Ver_Proyecto-00D9FF?style=for-the-badge&logo=github&logoColor=white"/>
        </a>
        <p>
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
          <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"/>
          <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white"/>
        </p>
        <p><strong>Plataforma SaaS</strong> para gestión educativa. Sistema completo de administración de cursos, estudiantes y contenido con autenticación JWT.</p>
      </div>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">🌊 Acuamarina Cerámica</h3>
      <div align="center">
        <a href="https://github.com/Rene-Kuhm/acuamarina-ceramica" target="_blank">
          <img src="https://img.shields.io/badge/Ver_Proyecto-00D9FF?style=for-the-badge&logo=github&logoColor=white"/>
        </a>
        <p>
          <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white"/>
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
          <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"/>
        </p>
        <p><strong>E-commerce moderno</strong> con Next.js, TypeScript y TailwindCSS. Gestión de productos, carrito y checkout optimizado para pymes.</p>
      </div>
    </td>
    <td width="50%">
      <h3 align="center">🎨 Studio Agency</h3>
      <div align="center">
        <a href="https://github.com/Rene-Kuhm/studio-agency" target="_blank">
          <img src="https://img.shields.io/badge/Ver_Proyecto-00D9FF?style=for-the-badge&logo=github&logoColor=white"/>
        </a>
        <p>
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
          <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"/>
          <img src="https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white"/>
        </p>
        <p><strong>Portfolio corporativo</strong> para agencia creativa. Diseño moderno, animaciones fluidas y arquitectura optimizada para SEO técnico.</p>
      </div>
    </td>
  </tr>
</table>

<div align="center">
  <a href="https://github.com/Rene-Kuhm?tab=repositories">
    <img src="https://img.shields.io/badge/Ver%20Todos%20los%20Proyectos%20→-00D9FF?style=for-the-badge&logo=github&logoColor=white" alt="Ver todos"/>
  </a>
</div>

---

## 💼 Servicios Profesionales

<div align="center">

### 🌐 Disponibilidad y contacto en [tecnodespegue.com](https://tecnodespegue.com)

</div>

| 💻 Desarrollo Web | 🐧 Custom OS & Linux | 🌐 Consultoría FTTH | 🤖 Automatización con AI |
|:-:|:-:|:-:|:-:|
| Sitios y apps web con React, Next.js y Astro. Enfoque en rendimiento, SEO técnico y UX. | Diseño y construcción de sistemas operativos personalizados con Linux, Unix y Windows. | Instalación, mantenimiento y optimización de redes de fibra óptica para ISPs y empresas. | Implementación de workflows con n8n, integración de APIs de IA y automatización de procesos. |

---

## 📺 Contenido & Comunidad

<table>
  <tr>
    <td align="center" width="33%">
      <h3>🌐 TecnoDespegue</h3>
      <p>Portal con recursos, tutoriales y contenido técnico para desarrolladores y emprendedores.</p>
      <a href="https://tecnodespegue.com">
        <img src="https://img.shields.io/badge/Visitar_Web-00D9FF?style=for-the-badge&logo=google-chrome&logoColor=white"/>
      </a>
    </td>
    <td align="center" width="33%">
      <h3>📺 YouTube</h3>
      <p>Tutoriales prácticos sobre desarrollo web, automatización con AI, sistemas Linux y tecnología.</p>
      <a href="https://youtube.com/@tecnodespegue">
        <img src="https://img.shields.io/badge/Suscribirse-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/>
      </a>
    </td>
    <td align="center" width="33%">
      <h3>📝 Blog</h3>
      <p>Artículos técnicos, guías paso a paso y recursos gratuitos sobre dev, SEO, Linux y automatización.</p>
      <a href="https://tdpblog.com.ar">
        <img src="https://img.shields.io/badge/Leer_Blog-21759B?style=for-the-badge&logo=wordpress&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

---

## 🌱 Aprendiendo Actualmente

<p align="center">
  <img src="https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=anthropic&logoColor=white"/>
  <img src="https://img.shields.io/badge/AI_Agents-412991?style=for-the-badge&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/NixOS-5277C3?style=for-the-badge&logo=nixos&logoColor=white"/>
  <img src="https://img.shields.io/badge/Self_Hosted_AI-EA4B71?style=for-the-badge&logo=homeassistant&logoColor=white"/>
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white"/>
</p>

---

## 📫 Hablemos

<div align="center">

### 💬 Siempre abierto a nuevos proyectos y colaboraciones

<p>
  <a href="https://tecnodespegue.com">
    <img src="https://img.shields.io/badge/🌐_Web-tecnodespegue.com-00D9FF?style=for-the-badge"/>
  </a>
  <a href="mailto:contacto@tdpblog.com.ar">
    <img src="https://img.shields.io/badge/Email-contacto@tdpblog.com.ar-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://linkedin.com/in/rene-kuhm">
    <img src="https://img.shields.io/badge/LinkedIn-René_Kuhm-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
</p>

</div>

---

## 💭 Quote of the Day

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight&border=true" alt="Random Dev Quote"/>
</div>

---

<div align="center">

### 🌟 "El código es poesía, hazlo hermoso" 🌟

<p>
  <img src="https://img.shields.io/badge/Made%20with-❤️-ff1744.svg?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/From-La%20Pampa%2C%20Argentina%20🇦🇷-38B2AC.svg?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Open%20to-Collaborate-00D9FF.svg?style=for-the-badge"/>
</p>

### 🌐 [tecnodespegue.com](https://tecnodespegue.com)

**⭐️ Si te gusta mi trabajo, dale una estrella a mis repos!**

<sub>Actualizado: Marzo 2026</sub>

</div>

<!-- Footer animado -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=150&section=footer" width="100%"/>
