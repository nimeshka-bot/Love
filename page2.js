const heartsContainer = document.getElementById("heartsContainer");

// Function to create a heart div and animate it
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  // Random horizontal position
  heart.style.left = Math.random() * 100 + "%";

  // Random animation duration
  const duration = 3 + Math.random() * 5; // 3s - 8s
  heart.style.animationDuration = duration + "s";

  // Append heart to container
  heartsContainer.appendChild(heart);

  // Remove heart from DOM after animation ends
  setTimeout(() => {
    heartsContainer.removeChild(heart);
  }, duration * 1000);
}

// Create hearts every 600ms
setInterval(createHeart, 600);
