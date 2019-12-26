const t = [
  'Roman Bilynskyy'
];

function typeText(){
  let line = 0;
  let count = 0;
  let out = '';
  function typeLine() {
    let interval = setTimeout(
      () => {
        out += t[line][count]
        document.querySelector('.out').innerHTML =out +'|';

      count++;
      
      if (count >= t[line].length) {
        count = 0;
        line++;
        if (line == t.length) {
          clearTimeout(interval);
           document.querySelector('.out').innerHTML =out;
          return true;
        }
      }
      typeLine();
    }, 200)
  }
  typeLine();
}
typeText();