//задание №5

let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(arr.length);

arr.forEach(function (item, index, array) {
    console.log(item)
});

//либо циклом

let index;
for (index = 0; index < arr.length; ++index) {
    console.log(arr[index]);
}