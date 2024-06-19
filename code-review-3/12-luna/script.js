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

// Вариант решения:

// function cardLunaValidate(card) {
//    const cardNumber = card
//        .replaceAll('-', '')
//        .split('')
//        .map((x) => Number(x));
//    if (cardNumber.includes(NaN)) {
//        return NaN;
//    }
//    const isEven = (cardNumber.length - 1) % 2 === 0;

//    for (let i = Number(isEven); i < cardNumber.length; i = i + 2) {
//        cardNumber[i] =
//            cardNumber[i] * 2 > 9 ? cardNumber[i] * 2 - 9 : cardNumber[i] * 2;
//    }
//    const sum = cardNumber.reduce((total, el) => total + el);
//    return sum % 10 === 0;
// }
// const card = '234s834503458353';
// const card1 = '2342834503458353';
// const card2 = '4561-2612-1234-5464';
// const card3 = '4561-2612-1534-5464';

// function resultTemplate(card) {
//    const startString = `Карта с номером: ${card}`;
//    const endString = `получила результат: ${cardLunaValidate(card)}`;
//    return `${startString} ${endString}`;
// }
// console.log(resultTemplate(card));
// console.log(resultTemplate(card1));
// console.log(resultTemplate(card2));
// console.log(resultTemplate(card3));
