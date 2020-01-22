var values = [3,4,6,2,3,645,2,3,6,83,23,13];
var sorted = values.sort((a,b) => a-b);
console.log(sorted);
var target = 83;
var result = binarySearch(sorted, target);

console.log(result);


function binarySearch(arrayList, targetValue) {
    var high = arrayList.length - 1; // Get index of the last element
    var low = 0;
    var mid = 0; // this will hold the index of middle elements


    while (low <=  high) {
        mid = Math.floor((high + low) / 2);
        if (arrayList[mid] === targetValue) {
            return arrayList[mid];
        } else if (targetValue > arrayList[mid]) {
            //Move the low up one
           low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}