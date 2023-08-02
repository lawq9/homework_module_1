// let $num = 1;
// let $str = "0";
// let $bool =false;
// let $null = null;
// let $undef;

// let $toNumb = Number($str);
// console.log($toNumb);
// let $toStr = String($bool);
// console.log($toStr);
// let $toBool = Boolean($undef);
// console.log($toBool);

 const person = { firstName: "Laura", lastName: "Baizakova"};
const $cars = [ "Saab", "Volvo", "BMW"];
// console.log($cars);
// $cars.push("Audi");
// console.log ($cars);

// console.log (typeof undefined);
// console.log (typeof 0);
// console.log (typeof 10n);
// console.log (typeof true);
// console.log (typeof person);
//  let isChild = true;
// let $age = 70;
// if ($age < 18) {
//     alert("Вам повезло, вы еще ребенок!!!");
// } else if (18 <= $age && $age < 65) {
//     alert('Вам еще работать и работать!!!');
// } else {
//     alert("Вы уже пенсионер!");
// }
// let x = prompt("Введите число");
// let $res = (x>5) ? true : false;
// console.log($res);
// let $date = 5;
// let $day;

// switch ($date) {
// case 1: 
// day = "Понедельник";
// break;
// case 2: 
// day = "Вторник";
// break;
// case 3: 
// day = "Среда";
// break;
// case 4: 
// day = "Четверг";
// break;
// case 5: 
// day = "Пятница";
// break;
// case 6: 
// day = "Суббота";
// break;
// case 7: 
// day = "Воскресенье";
// break;
// }
// console.log(day)
// let i;
// for(i = 0; i < 15; i++){
// console.log('Loop for:',i);
// }
// i = 0;
// while (i < 10) {
// console.log("Loop white:",i);
// i++;
// }
// i = 0;
// let $data = "\n";
// do{
// $data += "Число:"+ i + "\n";
// i++;
// }while (i < 10);
// console.log($data);
console.time();
let a = 1000000000000000 ** 10000000000000000000000000000000
for(let i; i<a;i++){
console.log ();
}
console.timeEnd();

function sum(a,b){
let res = a+b;
return res;
}
console.log (sum (15, 20));



