// функция конвертации

function converter(sum, currency, targetCurrency) {
   if (currency == 'rub' && targetCurrency == 'dollar') {
      return sum / 91.78;
   } else if (currency == 'rub' && targetCurrency == 'euro') {
      return sum / 98.03;
   } else if (currency == 'rub' && targetCurrency == 'rub') {
      return sum;
   } else {
      return null;
   }
}
console.log(converter(1000, 'rub', 'dollar'));
