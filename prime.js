//isPrime(5)===> 5*1 - 1*5
//isPrime(4)===>4*1 -1*4 -2*2

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(5));
console.log(isPrime(4));