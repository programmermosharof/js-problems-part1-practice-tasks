
function countNumber(arr , target){

    let count = 0; 
    for (let i = 0 ; i < arr.length; i++){
        if(arr[i]=== target)
            count++;
    }
   
    return count;
}
console.log(countNumber([1, 2, 3, 4, 3, ],3));

function countName(name , num){
    let all = 0;

    for(let j = 0; j < name.length; j++){
        if(name[j] === num)
        all++;
    }
    return all;
}
console.log(countName(["mahin","Mosharof", "mahin", "mahin"], "mahin"));