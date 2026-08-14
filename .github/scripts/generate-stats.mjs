// Builds assets/stats.svg from the GitHub API.
//
// The point of generating it here rather than pointing the README at
// github-readme-stats is that the result is a file in this repository,
// served by GitHub. A hosted card is a runtime dependency on someone
// else's server: when that server is down the profile shows a broken
// image, which is worse than showing nothing. This cannot break.
//
// Runs on the workflow's automatic GITHUB_TOKEN. No secret to manage.

import { writeFile, mkdir } from "node:fs/promises";

const USER = process.env.STATS_USER ?? "Rene-Kuhm";
const TOKEN = process.env.GITHUB_TOKEN;
const OUT = "assets/stats.svg";

async function api(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      accept: "application/vnd.github+json",
      ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status} ${await res.text()}`);
  return res.json();
}

async function graphql(query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
    },
    body: JSON.stringify({ query, variables }),
  });
  const body = await res.json();
  if (body.errors) throw new Error(JSON.stringify(body.errors));
  return body.data;
}

async function allRepos() {
  const out = [];
  for (let page = 1; ; page++) {
    const batch = await api(`/users/${USER}/repos?per_page=100&page=${page}&type=owner`);
    out.push(...batch);
    if (batch.length < 100) return out;
  }
}

async function contributions() {
  const to = new Date();
  const from = new Date(to);
  from.setFullYear(from.getFullYear() - 1);
  const data = await graphql(
    `query ($login: String!, $from: DateTime!, $to: DateTime!) {
       user(login: $login) {
         contributionsCollection(from: $from, to: $to) {
           contributionCalendar { totalContributions }
         }
       }
     }`,
    { login: USER, from: from.toISOString(), to: to.toISOString() },
  );
  return data.user.contributionsCollection.contributionCalendar.totalContributions;
}

function escapeXml(s) {
  return String(s).replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c],
  );
}

// Deliberately no language breakdown. Measured by bytes this profile reads
// as TypeScript and Python, because one SaaS front end and one Python CLI
// are the largest repositories; measured as an average of per-repository
// shares it reads as Shell, because several small repositories are shell.
// Neither describes hardware reverse engineering, which is the point of
// the work. A chart that argues against the README is worse than no chart.
function buildSvg({ stats }) {
  const W = 840;
  const H = 150;
  const column = (W - 64) / stats.length;

  const cards = stats
    .map(({ value, label }, i) => {
      const x = 32 + i * column;
      return `
    <text x="${x}" y="94" class="value">${escapeXml(value)}</text>
    <text x="${x}" y="118" class="label">${escapeXml(label)}</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeXml(stats.map((s) => `${s.value} ${s.label}`).join(", "))}">
  <style>
    .bg    { fill: #ffffff; stroke: #d1d9e0; }
    .title { fill: #59636e; font: 600 13px ui-sans-serif, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; letter-spacing: .06em; }
    .value { fill: #1f2328; font: 700 38px ui-sans-serif, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; }
    .label { fill: #59636e; font: 400 13px ui-sans-serif, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; }
    @media (prefers-color-scheme: dark) {
      .bg    { fill: #0d1117; stroke: #3d444d; }
      .title, .label { fill: #9198a1; }
      .value { fill: #f0f6fc; }
    }
  </style>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" class="bg" stroke-width="1" />
  <text x="32" y="46" class="title">LAST 12 MONTHS</text>
  ${cards}
</svg>
`;
}

const repos = await allRepos();
const owned = repos.filter((r) => !r.fork);
const stars = owned.reduce((n, r) => n + r.stargazers_count, 0);

let total;
try {
  total = await contributions();
} catch (error) {
  // The workflow token may not carry read:user. Losing one number is not
  // a reason to publish no card at all.
  console.warn(`contributions unavailable: ${error.message}`);
  total = null;
}

const stats = [
  ...(total === null ? [] : [{ value: total.toLocaleString("en-US"), label: "contributions" }]),
  { value: owned.filter((r) => !r.archived).length, label: "active repositories" },
  { value: stars, label: "stars earned" },
];

await mkdir("assets", { recursive: true });
await writeFile(OUT, buildSvg({ stats }), "utf8");
console.log(`wrote ${OUT}`);
console.log(stats.map((s) => `${s.value} ${s.label}`).join(" | "));
