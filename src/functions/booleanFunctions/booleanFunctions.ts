//* Get a random boolean (true/false)
export const randomBoolean = (): boolean => Math.random() >= 0.5;


//* Check if the provided day is a weekday
export const isWeekday = (date: Date): boolean => date.getDay() % 6 !== 0;


//* Reverse a string
export const reverse = (str: any): string => str.split('').reverse().join('');


//* Test if result is even
export const isEven = (num: number): boolean => num % 2 === 0;