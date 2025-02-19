const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const circleOverlay = document.getElementById("circleOverlay");

// "No" Button - Move away on mouseover
noBtn.addEventListener("mouseover", () => {
  const newX = Math.random() * (window.innerWidth - 100);
  const newY = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// "Yes" Button - Show message + Circle Overlay Expand + Redirect
yesBtn.addEventListener("click", () => {
  // Optional immediate message
  message.innerHTML = "I love you too! ❤️";
  message.style.opacity = "1";

  // Trigger circle expand animation
  circleOverlay.classList.add("expand");

  // Wait until circle covers screen (~1s), then redirect
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 1000);
});
