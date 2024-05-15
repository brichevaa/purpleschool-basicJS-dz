// функция конвертации

function converter(sum, currency, targetCurrency) {
   if (currency === 'rub') {
      switch (targetCurrency) {
         case 'usd':
            return sum / 91.36;
         case 'eur':
            return sum / 98.67;
         case 'rub':
            return 1;
         default:
            return 'Ошибка: введите доступные варианты валют';
      }
   } else if (currency === 'usd') {
      switch (targetCurrency) {
         case 'rub':
            return sum * 91.36;
         case 'eur':
            return sum * 0.9259;
         case 'usd':
            return 1;
         default:
            return 'Ошибка: введите доступные варианты валют';
      }
   } else if (currency === 'eur') {
      switch (targetCurrency) {
         case 'rub':
            return sum * 98.67;
         case 'usd':
            return sum / 0.93;
         case 'eur':
            return 1;
         default:
            return 'Ошибка: введите доступные варианты валют';
      }
   }
}
console.log(converter(100, 'eur', 'usd'));
