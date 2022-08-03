/*let number = parseInt(prompt("Enter a positive integer"));
while (number < 0 || isNaN(number)) {
    number = parseInt(prompt("Enter a positive integer"));
} */
const listPrime = [];
let number;
while (true) {
    number = Number(prompt("Enter a positive integer"));
    if (Number.isInteger(number) && number > 0) {
        showPrimes(number);
        break;
    }
}    
function showPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) {
            continue;
        } else {
            listPrime.push(i);
        }
    }
    alert("For n = " + number + " prime number are " + listPrime);
    //alert("For n = " + number + " prime number are " + listPrime);
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
} 
