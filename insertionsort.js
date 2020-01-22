function insertionSort(arrayList) {
    for(var i = 1; i < arrayList.length; i++) {
        let currentValue = arrayList[i];
        //get first element of the inner loop
        let j = i -1 ;
        while(j >= 0 && arrayList[j] > currentValue) {
            arrayList[j+1] = arrayList[j];
            j--;
        }

        // We insert current value at index of 0
        arrayList[j+1] = currentValue
    }
    return arrayList;
}

var myArray = [2,0,3,4,89,0,7,9,10];
let x = insertionSort(myArray);
console.log('insertion sort', x);