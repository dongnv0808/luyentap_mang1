function checkArr(){
    let arr = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
    let V = +document.getElementById("num").value;
    // console.log(typeof V);
    let checkNum = false;
    let i = 0;
    while(i < arr.length){
        // console.log(i);
        // console.log(arr[i]);
        if(arr[i] === V){
            checkNum = true;
            break;
        }
        i++;
    }
    if(checkNum === true){
        alert("V is in the array");
    }else{
        alert("V is not in the array");
    }
}
