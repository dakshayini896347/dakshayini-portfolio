  // Theme toggle with persistence
  const root = document.documentElement;
  const saved = localStorage.getItem("portfolio-theme");
  if (saved) root.setAttribute("data-theme", saved);
  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const miOpen = menuBtn.querySelector(".mi-open");
  const miClose = menuBtn.querySelector(".mi-close");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    miOpen.style.display = open ? "none" : "";
    miClose.style.display = open ? "" : "none";
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    miOpen.style.display = ""; miClose.style.display = "none";
  }));

  // Staggered fade-up on load (always settles — content never stays hidden)
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.animationDelay = (i % 4) * 60 + "ms";
  });

  document.getElementById("year").textContent = new Date().getFullYear();
