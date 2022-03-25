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