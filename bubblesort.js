function bubbleSort(arrayList) {
    //Loop length
    let flag = false;
    const loop  = arrayList.length;
    for(let i = 0;i < loop; i++) {
        for(let j = 0; j < loop; j++) {
            //Compare Adjacent Items
            if(arrayList[j] > arrayList[j+1]) {
                let temp = arrayList[j];
                arrayList[j] = arrayList[j+1];
                arrayList[j+1] = temp;
            }

            flag = true;
        }
        if(flag){
            break;
        }
    }
    return arrayList
}

let result = bubbleSort([14, 33, 27, 35, 10, 56, 101]);
console.log(result);