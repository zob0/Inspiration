let par = document.getElementById("citat");
let sel = document.getElementsByTagName("select")[0];
let insp = [
  "Forgetfulness heals everything and song is the most beautiful manner of forgetting, for in song man feels only what he loves.",
  "When you have a dream, you've got to grab it and never let go.",
  "There is nothing impossible to they who will try.",
];
let mot = [
  "Do what you can, with what you have, where you are.",
  "It's never too late to be what you might've been.",
  "Trust yourself that you can do it and get it.",
];
let ljub = [
  "We can only learn to love by loving.",
  "Life is the flower for which love is the honey.",
  "True love stories never have endings.",
];
let ran = -1;
let last = -1;
let lastRan;
document.getElementsByTagName("button")[0].addEventListener("click", festa);
function festa() {
  lastRan = ran;
  switch (sel.selectedIndex) {
    case 0:
      ran = Math.floor(Math.random() * insp.length);
      if (last == 0) {
        while (ran == lastRan) {
          ran = Math.floor(Math.random() * insp.length);
        }
      }
      par.textContent = insp[ran];
      last = 0;
      break;
    case 1:
      ran = Math.floor(Math.random() * mot.length);
      if (last == 1) {
        while (ran == lastRan) {
          ran = Math.floor(Math.random() * mot.length);
        }
      }
      par.textContent = mot[ran];
      last = 1;
      break;
    case 2:
      ran = Math.floor(Math.random() * ljub.length);
      if (last == 2) {
        while (ran == lastRan) {
          ran = Math.floor(Math.random() * ljub.length);
        }
      }
      par.textContent = ljub[ran];
      last = 2;
      break;
    default:
      alert("greska");
      break;
  }
}
