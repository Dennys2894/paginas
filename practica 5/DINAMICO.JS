window.addEventListener("DOMContentLoaded", function() {
    fetch("DINAMICO.json")
      .then(response => response.json())
      .then(data => {
        const menu = document.getElementById("menu");
        data.items.forEach(item => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.textContent = item.label;
          a.href = item.url;
          li.appendChild(a);
          menu.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Error al cargar el menú:", error);
      });
  });
  