function toggleMenu(force) {
  const navLinks = document.getElementById("navLinks");
  const menuButton = document.getElementById("menuButton");
  const shouldOpen = typeof force === "boolean" ? force : !navLinks.classList.contains("active");

  navLinks.classList.toggle("active", shouldOpen);
  menuButton.setAttribute("aria-expanded", String(shouldOpen));
}

document.getElementById("menuButton").addEventListener("click", () => toggleMenu());

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => toggleMenu(false));
});

document.getElementById("siteSearch").addEventListener("submit", function (event) {
  event.preventDefault();

  const query = document.getElementById("searchInput").value.trim().toLowerCase();

  if (!query) {
    document.getElementById("opportunities").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const matches = [...document.querySelectorAll(".opportunity-card, .service-card, .resource-card")]
    .filter(card => card.textContent.toLowerCase().includes(query));

  document.getElementById("opportunities").scrollIntoView({ behavior: "smooth" });

  document.querySelectorAll(".search-highlight").forEach(el => el.classList.remove("search-highlight"));

  matches.forEach(card => {
    card.classList.add("search-highlight");
    setTimeout(() => card.classList.remove("search-highlight"), 2200);
  });

  if (!matches.length) {
    alert("We couldn't find a matching section yet. Try searching for admissions, scholarships, JAMB, registration, CBT or grants.");
  }
});
