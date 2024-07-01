const obj = {
   search: 'Вася',
   take: 10,
   age: 35,
};

function getSearhQuery(obj) {
   let result = [];
   for (let key in obj) {
      result.push(`${key}=${obj[key]}`);
   }
   return result.join('&');
}
console.log(getSearhQuery(obj));
