# TypeScript Bug: Subtle Infinite Loop

This repository demonstrates a subtle bug in TypeScript where an infinite loop can occur due to an incorrect increment in a `while` loop.  TypeScript's type system doesn't catch this error, making it difficult to detect during development.

## Bug Description

The `printNumbersInfiniteLoop` function is intended to print numbers from 1 to `n`. However, the increment `i = i + 0` within the `while` loop always results in `i` remaining 1, leading to an infinite loop.

## How to Reproduce

1. Clone this repository.
2. Compile and run `bug.ts`.
3. Observe the infinite loop.

## Solution

The solution involves fixing the increment operation in the `while` loop to properly increase the counter variable `i`. See `bugSolution.ts` for the corrected code.