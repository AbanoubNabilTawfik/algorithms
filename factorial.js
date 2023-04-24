//fact(4)==>4*3*2*1
//fact(5)==>5*4*3*2*1

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));