//* Get the time from a date
export const timeFromDate = (date: Date): string => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Result: "17:30:00" // timeFromDate(new Date()) Result: will log the current time