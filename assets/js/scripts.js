// Rendering project cards into #projects-grid
function renderProjectCards(projects, containerId = "projects-grid") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  projects.forEach((p) => {
    const a = document.createElement("a");
    a.className = "project-card";
    a.href = p.html_url;
    a.target = "_blank";
    a.rel = "noopener";

    a.innerHTML = `
      <div class="project-card-body">
        <h3 class="project-title">${escapeHtml(p.name)}</h3>
        <p class="project-desc">${escapeHtml(p.description || "No description")}</p>
        <div class="project-meta">
          <span class="lang">${escapeHtml(p.language || "")}</span>
          <span class="stars">★ ${p.stargazers_count || 0}</span>
        </div>
      </div>
    `;
    container.appendChild(a);
  });
}

// HTML escape helper
function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

// Fetching repos
async function fetchGitHubProjects(
  username,
  { limit = 8, sort = "updated" } = {},
) {
  try {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=${sort}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("GitHub API error");
    const repos = await res.json();
    // filter and sort client-side: exclude forks, take top by stars or recent
    const filtered = repos
      .filter((r) => !r.fork)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at) - new Date(a.updated_at),
      )
      .slice(0, limit);
    return filtered;
  } catch (err) {
    console.warn("Failed to fetch GitHub repos", err);
    return null;
  }
}
(async () => {
  const username = "pepa667";
  const projects = await fetchGitHubProjects(username, { limit: 8 });
  if (projects && projects.length) renderProjectCards(projects);
  else {
    // fallback
    const container = document.getElementById("projects-grid");
    if (container)
      container.innerHTML =
        '<p class="muted">Unable to load projects. Try again later.</p>';
  }
})();
const el = document.querySelector('script[src="https://giscus.app/client.js"]');
if (el && window.giscus) {
  window.giscus.setConfig({
    theme: document.body.classList.contains("light-mode") ? "light" : "dark",
  });
}
