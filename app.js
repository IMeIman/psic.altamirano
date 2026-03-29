const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = "x";
    menuBtn.setAttribute("aria-expandede", "true");
  } else {
    menuBtn.innerHTML = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_wxqpa4c";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar Email";
      alert("El formulario ha sido enviado!");
    },
    (err) => {
      btn.value = "Enviar Email";
      alert(JSON.stringify(err));
    },
  );
});
