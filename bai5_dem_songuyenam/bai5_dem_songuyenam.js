let arr = [-1, 12, 14, -13, 15, -22, -34, 52, 53, 10];
let count = 0;
console.log(arr);
for(i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        count += 1;
    }
}
console.log(`Co ${count} so nguyen am trong chuoi`);