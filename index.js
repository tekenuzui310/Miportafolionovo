const themes = ["", "light", "neon"];
const icons = ["🌙", "🌞", "⚡"];

const toggle = document.getElementById("theme-toggle");

let index = 0;

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    index = themes.indexOf(savedTheme);
    document.body.className = savedTheme;
}

toggle.textContent = icons[index];

toggle.addEventListener("click", () => {
    index = (index + 1) % themes.length;
    document.body.className = themes[index];
    toggle.textContent = icons[index];
    localStorage.setItem("theme", themes[index]);
});
