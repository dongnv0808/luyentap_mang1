let arr = [];
function nhapMang(){
    let num = document.getElementById('num').value;
    arr.push(num);
    console.log(arr);
}
function daoNguoc(){
    let firstNum = 0;
    let lastNum = arr.length-1;
    while(firstNum < lastNum){
        let conv = arr[firstNum];
        arr[firstNum] = arr[lastNum];
        arr[lastNum] = conv;
        firstNum++;
        lastNum--
    }
    console.log(arr);
}