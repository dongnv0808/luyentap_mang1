let arr = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
console.log(arr);
let convert;
for(i = 0; i < arr.length; i++){
    for(j = i+1; j < arr.length; j++){
        if(arr[i] < arr[j]){
            convert = arr[i];
            arr[i] = arr[j];
            arr[j] = convert;
        }
    }
}
console.log(arr);