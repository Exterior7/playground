const arr = ['alma', 'banán', 'citrom', 'mangó'];
 console.log(arr.filter(item => item.indexOf('a') !== -1));

 const falsy = [false, 0, undefined, '', null, NaN];
 for (let i = 0; i < falsy.length; i+= 1) {
     if (!falsy[i]) {
         console.log('false', falsy[i]);
     }
 }
console.log('***************************************');

 function customFilter(char, ...arrays) {
    const concatedArray = arrays.flat();
    return concatedArray 
    .flat()
    .filter(((item, index) => concatedArray.indexOf(item) === index))
    .filter(item => item.indexOf(char) === -1)
    .map(item => item.trimEnd())
  
}
console.log(customFilter('a', ['asd', 'b', 'asd    ', 'b', 'fgfg    '], ['dsafsdf    ', 'vmi']));