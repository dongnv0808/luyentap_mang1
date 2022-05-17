let a = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
let b = [2, 3, 5, 21, 27, 75, 6, 17, 19, 25];
let c = [];
c = a;
//     for(i = 0; i < b.length; i++){
//         c.push(b[i]);
//     }
// console.log(c);

while(b != ""){
        c.push(b[0]);
        b.shift();
}
console.log(c)