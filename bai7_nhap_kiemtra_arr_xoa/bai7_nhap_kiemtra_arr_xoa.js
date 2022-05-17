let arr = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
let check = false;

function checkNum(){
    let V = +document.getElementById("num").value;
    let newArr = [];
    let result = 0;
    for(i = 0; i < arr.length; i++){
        if(V === arr[i]){
            let index = i;
            for(j = 0; j < arr.length-1; j++){
                if(index > j){
                    newArr[j] = arr[j];
                }else{
                    newArr[j] = arr[j+1];
                }
            }newArr.push(0);
        }else{
            result += 1;
        }
    }
    if(result == arr.length){
        newArr = arr;
    }
    console.log(newArr);
}
