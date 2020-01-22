
linearSearch([8,2,6,3,5], 5);
function linearSearch(arrayList,targetValue ) {
    for(i = 0;i < arrayList.length;i++ ) {
        if(arrayList[i] === targetValue){
            console.log(i);
        }else{
            console.log(-1);
        }
    }
}