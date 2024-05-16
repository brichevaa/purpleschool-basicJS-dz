function cryptoPassword(word) {
   let res = '';
   for (let i = 0; i < word.length; i += 2) {
      res += word[i + 1] + word[i];
   }
   return res;
}
console.log(cryptoPassword('pasSworD')); // apSsowDr

// Реализация через массив
// function cryptoPassword(word) {
//    let res = word.split('');
//    for (let i = 0; i < word.length; i += 2) {
//        [res[i + 1], res[i]] = [res[i], res[i + 1]];
//    }
//    return res.join('');
// }

function checkPassword(modifiedWord, initialWord) {
   // Проверка на "не пустые" пароли
   if (!modifiedWord || !initialWord) {
      return false;
   }

   return initialWord === cryptoPassword(modifiedWord); // true
}

console.log(checkPassword('apSsowDr', 'pasSworD'));
