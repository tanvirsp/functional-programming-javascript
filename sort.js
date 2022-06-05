const roll =[5,-2, 7,1,-5,2,41,66,-7,0];

roll.sort((a,b)=>{
    if(a > b){
        return -1
    } else if (a<b) {
        return 1
    }else {
        return 0
    }
})

// console.log(roll);


//sorting in Object

const students = [
    {
        name: "A",
        roll: 12,
        age: 13
    },
    {
        name: "B",
        roll: 8,
        age: 13
    },
    {
        name: "C",
        roll: 1,
        age: 13
    },
    {
        name: "C",
        roll: 5,
        age: 13
    }
];

students.sort( function(a, b){
    if(a.roll > b.roll){
        return 1;
    } else if (a.roll < b.roll){
        return -1;
    } else {
        return 0;
    }
})


console.log(students);