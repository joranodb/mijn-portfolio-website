const GH_BASE = 'https://github.com/joranodb/mijn-portfolio-website/blob/main';
(function() {
  const params = new URLSearchParams(window.location.search);
  const n = parseInt(params.get('p') || '1', 10);

  const projects = [
    {
      name: 'Ethical Hacking Essentials (EHE)',
      file: 'assets/projects/Coursera 395DD9RQS4WI.pdf',
      github: `${GH_BASE}/assets/projects/Coursera%20395DD9RQS4WI.pdf`,
      summary: 'Overzicht van offensive en defensive technieken.',
      tools: ['Kali Linux','Nmap','Wireshark','Metasploit']
    },
    {
      name: 'Automate Cybersecurity Tasks with Python',
      file: 'assets/projects/Coursera 4QJQQEIRNF1P.pdf',
      github: `${GH_BASE}/assets/projects/Coursera%204QJQQEIRNF1P.pdf`,
      summary: 'Automatiseren van securitytaken met Python: data, APIs, parsing en rapportage.',
      tools: ['Python','Requests','JSON','Automation']
    },
    {
      name: 'Python Basics',
      file: 'assets/projects/Coursera NS5KLLJWBGLG.pdf',
      github: `${GH_BASE}/assets/projects/Coursera%20NS5KLLJWBGLG.pdf`,
      summary: 'Basis Python: syntax, variabelen en controlestructuren.',
      tools: ['Python','Control Flow','Functions']
    },
    {
      name: 'Google Cybersecurity',
      file: 'assets/projects/Coursera TB5A7FIDNG6O (1).pdf',
      github: `${GH_BASE}/assets/projects/Coursera%20TB5A7FIDNG6O%20%281%29.pdf`,
      summary: 'Security fundamentals, SIEM/SOC-workflows en incidentrespons.',
      tools: ['Linux','Networking','SIEM','Incident Response']
    },
    {
      name: 'Tools of the Trade: Linux and SQL',
      file: 'assets/projects/Coursera XCN49D2BVPZ7.pdf',
      github: `${GH_BASE}/assets/projects/Coursera%20XCN49D2BVPZ7.pdf`,
      summary: 'Linux CLI, permissies, services en basis SQL-queries.',
      tools: ['Linux','Bash','SQL']
    },
    {
      name: 'Technical Support Fundamentals',
      file: 'assets/projects/Coursera YT47ZJIWH2LB.pdf',
      github: `${GH_BASE}/assets/projects/Coursera%20YT47ZJIWH2LB.pdf`,
      summary: 'Troubleshooting, netwerk- en OS-concepten, supportpraktijken.',
      tools: ['Troubleshooting','OS','Networking']
    }
  ];

  const idx = Math.min(Math.max(n, 1), projects.length) - 1;
  const current = projects[idx];

  var el;
  if (el = document.getElementById('projectTitle')) el.textContent = current.name;
  if (el = document.getElementById('thumbTitle')) el.textContent = current.name;
  if (el = document.getElementById('infoName')) el.textContent = current.name;
  if (el = document.getElementById('infoDetails')) el.textContent = current.summary;

  if (el = document.getElementById('demoBtn')) { el.href = current.file; el.setAttribute('download', ''); }
  if (el = document.getElementById('githubBtn')) { el.href = current.github; el.target = '_blank'; el.rel = 'noopener'; }

  const tech = document.getElementById('techList');
  if (tech && Array.isArray(current.tools)) {
    tech.innerHTML = '';
    current.tools.forEach(t => {
      const span = document.createElement('span');
      span.className = 'badge rounded-pill badge-tech';
      span.textContent = t;
      tech.appendChild(span);
    });
  }

  const ul = document.getElementById('relatedList');
  if (ul) {
    ul.innerHTML = '';
    projects.forEach((p, i) => {
      if (i === idx) return;
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      const a = document.createElement('a');
      a.href = 'naam.html?p=' + (i + 1);
      a.textContent = p.name + ' — Certificaat';
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
})();

