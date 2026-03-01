const img = document.getElementById("mainImage");
let activated = false;

// создаём аудио прямо в JS, встроенное
const music = new Audio("data:audio/mp3;base64,//UklGRiYAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQAAAAA=");
// ↑ это очень маленькая заглушка, но ты можешь вставить сюда любую музыку в формате base64

img.addEventListener("click", () => {
  if (activated) return;
  activated = true;

  img.src = "ace2.png";

  // включаем музыку
  music.volume = 0.7;
  music.currentTime = 0;
  music.play().catch(err => console.log("Ошибка воспроизведения:", err));

  launchConfetti();
  startFireworks();
  startHearts();
});

/* 🎊 Конфетти */
function launchConfetti() {
  for (let i=0;i<150;i++){
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random()*100+"vw";
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration = 2 + Math.random()*3 + "s";
    document.body.appendChild(confetti);
    setTimeout(()=>confetti.remove(),5000);
  }
}

/* 🎆 Салют */
function startFireworks(){
  setInterval(()=>{
    for(let i=0;i<30;i++){
      const spark = document.createElement("div");
      spark.classList.add("spark");
      const x = 20+Math.random()*60;
      const y = 10+Math.random()*40;
      spark.style.left = x+"vw";
      spark.style.top = y+"vh";
      spark.style.background = randomColor();
      document.body.appendChild(spark);
      setTimeout(()=>spark.remove(),1000);
    }
  },700);
}

/* 💖 Сердечки */
function startHearts(){
  setInterval(()=>{
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random()*100+"vw";
    heart.style.animationDuration = 3+Math.random()*3+"s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  },300);
}

function randomColor(){
  const colors = ["#ff4d6d","#ffd166","#06d6a0","#4d96ff","#c77dff"];
  return colors[Math.floor(Math.random()*colors.length)];
}