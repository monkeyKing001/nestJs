//Actually, no need annotaion type. -> type inference
//then why annotaion need?
/** Number */
//const apples: number = 5;
var apples = 5; // type inferences
// const apples: number = true; //Type Error!
// apples = 10; immutable
var bananas = 10;
bananas = 12;
/** string */
var speed = "very fast";
console.log(speed[3]);
/** boolean */
var hasName = true;
//let hasName2 : boolean = "true";
/** null */
var nothing = null;
var nothing2 = undefined; //like void *?
/** built-in object */
var now = new Date();
/** Array */
var colors = ["red", "green", "blue"];
colors[0] = "new color";
var arr = [0, 1, 2, 3];
arr[0] = 100;
/** Ojbect */
var point = {
    //x: "string",
    x: 10,
    y: 20,
    //a: 30
};
/** funtion, input argument type, return type */
var logNumber = function (i) {
    console.log(i + 3);
};
/** type inference */
var anyType;
anyType = 5;
anyType; // => says any type
anyType = "5";
/** when to use Annotations */
//
/** null */
/** null */
/** null */
