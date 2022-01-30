// задание №1
let a = prompt("Введите число");
a = +a

if (a % 2 === 0) {
    console.log("Четное")
}


else if (a % 1 === 0) {
    console.log("Нечетное");

}
else {
    console.log("Упс, кажется вы ошиблись")
}

typeof a;

if (a > 0)
    console.log(typeof a)

else if (a < 0)
    console.log(typeof a)

else
    console.log(NaN)
