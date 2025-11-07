const GH_BASE = 'https://github.com/joranodb/mijn-portfolio-website/blob/main';
(function() {
  const params = new URLSearchParams(window.location.search);
  const n = parseInt(params.get('p') || '1', 10);
  const projects = [
    { name: 'Labo 1', file: 'assets/projects/labo1.zip', github: `${GH_BASE}/assets/projects/labo1.zip` },
    { name: 'Labo 2', file: 'assets/projects/labo2.zip', github: `${GH_BASE}/assets/projects/labo2.zip` },
    { name: 'Labo 3', file: 'assets/projects/labo3.zip', github: `${GH_BASE}/assets/projects/labo3.zip` },
    { name: 'Labo 4 - Bootstrap Layout', file: 'assets/projects/bootstrap-layout-startbestanden.zip', github: `${GH_BASE}/assets/projects/bootstrap-layout-startbestanden.zip` },
    { name: 'Labo 5 - Bootstrap Content', file: 'assets/projects/bootstrap-content-startbestand.zip', github: `${GH_BASE}/assets/projects/bootstrap-content-startbestand.zip` },
    { name: 'Labo 6', file: 'assets/projects/labo5.zip', github: `${GH_BASE}/assets/projects/labo5.zip` }
  ];
  const idx = Math.min(Math.max(n, 1), projects.length) - 1;
  const current = projects[idx];
  var el;
  if (el = document.getElementById('projectTitle')) el.textContent = current.name;
  if (el = document.getElementById('thumbTitle')) el.textContent = current.name;
  if (el = document.getElementById('infoName')) el.textContent = current.name;
  if (el = document.getElementById('infoDetails')) el.textContent = 'Les ' + (idx + 1);
  if (el = document.getElementById('demoBtn')) { el.href = current.file; el.setAttribute('download', ''); }
  if (el = document.getElementById('githubBtn')) { el.href = current.github; el.target = '_blank'; el.rel = 'noopener'; }

  const ul = document.getElementById('relatedList');
  if (ul) {
    ul.innerHTML = '';
    projects.forEach((p, i) => {
      if (i === idx) return;
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      const a = document.createElement('a');
      a.href = 'naam.html?p=' + (i + 1);
      a.textContent = p.name + ' — Details: Les ' + (i + 1);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
})();
