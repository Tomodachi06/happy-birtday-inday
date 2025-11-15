//welcome
const code = document.getElementById('codeInput');
const enterCode = 'hiroshi';
const eror= document.getElementById('eror');
const errormess= "Too much character and wrong passcode!";
const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hero = document.querySelector('.hero');
btn.addEventListener('click', () => {
  eror.style.display = 'none';
  hero.style.display = 'block';
  code.value = '';
});

code.addEventListener('input', () => {
  const codeval = code.value; // get the current input each time

  if (codeval === enterCode) {
    document.querySelector('.enter-btn').style.display = 'block';
  } else if (codeval.length > enterCode.length && codeval !== enterCode) {
    eror.style.display = 'block';
     hero.style.display = 'none';
    document.getElementById('error-mess').innerText = errormess;
    document.querySelector('.enter-btn').style.display = 'none';
  }
});

// Show Party Room
const enterBtn = document.getElementById('enterBtn');
const partyRoom = document.getElementById('partyRoom');

enterBtn.addEventListener('click', () => {
  hero.style.display = 'none';
  partyRoom.style.display = 'block';
  audioSource.play();
});

audioSource.addEventListener('ended', () => {
  myVideo2.style.display = 'block';
  myVideo2.style.opacity = '1', 50;
  myVideo2.play();
});

myVideo2.addEventListener('ended', () => {
  myVideo2.style.display = 'none';
})

// Guestboard
const form = document.getElementById('noteForm');
const board = document.getElementById('board');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('noteName').value;
  const text = document.getElementById('noteText').value;
  const note = document.createElement('div');
  note.textContent = `${name}: ${text}`;
  board.appendChild(note);
  form.reset();
});

// Gift Modal
const modal = document.getElementById('modal');
const openGift = document.getElementById('openGift');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

openGift.addEventListener('click', () => {
  modal.style.display = 'flex';
  const messages = [
  "Ten years from now, the world will not match the picture in your head and that’s the point. Change is the only honest thing life gives us.",
  "Some days will break you a little. Some days will rebuild you quietly. Either way, you’ll walk forward, because standing still has never saved anyone.",
  "Every choice you make echoes longer than you expect. But even the wrong turns sharpen you into someone stronger than yesterday.",
  "Life won’t always be kind, but it will always be real. Face it with open eyes, not a painted smile.",
  "Good moments fade. Bad moments fade. What stays is the person you become after all of it.",
  "You can lose things, people, places but as long as you recover your sense of direction, you’re never truly lost.",
  "Tomorrow won’t promise comfort, but it will promise possibility. That’s enough to keep going.",
  "You are a story still being written, and every rough chapter pushes you toward a version of yourself you haven’t met yet.",
  "If life tests you, let it. Pressure creates shape; resistance creates character.",
  "Happy birthday another year survived, another year earned. Whatever comes, good or bad, may you rise from it with clarity, not fear."
];

  modalTitle.textContent = "Surprise Gift!";
  modalBody.textContent = messages[Math.floor(Math.random() * messages.length)];
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Balloon Easter Egg
const hiddenBalloon = document.getElementById('hiddenBalloon');
hiddenBalloon.addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    const conf = document.createElement('div');
    conf.textContent = '🎉';
    conf.style.position = 'fixed';
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.top = '-20px';
    conf.style.fontSize = '24px';
    conf.style.animation = `fall ${2 + Math.random() * 3}s linear`;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 5000);
  }
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);

// Music Toggle
let music;
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('click', () => {
  if (!music) {
    music = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_0a9d869b8a.mp3?filename=happy-birthday-113847.mp3');
    music.loop = true;
    music.play();
    musicToggle.textContent = 'Stop Music ⏹️';
  } else if (music.paused) {
    music.play();
    musicToggle.textContent = 'Stop Music ⏹️';
  } else {
    music.pause();
    musicToggle.textContent = 'Play Music ▶️';
  }
});

