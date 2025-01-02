function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Works fine

// This will cause an infinite loop because TypeScript doesn't detect this type of error. 
function printNumbersInfiniteLoop(n: number): void {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i = i + 0; // This increment is incorrect; it will always be 1 
  }
}

printNumbersInfiniteLoop(10); // Infinite loop