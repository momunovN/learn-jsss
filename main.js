// console.log("Hello world")

// let mess = document.getElementById("myId").innerText = "Я JavaScript"   1

// let name = "Иван"

// let admin = name;

// alert(admin)

// const promptName = alert(prompt("Как вас зовут?"))

// let a =1, b = 1;

// let c = ++a; // 2
// let d = b ++; // 1

// console.log(c, d)   3

// let a1 = 2;
// let x1 = 1 + (a1 *= 2) // 3

// let a2 = prompt("Первое число?", 1);
// let b2 = prompt("Второе число?", 2);
// alert(a2++ + b2++); // 3                   4

// 7 > 5
// "стол" > "стул"
// "4" > "52"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"             5

// let offNameJs = prompt("„Какое «официальное» название JavaScript?“")
// if(offNameJs == "ECMAScript"){
//     alert("Верно!")
// }else{
//     alert("«Не знаете? ECMAScript!")
// }            6

// let num = prompt("Введи число")

// if(num > 0 ){
//     alert("1")

// }else if(num < 0){
//     alert("-1")
// }else if(num == 0){
//     alert("0")
// }          7

// let a = prompt("Введи число");
// let b = prompt("Введи число");
// let result = (a++ + b++) < 4 ? "Мало" :"Много";
// alert(result);            8

// let jobTitle = prompt("Введите свою должность");
 
// let title =
//   jobTitle == "Сотрудник"
//     ? "Привет"
//     : jobTitle == "Директор"
//     ? "Здравствуйте"
//     : (jobTitle = "")? "Нет логина" : "Введите соответствующую должность ";

// alert(title)              9

// alert(null || 4 || undefined) //4             10

// alert( 1 && null && 2 ); // NULL

// alert( alert(1) && alert(2) ); // 1 И UND

// let age = prompt("Введите возраст");

// if(age >= 14 && age <= 90 ){
//     alert("ваш возраст входит в диапозон")

// }else{
//     alert("Не входит")

// }

// let age = prompt("Введите возраст")

// if(age != 17 && age <= 17 || age != 99 && age >= 99){
//     alert("Возраст не входит")
// }else{
//     alert("Входит")
// }

// if (-1 || 0) {
//   alert("first");
// }  //-1

// if (-1 && 0) {
//   alert("second");
//   }   //0

// if (null || (-1 && 1)) {
//   alert("third");
// } //-1

// let prompT = prompt("Кто там?")

// if(prompT == "Админ"){
//     let pass =  prompt("Введите пароль")
//     if(pass == "Я главный"){
//         alert("Здравствуйте!")
//     }else if(pass == null || pass == ''){
//         alert("Отменено")
//     }else{
//         alert("Неверный пароль")
//     }
// }else if(prompT == null || prompT == ''){
//     alert("Отменено")

// }else{
//     alert("я вас не зная")

// }
