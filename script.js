document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const yesSound = document.getElementById("yesSound");

    yesBtn.addEventListener("click", () => {
        yesSound.play();
        document.body.innerHTML = `
            <div class="container">
                <h1>😍 I love you too! ❤️</h1>
                <img src="https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif" class="image">
            </div>`;
    });

    noBtn.addEventListener("mouseover", () => {
        const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });
});
