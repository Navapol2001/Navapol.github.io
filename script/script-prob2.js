const n = [];
let num;
let avg;
do {
    num = Number(prompt("Enter an integer (a negative integer to quit):"));
    n.push(num);
    if (num < 0) {
        break;
    }
} while (Number.isInteger(num) == false || num > 0) {
    var numbers = n.join(",").split(",").filter(Number).filter(x => x > -1);
}
let displayStats = numbers.length == 0 ?
    () => alert("For the list that is empty, the average is 0, the maximum is 0, and the minimum is 0"):
    () => computeAvg(numbers);
displayStats();

function computeAvg(n) {
    let sum = 0;
    for (i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    avg = sum/n.length;
    alert(avg.toFixed(2));
}
function showAns() {

    alert("For the list " + numbers + " the average is " + avg);
}

