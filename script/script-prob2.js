const list_num = [];
let number;
do {
    number = Number(prompt("Enter an integer (a negative integer to quit):"));
    list_num.push(number);
    if (number < 0) {
        break;
    }
} while (Number.isInteger(number) == false || number > 0) {
    var positive_num = list_num.join(",").split(",").filter(Number).filter(x => x > -1);
}
let displayStats = positive_num.length == 0 ?
    () => alert("For the list that is empty, the average is 0, the maximum is 0, and the minimum is 0"):
    () => readInput(positive_num);
displayStats();

function computeAvg(n) {
    let sum = 0;
    for (i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    let avg = sum/n.length;
    return avg.toFixed(2);
}
function readInput() {
    alert("For the list " + positive_num + " the averae is " + computeAvg(positive_num) + " the minimum is " + Math.min(...positive_num) + ", and the maximum is " + Math.max(...positive_num));
}

