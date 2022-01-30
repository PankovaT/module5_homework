// Задание №6

let arr = [1, 2, 3, 5, 6, 7, 8, 9, "Ла-Ла-Ленд", 10];
console.log(arr);

let arrTypes = arr.every(function checkType(val) {
    if (val == arr[0]) {
        return true;
    } else {
        return false;
    }
});
console.log(arrTypes);

let arrSecond = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(arrSecond);

let arrTypesSecond = arrSecond.every(function checkType(elem) {
    if (elem == arrSecond[0]) {
        return true;
    } else {
        return false;
    }
});
console.log(arrTypesSecond);