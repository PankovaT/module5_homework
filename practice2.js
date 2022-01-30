//задание №2
let x = prompt("input");

x = +x;
console.log("X — число");

x = "123";
console.log("X — строка");

if (x > 0) {
    console.log(true);
}
else if (x < 0) {
    console.log(false);
}

else {
    console.log("Тип Х не определен");
}
