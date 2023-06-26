//Actually, no need annotaion type. -> type inference
//then why annotaion need?
/** Number */
//const apples: number = 5;
const apples = 5; // type inferences
// const apples: number = true; //Type Error!
// apples = 10; immutable
let bananas: number = 10;
bananas = 12;

/** string */
let speed :  string = "very fast";
console.log(speed[3]);



/** boolean */
let hasName : boolean = true;
//let hasName2 : boolean = "true";

/** null */
let nothing: null = null;
let nothing2: undefined = undefined; //like void *?

/** built-in object */
let now: Date = new Date();

/** Array */
let colors : string[] = ["red", "green", "blue"];
colors[0] = "new color";

let arr: number[] = [0, 1, 2, 3];
arr[0] = 100;

/** Ojbect */

let point: {x : number; y: number} = {
	//x: "string",
	x: 10,
	y: 20,
	//a: 30
};

/** function, input argument type, return type */
const logNumber:(i : number) => void = (i : number) =>{
	console.log(i + 3);
}

/** type inference */
let anyType;
anyType = 5;
anyType // => says any type
anyType = "5";

/** when to use Annotations */
// When to use annotations
//
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
//JSON.parse return any type so we need annotations
//const coordinates = JSON.parse(json);
//coordinates.asldkjfasdlfk;
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};


// 2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
//let foundWord; -> no annotation. dunno what type it is
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
/** null */

/** null */

/** null */
