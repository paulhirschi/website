
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
