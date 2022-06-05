const arr = [1,2,3,4,5];

// const newArr = arr.map(function(arr){
//     return arr * 5;
// });

// console.log(newArr);


//implement Our Map

function ourMap(arr, cb){
    const newArr = [];

    for(let i = 0; i< arr.length; i++ ){
        let temp = cb(arr[i], i, arr);
        newArr.push(temp);
    }
    return newArr;
}

const arr2 = ourMap(arr, function(value){
    return value * 10;
});


console.log(arr2);