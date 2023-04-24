function recursionFibonacci(n) {
    if (n < 2) {
        return n;
    }

    return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}


console.log(recursionFibonacci(0)) //0
console.log(recursionFibonacci(1)) //1
console.log(recursionFibonacci(6))//8