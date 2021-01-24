//* Get the average from an array of numbers
export const average = (...args: number[]) => args.reduce((a, b) => a + b) / args.length;