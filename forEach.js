const arr = [1,2,3];

// arr.forEach(function(value, index, arr){
//     console.log(value,  index, arr);
// })



//Implement For Each Function

function myForEach(arr, callBackFunction){
    for (let i = 0; i < arr.length; i++) {

        callBackFunction(arr[i], i, arr ); 
    }
}

myForEach(arr, function(value, index, arr){
    console.log(value, index, arr);
});