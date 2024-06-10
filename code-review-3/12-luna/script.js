const cardNumber = '4561-1213-4367-2612';
function moonAlgorithm(num) {
   let sum = 0;
   const arr = [];
   num = num.toString().trim().replaceAll('-', '');
   for (let i = 0; i < num.length; i++) {
      if (i % 2 == 0) {
         const even = parseInt(num[i] * 2);
         if (even > 9) {
            arr.push(even - 9);
         } else {
            arr.push(even);
         }
      } else {
         const odd = parseInt(num[i]);
         arr.push(odd);
      }
      sum += arr[i];
   }
   return sum % 10 == 0 ? true : false;
}
console.log(moonAlgorithm(cardNumber));
