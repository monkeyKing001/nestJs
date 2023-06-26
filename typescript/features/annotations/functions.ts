//cannot use type inference for input arguments
const add = (a: number, b: number) => {
  return a + b;
};

//return value annotation
//adding return value annotation, we can detect not returning error
const subtract = (a: number, b: number): number => {
  return a - b;
};

//annotaion as 'function'
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

//do not return any type of data
const logger = (message: string): void => {
  console.log(message);
};

//throwing is not `return`
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

//struct
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

//function logWeather that input args is todaysWeather struct and output is void
const logWeather = (todaysWeatherInput: typeof todaysWeather) : void => {
		console.log(todaysWeatherInput.date);
		console.log(todaysWeatherInput.weather);
	};

//const logWeather = ({
//  date,
//  weather
//}: {
//  date: Date;
//  weather: string;
//}): void => {
//  console.log(date);
//  console.log(weather);
//};

logWeather(todaysWeather);
