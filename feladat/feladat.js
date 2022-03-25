// // Egy függvény, ami paraméterként kapott tetszőleges darabszámú, tetszőleges méretű egész számot 
// // összead, és visszatér az összeadás végeredményével. Ha a paraméter értéke, vagy részösszege 
// // meghaladja a biztonságos tartományt, konvertálódjanak bigInt-be és így számoljunk tovább
// const firstLesson = (...numbers) => {
//     let sum = 0;
//     let big = false;
//     for (let i = 0; i < numbers.length; i += 1) {
//         big = !Number.isSafeInteger(numbers[i]) || !Number.isSafeInteger(sum); 
//         sum = big ? BigInt(sum) : sum;
//         sum += big ? BigInt(numbers[i])  : sum += numbers[i];
//     }
//     // console.log(typeof sum, sum, big);
//     return sum;
// }
// console.log(firstLesson(0, 0, 10));

//  firstLesson(12021123, 2342342343242342342342341244, 24234234234342342342342342342342342342);

const firstLession = (...numbers) => {
    let sum=0;
    numbers.map(element => {
        if(Number.isSafeInteger(element)){
            console.log('Safe number');
            return sum += element;
        } else {
            sum = BigInt(sum);
            element = BigInt(element);
            return sum += element;
        }
    });
    console.log(typeof sum, sum);
 
}


firstLession(1111111111111111111111111111111111111111111111111111111111111111111110, 1111111111111111111111111111111111111111111111111111111111111111111110);