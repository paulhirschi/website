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

// document.getElementById('moon').onclick = function() {
//   console.log('dark');
//   addCss('css/dark.css');
// };

// document.getElementById('sun').onclick = function() {
//   console.log('light');
//   addCss('css/light.css');
// };

// addCss(file);
