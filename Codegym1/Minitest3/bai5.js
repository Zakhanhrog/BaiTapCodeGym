

function isPrime(a) {
        if (a < 2) {
           return false;
        } else if (a < 4) {
            return true;
        } else {
            for (let j = 2; j <= Math.sqrt(a); j++) {
                if (a % j == 0) {
                    return false
                }
            }
        }
        return true
}
function sumisPrime() {
    let sum = 0;
    let arrchek  = [1, 2, 4, 13, 5, 6, 7, 8, 9];
    for (let i = 0; i < arrchek.length; i++) {
        if (isPrime(arrchek[i])) {
            sum += arrchek[i];
        }
    }
    return sum;
}
result = sumisPrime();
console.log(result);