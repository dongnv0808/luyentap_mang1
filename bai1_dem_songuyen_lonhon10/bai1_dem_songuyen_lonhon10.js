let arr = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
    let count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= 10){
            count += 1;
        }
    }
    document.write(`Co ${count} so trong mang`);