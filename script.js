fetch("events.json")
  .then((response) => response.json())
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  });
    Python: '#3572A5',
    HTML: '#e34c26',
    Shell: '#89e051'
  };

  return colors[language] || '#8b949e';
}
