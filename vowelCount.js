// const words = ['apple', 'CYCLONE', 'peninsula', 'BROWNIES'];
// const vowels = 'aeiou';


// words.forEach(function(word){
//     const lower =word.toLowerCase();
//     console.log(lower);

// });
function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
}