//Задание №8
let food = new Map([
    ["apple", "green"],
    ["banana", "yellow"],
    ["tomato", "red"]
]);
food.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});