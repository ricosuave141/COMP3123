// Aaron Shun Balayo
// ID: 101575606
// Course: COMP 3123
// Lab1

//Exercise(1)
function capitalizeWords(str) {
    return str
        .split ('')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalizeWords("the quick brown fox"));

//Exercise(2)
function max(a, b, c){
    return Math.max(a, b, c);
}

console.log(max(1,0,1));  // should get 1
console.log(max(-10,0,-20)); // most likely 0
console.log(max(440,510,1000)); // highly 1000

//Exercise(3)

function right(str) {
    if (str.length < 3) {
        return str;
    }
    const lastThree = str.slice(-3);
    const rest = str.slice(0, -3);
    return lastThree + rest;
}

console.log(right("Python")); // will give honPyt
console.log(right("Javascript")); // iptJavaScr
console.log(right("Hi")); // Hi <- only 2 letters

//Exercise(4)

function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute Angle";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse Angle";
    } else if (angle === 180) {
        return "Straight Angle";
        }
    return "Invalid Angle type";
}

console.log(angle_Type(47)); //gives acute angle
console.log(angle_Type(90)); //gives right angle
console.log(angle_Type(145)); //gives obtuse angle
console.log(angle_Type(180)); //gives straight angle

//Exercise (5)

function array_max_sum(arr, k) {
    if (arr.length < k) return 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];   // currentSum summing first k elements
    }

let maxSum = currentSum;

for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
}

return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14 , 5], 2)); // output will be 19
console.log(array_max_sum([2, 3, 5, 1 , 6], 3)); // output will be 12
console.log(array_max_sum([9, 3, 5, 1 , 7], 2)); // output is 12

