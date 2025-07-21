
let phrases = [
  "نورت نادي الألعاب يا سبع",
  "إلعب براحتك ✨",
  "مالك يا نونو؟ خايف ليه؟ مش بيعض 😂",
  "براحة عليا يا نجم، هولع منك يا جامد🔥",
  "أيوه يا عبده ☕"
];
let phraseIndex = 0;

function playVoice(text) {
  let utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ar-EG';
  utter.pitch = 1.2;
  utter.rate = 1;
  speechSynthesis.speak(utter);
}

function cyclePhrases() {
  playVoice(phrases[phraseIndex]);
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(() => {
  cyclePhrases();
}, 120000); // كل دقيقتين

function startLudo() {
  playVoice("يلا بينا نبدأ ليدو! 🟡🔴");
}

function startDomino() {
  playVoice("دومينو يا معلم! 🁢🁤");
}

window.onload = () => {
  playVoice("نورت نادي الألعاب يا سبع");
};
