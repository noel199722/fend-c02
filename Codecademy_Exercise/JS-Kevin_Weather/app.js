const kelvin= 0;//Kelvin
const celsius= kelvin-273;//Celvin=Kelvin-273
let fahrenheit = celsius * (9/5) + 32;//convert celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit);//Fahrenheit temperature
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100)
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);