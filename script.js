document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const yesSound = document.getElementById("yesSound");
  const overlay = document.getElementById("transitionOverlay");

  // "No" button moves away on mouseover
  noBtn.addEventListener("mouseover", () => {
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });

  // "Yes" button: play sound, show overlay with GIF, then hard transition
  yesBtn.addEventListener("click", () => {
    yesSound.play();

    // Show the overlay with GIF
    overlay.classList.add("show");

    // After 3 seconds (adjust delay as needed), redirect to page2.html
    setTimeout(() => {
      window.location.href = "page2.html";
    }, 3000);
  });
});
