(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));

  // Auto-rotating service carousel: one card every five seconds.
  const faces = [...document.querySelectorAll(".service-face")];
  const flip = document.querySelector(".service-flip");
  const indexLabel = document.getElementById("service-index");
  let current = 0, timer;
  function showService(index) {
    current = (index + faces.length) % faces.length;
    // Four faces share a 3D stage; rotate in 90-degree increments.
    flip.style.transform = `rotateY(${-current * 90}deg)`;
    indexLabel.textContent = String(current + 1).padStart(2, "0");
    faces.forEach((face, i) => {
      face.setAttribute("aria-hidden", String(i !== current));
      face.style.pointerEvents = i === current ? "auto" : "none";
    });
  }
  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(() => showService(current + 1), 5000);
  }
  document.getElementById("service-prev")?.addEventListener("click", () => { showService(current - 1); restartTimer(); });
  document.getElementById("service-next")?.addEventListener("click", () => { showService(current + 1); restartTimer(); });
  showService(0); restartTimer();

  // The existing contact form fields are retained; submit opens a prefilled email.
  document.getElementById("contact-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:zedricksalupito@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();