import express from 'express';
import { isEven, isWeekday, randomBoolean, reverse } from './functions/booleanFunctions/booleanFunctions';
import { average } from './functions/dataAnalysisFunctions/dataAnalysisFunctions';
import { timeFromDate } from './functions/dateTimeFunctions/dateTimeFunctions';
import { celsiusToFahrenheit, fahrenheitToCelsius } from './functions/internationalConversions/internationalConversions';
import { toFixed } from './functions/numberFormattingFunctions/numberFormattingFunctions';
const app = express();
const port = 8080;

app.get('/', (_req: any, res: any): void => {
    res.send("Hello World");
})
  
//* Get a random boolean (true/false)
console.log(randomBoolean());
// Result: a 50/50 change on returning true of false

//* Check if the provided day is a weekday
console.log(isWeekday(new Date(2021, 0, 11)));
// Result: true (Monday) / false (Sunday)

//* Reverse a string
console.log(reverse('hello world'))     
// Result: 'dlrow olleh'


//* Check if a number is even or odd
console.log(isEven(3));
// isEven(3) //false

//* Get the time from a date
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)))
// Result: "17:30:00"
console.log(timeFromDate(new Date()))
// Result: will log the current time

//* Fix number at set decimal place
toFixed(41.298726354, 1) // 41.2
toFixed(41.298726354, 6) // 41.298726


//* Get average value
console.log(average(1, 2, 3, 4)); // 2.5 

//* Convert Fahrenheit / Celsius
console.log(celsiusToFahrenheit(-20)) // -4
console.log(fahrenheitToCelsius(59)) // 15


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})