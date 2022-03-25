 const arr = ['alma', 'banán', 'citrom', 'mangó'];
 console.log(arr.filter(item => item.indexOf('a') !== -1));

 const falsy = [false, 0, undefined, '', null];
 for (let i = 0; i < falsy.length; i+= 1) {
     if (!falsy[i]) {
         console.log('false', falsy[i]);
     }
 }

 let b = 5;
 if (b) {
     console.log(b);
 }

 function customFilter(char, ...arrays) {
     const concatedArray = arrays.flat();
     return concatedArray 
     .flat()
     .filter(((item, index) => concatedArray.indexOf(item) === index))
     .filter(item => item.indexOf(char) === -1)
     .map(item => item.trimEnd())
   
 }
 console.log(customFilter('a', ['asd', 'b', 'asd    ', 'b', 'fgfg    '], ['dsafsdf    ', 'vmi']));






const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // expected output: 1
// start from index 2
console.log(beasts.indexOf('bison', 2)); // expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1


const template = `
  <div class="container">
    <div class="row">
        <div class="col">
        <col>
            <p class="text">content</p>
            <p class="text">content</p>
            <p class="text">content</p>
            <p class="text">content</p>
            <p class="text">content</p>
        </div>
    </div>
</div>
  `


document.querySelector('body').insertAdjacentHTML('beforeend', template);

const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  const col = document.createElement('div');
  col.setAttribute('class', 'col');
  row.appendChild(col);
  container.appendChild(row);


 const btn = document.querySelector('.btn');
 const fn1 = () => {console.log('fn1'); }
 const fn2 = () => {console.log('fn2'); }

 let counter = 0;
 
 const customHandler = () => {
    if (counter ===0) {
        fn1();
        counter += 1; 
    }
 }
  btn.addEventListener('click', customHandler);
  btn.addEventListener('click', fn2);