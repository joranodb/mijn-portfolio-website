const GH_BASE = typeof GH_BASE !== 'undefined' ? GH_BASE : '';

(function () {
  const params = new URLSearchParams(window.location.search);
  const type = (params.get('type') || '').toLowerCase() === 'c' ? 'c' : 'p';
  const n = parseInt(params.get('n') || params.get('p') || '1', 10);

  const projects = [
  {
    name: 'Ethical Hacking Essentials — praktijklab',
    summary: 'In dit project oefende ik de basis van ethical hacking: informatievergaring, netwerkverkenning, poort- en servicescans en het analyseren van eenvoudige kwetsbaarheden in een veilige lab-omgeving.',
    tools: ['Kali Linux', 'Nmap', 'Wireshark', 'Metasploit'],
    github: GH_BASE,
    file: ''
  },
  {
    name: 'Automate Cybersecurity Tasks with Python',
    summary: 'Met dit project automatiseerde ik cybersecuritytaken: logbestanden inlezen, verdachte patronen filteren en eenvoudige alerts genereren met Python-scripts.',
    tools: ['Python', 'Regex', 'JSON', 'Loganalyse'],
    github: GH_BASE,
    file: ''
  },
  {
    name: 'Python Basics — fundamenten',
    summary: 'Hier bouwde ik kleine consoletools om de basis van Python te oefenen: variabelen, controlestructuren (if/else), lussen, functies en het werken met lijsten en dictionaries.',
    tools: ['Python', 'VS Code', 'Git'],
    github: GH_BASE,
    file: ''
  },
  {
    name: 'Google Cybersecurity — SOC mindset',
    summary: 'Dit project focust op het denkproces van een SOC-analist: alerts interpreteren, risico inschatten, eenvoudige incident-playbooks opstellen en bevindingen rapporteren.',
    tools: ['SOC-concepten', 'Incident response', 'Playbooks', 'Rapportering'],
    github: GH_BASE,
    file: ''
  },
  {
    name: 'Linux & SQL — loganalyse',
    summary: 'In dit project combineerde ik Linux-commands en SQL-queries om logdata te filteren, te groeperen en te analyseren, met focus op het herkennen van afwijkende activiteiten.',
    tools: ['Linux', 'Bash', 'SQL', 'Logbestanden'],
    github: GH_BASE,
    file: ''
  },
  {
    name: 'Technical Support Fundamentals — cases',
    summary: 'Deze cases draaien rond hardware-, software- en netwerkproblemen, met nadruk op gestructureerd troubleshooten en duidelijke, klantgerichte communicatie.',
    tools: ['Windows', 'Linux', 'Troubleshooting', 'Documentatie'],
    github: GH_BASE,
    file: ''
  }
];
  const certs = [
    { name:'Ethical Hacking Essentials (EHE)', summary:'Offensive en defensive technieken.', tools:['Kali Linux','Nmap','Wireshark','Metasploit'], github: GH_BASE, file:'assets/projects/Coursera 395DD9RQS4WI.pdf' },
    { name:'Automate Cybersecurity Tasks with Python', summary:'Securitytaken automatiseren met Python.', tools:['Python','Requests','JSON','Automation'], github: GH_BASE, file:'assets/projects/Coursera 4QJQQEIRNF1P.pdf' },
    { name:'Python Basics', summary:'Basis Python: syntax en control flow.', tools:['Python'], github: GH_BASE, file:'assets/projects/Coursera NS5KLLJWBGLG.pdf' },
    { name:'Google Cybersecurity', summary:'Fundamentals, SIEM/SOC en incidentrespons.', tools:['Linux','Networking','SIEM'], github: GH_BASE, file:'assets/projects/Coursera TB5A7FIDNG6O (1).pdf' },
    { name:'Tools of the Trade: Linux and SQL', summary:'Linux CLI en basis SQL.', tools:['Linux','Bash','SQL'], github: GH_BASE, file:'assets/projects/Coursera XCN49D2BVPZ7.pdf' },
    { name:'Technical Support Fundamentals', summary:'Troubleshooting, netwerk en OS.', tools:['OS','Networking','Docs'], github: GH_BASE, file:'assets/projects/Coursera YT47ZJIWH2LB.pdf' }
  ];

  const data = (type === 'c') ? certs : projects;
  const idx = Math.min(Math.max(n, 1), data.length) - 1;
  const current = data[idx];

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function setBtn(id, href, download=false) {
    const el = document.getElementById(id);
    if (!el) return;
    if (href) {
      el.href = href;
      if (download) el.setAttribute('download','');
      el.classList.remove('disabled');
    } else {
      el.href = '#';
      el.removeAttribute('download');
      el.classList.add('disabled');
    }
  }

  setText('projectTitle', current.name);
  setText('thumbTitle', current.name);
  setText('infoName', current.name);
  setText('infoDetails', current.summary || ((type === 'c') ? 'Certificaat' : 'Project'));

  setBtn('demoBtn', current.file || '', !!current.file);
  const ul = document.getElementById('relatedList');
  if (ul) {
    ul.innerHTML = '';
    const list = data;
    list.forEach((item, i) => {
      if (i === idx) return;
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      const a = document.createElement('a');
      a.href = 'naam.html?type=' + (type === 'c' ? 'c' : 'p') + '&n=' + (i+1);
      a.textContent = item.name + (type === 'c' ? '' : ' — Details: Les ' + (i+1));
      li.appendChild(a);
      ul.appendChild(li);
    });
  }
})();

