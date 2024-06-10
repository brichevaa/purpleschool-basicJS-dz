const array = [
   '10-02-2022',
   'тест',
   '11/12/2023',
   '00/13/2022',
   '41/12/2023',
   '0.13.22',
   '41.12',
   '10-00-2022',
   '12.13.2022',
   '00.13/2022',
];
function getDate(arr) {
   const filteredArr = arr.filter((el) => el.length == 10).map((el) => el.split('/').join('-'));
   const result = [];
   for (let i = 0; i < filteredArr.length; i++) {
      const parts = filteredArr[i].split('-');

      if (
         parts[0] > 0 &&
         parts[0] <= 31 &&
         parts[0].length === 2 &&
         parts[1].length === 2 &&
         parts[1] <= 12 &&
         parts[1] > 0 &&
         parts[2].length === 4
      ) {
         result.push(filteredArr[i]);
      }
   }
   return result;
}
console.log(getDate(array));
