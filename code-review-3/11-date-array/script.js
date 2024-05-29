const array = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '0.13.22', '41.12'];
function getDate(arr) {
   const newArr = [];
   const filteredArr = [];
   arr.map((el) => {
      if (el.length > 9) {
         newArr.push(el);
      }
   });
   console.log(newArr);
   newArr.map((elem) => filteredArr.push(elem.split('/').join('-')));
   const newArr2 = filteredArr.map((el) => {
      const a = el.split('-')[0];
      console.log(a);

      if (a > 0 && a <= 31) {
         return el;
      }
   });
   console.log(newArr2);
   const result = newArr2.sort();
   console.log(result);
}
getDate(array);
