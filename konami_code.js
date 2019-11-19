const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.addEventListener('keydown', lookForCode);

  let i = 0;

  function lookForCode(e) {
    if (e.key == codes[i]) {
      i++;
    } else {
      i = 0;
    }
    if (i == codes.length) {
      console.log('Done!')
      alert("Done!");
      i = 0;
    }
  }
}