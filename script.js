const text = "Hi, I'm Surya 👋";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.textContent = "Please fill all fields";
  } else {
    msg.style.color = "green";
    msg.textContent = "Message sent successfully ";
    form.reset();
  }
});
