function cryptoPassword(word) {
   let res = '';
   for (let i = 0; i < word.length; i += 2) {
      res += word[i + 1] + word[i];
   }
   return res;
}
console.log(cryptoPassword('pasSworD')); // apSsowDr

function checkPassword(modifiedWord, initialWord) {
   // Проверка на "не пустые" пароли
   if (!modifiedWord || !initialWord) {
      return false;
   }

   return initialWord === cryptoPassword(modifiedWord); // true
}

console.log(checkPassword('apSsowDr', 'pasSworD'));
