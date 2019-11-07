
// dynamically add stylesheet
function addCss(file) {
  var head = document.head;
  var link = document.createElement('link');

  link.rel = 'stylesheet';
  link.href = file;
  link.id = 'dynamic-sheet';

  var sheet = document.getElementById('dynamic-sheet');
  if(sheet) {
    sheet.disabled = true;
    sheet.parentNode.removeChild(sheet);
  }

  head.appendChild(link);
}

TweenMax.staggerTo('[class^="icon"]', 2, {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  x: 0,
  // x: 0,
  // rotation: 360,
  ease: Elastic.easeOut
}, 0.2);

const heart = document.querySelector(".heart-icon")
const code = document.querySelector(".the-code")
const closeCode = document.querySelector(".close-code")

heart.addEventListener("click", function(e) {
  code.style.display="flex"
})

closeCode.addEventListener("click", function(e) {
  code.style.display="none"
})

// document.getElementById('moon').onclick = function() {
//   console.log('dark');
//   addCss('css/dark.css');
// };

// document.getElementById('sun').onclick = function() {
//   console.log('light');
//   addCss('css/light.css');
// };

// addCss(file);
