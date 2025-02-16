// 🎵 Geluiden selecteren
const successSound = document.getElementById("success-sound");
const errorSound = document.getElementById("error-sound");
const countdownSound = document.getElementById("countdown-sound");
const revealSound = document.getElementById("reveal-sound");

const correctPassword = "dankjulliewelentotziens!";

// ⏳ Countdown instellen
let timer = 30;
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerText = `⏳ Tijd over: ${timer} seconden`;

    const interval = setInterval(() => {
        if (timer > 0) {
            countdownSound.play();  // Speel timer-geluid af
            timer--;
            countdownElement.innerText = `⏳ Tijd over: ${timer} seconden`;
        } else {
            clearInterval(interval);
            countdownElement.innerText = "⏳ Tijd is om!";
        }
    }, 1000);
}

// 🔑 Wachtwoord controleren
function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    if (input === correctPassword) {
        successSound.play();  // Speel succes-geluid af
        setTimeout(() => {
            revealSound.play();  // Speel reveal-geluid af
            document.getElementById("recipe").classList.remove("hidden");
        }, 1000);
    } else {
        errorSound.play();  // Speel error-geluid af
        alert("❌ Verkeerd wachtwoord! Probeer opnieuw.");
    }
}

// Timer starten bij het laden van de pagina
window.onload = startCountdown;

