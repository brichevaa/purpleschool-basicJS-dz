function cryptoPassword(word) {
   let res = '';
   for (let i = 0; i < word.length; i += 2) {
      res += word[i + 1] + word[i];
   }
   return res;
}
console.log(cryptoPassword('password'));

function checkPassword(modifiedWord, initialWord) {
   let result = '';
   for (let i = 0; i < modifiedWord.length; i += 2) {
      result += modifiedWord[i + 1] + modifiedWord[i];
   }
   if (result === initialWord) {
      return true;
   } else {
      return false;
   }
}

console.log(checkPassword('apssowdr', 'password'));
