// function add(a, b) {
//     return a + b;
//   }


// alert(add(1,2))


// function sub(a, b){
//     return a - b;
// }

// alert(sub(1,2))


// function exp(a, b){
//     return a * b;
// }

// alert(exp(1,2))



// function div(a, b){
//     if(b === 0){
//         alert("На ноль делить нельзя")
//     }
//     return a / b;
// }

// alert(div(1,2))









// ---------------

// Напишите функцию расчета длины строки используя метод  `.length`

// function StringLength(str) {
//     return str.length;
//   }
// alert(StringLength(prompt() ))




// -------------------
// Используя конструкцию if..else,
// напишите код, который проверяет, является ли число положительным, отрицательным или нулем.




// let num = prompt("Введите число")

// if(num > 0){
//     alert("Число положительный")
// }else if(num < 0){
//     alert("Число отрицательный")
// }else if (num = 0){
//     alert("число 0")
// }else {
//     alert("Введи число дебил")
// }






// ------------------
//Напишите функцию расчета среднего арифметического
// function calculateAverage(arr) {
//     if (!Array.isArray(arr)) {
//       throw new Error("Аргумент должен быть массивом");
//     }
  
//     const sum = arr.reduce((acc, current) => acc + current, 0);
//     return sum / arr.length;

//   }


// alert(calculateAverage([1,2,3,4]))


// -------------------

//Напишите код,
// который создает объект с двумя свойствами: `name` и `age`,
// и затем выводит значения этих свойств в консоль




// let user = {
//     name: "Nurik ",
//     age: 18
// }

// alert(user.name)
// alert(user.age)
// alert(user.name + user.age)


//------------------

//Напишите код, который проверяет четность чисел.

// let num = prompt("Введите число")
// if(num % 2 == 0 || num == 0){
//     alert("Число четное")
// }else{
//     alert("Число не четное")
// }




//----------------


//Дано число. Проверьте, отрицательное оно или нет.
// Выведите об этом информацию в консоль



// function isDiv(a, b) {
//     if (b === 0) {
//       (alert("Делить на ноль нельзя!"));
//     }
//     return a % b === 0;
//   }

//   if (isDiv(10, 0)) {
//     alert("10 делится на 2 без остатка");
//   } else {
//     alert("10 не делится на 2 без остатка");
//   }