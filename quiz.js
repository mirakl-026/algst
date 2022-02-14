// console.log(null == undefined);

// a = null + undefined;
// console.log(a); // NaN, 'use strict' - error

// console.log(0 || "" || 2 || undefined || true || falsе);
// || - в куче || - находит первое истинное и возвращает его
// && - в куче && - находит первое ложное и возвращает его

// let arr1 = new Array(1, 2);
// let arr2 = new Array(3); // в конструктор 1 (один) аргумент - длина массива
// console.log(arr1[0] + arr2[0]);

// >>> - unsigned shift - если после сдвига - переполнение, вернёт огромное положительное, а не отрицателньое


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof
// function F() { 
//     console.log(F);
//     console.log(typeof F);
//     return F;
// }
// let result = new F();

// console.log(typeof F);  // function
// console.log(Object.getPrototypeOf(result)); // {}
// console.log(typeof new F());    // function
// console.log( new F() instanceof F );  // false
// console.log( new F() instanceof Function );   // true
// console.log( result instanceof F );  // false
// console.log( result instanceof Function );   // true

// let obj = {'1': 0, 1: 1, 0: 2}; // будет подмена - '1': 0 - исчезнет
// console.log(obj);
// console.log(obj['1']);


// function User() { }
// User.prototype = { admin: false };
// let user = new User();  // объект был создан до изменения прототипа
// User.prototype = { admin: true };
// console.log(user.admin);

//console.log([].push(1,2).unshift(3).join());    // возвращает длину так-то, поэтому unshift у длины нет



// let f = function(x) {
//     console.log(x);
// }

// // function f (x) {     // так работает
// //     console.log(x);
// // }
  
// //f(2); // если вызвать перед IIFE, то всё сработает - и 1 и 2

// (function() {
//     f(1)     // жалуется, что f вызывается до присвоения ей значения
// }())     // странно это всё, 


// console.log(null + {0:1}[0] + [,[1],][1][0]);    // 0 + 1 + 1

// let y = 1;
// let x = y = 2;
// console.log(x); // 2

//let arr = [10,40,20,50];
//console.log(Math.max(...arr)); 

//let a = [1,2,3];
//let b = [1,2,3];
//console.log(a == b);

// let arr2 = [1,2,3];
// arr2.something = 5;

// console.log(arr2.something);

// let user = {
//     sayHi: function () {        // глобальный контекст
//       console.log(this);
//     }
// };
  
// (user.sayBye = user.sayHi)();

// user.sayHi();

// console.log(user);

//console.log((() => 5)());

// for(var i=0; i<10; i++) {
//     console.log(i);
// }
// console.log(i);