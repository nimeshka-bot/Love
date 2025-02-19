const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// 1) "No" Button moves away on mouseover
noBtn.addEventListener("mouseover", () => {
  const newX = Math.random() * (window.innerWidth - 100);
  const newY = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// 2) "Yes" Button Click -> Fade out & Redirect to page2.html
yesBtn.addEventListener("click", () => {
  // Optional: show a quick "I love you too" before redirect
  message.innerHTML = "I love you too! ❤️";
  message.style.opacity = "1";

  // Add fade-out class to .container
  document.querySelector(".container").classList.add("fade-out");

  // After fade-out animation ends (~1s), redirect
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 1000);
});
