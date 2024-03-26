const result = prompt('Choose your language: en, ru, geo, fr');
switch (result) {
   case 'en':
      console.log('Hello!');
      break;
   case 'ru':
      console.log('Здравствуйте!');
      break;
   case 'geo':
      console.log('გამარჯობა!');
      break;
   case 'fr':
      console.log('Bonjour!');
      break;
   default:
      console.log('Please, choose your language again.');
}
