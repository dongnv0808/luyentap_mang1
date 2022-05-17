let arr = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
document.write(arr);
let max = arr[0];
let viTri;

for(i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        viTri = i;
    }
}
document.write(`<br>${max} la so lon nhat trong day o vi tri ${viTri} trong day`);