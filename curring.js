// normal function

function add(a, b, c){
    return a + b + c
};


// curring function

function curring(a){
    return function(b){
        return function(c){
            return a+ b+ c;
        };
    };
};

const result = curring(5)(10)(15);
console.log(result)