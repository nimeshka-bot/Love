document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const yesSound = document.getElementById("yesSound");
  const overlay = document.getElementById("transitionOverlay");

  // Function to move the "No" button
  function moveNoButton() {
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }

  // Add events for both desktop and mobile for "No" button
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("touchstart", moveNoButton);

  // "Yes" button handler function
  function handleYes() {
    // Play sound (triggered by a user gesture)
    yesSound.play();
    // Show the full-screen overlay with GIF animation
    overlay.classList.add("show");
    // After a delay, perform a hard transition to the second page
    setTimeout(() => {
      window.location.href = "page2.html";
    }, 3000);
  }

  // Add events for both desktop and mobile for "Yes" button
  yesBtn.addEventListener("click", handleYes);
  yesBtn.addEventListener("touchstart", handleYes);
});
