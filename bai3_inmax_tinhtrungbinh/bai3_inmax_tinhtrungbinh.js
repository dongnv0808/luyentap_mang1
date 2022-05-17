let arr = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
let max = arr[0];
let tb = 0;

for(i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
    tb += arr[i];
}
document.write(`So lon nhat trong day la ${max}<br>`);
document.write(`So trung binh trung day: ${tb}`);