let title = window.document.querySelector("#description");
let txt = "Please fill out for our survey";
let speed = 30;
let i = 0;

function descEffectAppear() {
  if (i < txt.length) {
    window.document.querySelector("#description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(descEffectAppear, speed);
  }
}
