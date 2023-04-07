//👉 Write your tests below here:

/* Test Planning
Function to test:
function treasureLocator(number) {
  //👉 Write your code here
}

I need to write some tests to make sure that solutions to my kata
are correct and it works as expected.

I need to test the following:


- The function takes a number as an argument
  
test('returns NaN when given a non-integer value', () => {
    expect(treasureHunt('abc')).toBe(NaN);
  });



- The function returns a number
How do I test that the function returns a number?


  });

- The function returns the correct answer for a given number
How do I test that the function returns the correct answer for a given number?

test('returns 0 when given 0', () => {
    expect(treasureHunt(0)).toBe(0);
  });

  test('returns 0 when given 1', () => {
    expect(treasureHunt(1)).toBe(0);
  });

  test('returns 4 when given 4', () => {
    expect(treasureHunt(4)).toBe(4);
  });

  test('returns 7 when given 7', () => {
    expect(treasureHunt(7)).toBe(7);
  });

  test('returns 11 when given 8', () => {
    expect(treasureHunt(8)).toBe(11);
  });

  test('returns 52 when given 20', () => {
    expect(treasureHunt(20)).toBe(52);
  });

  test('returns 0 when given a negative number', () => {
    expect(treasureHunt(-5)).toBe(0);
  });

*/
 import { treasureHunt } from './main.js';
 import { test, expect } from '@jest/globals';


// Checking if the function takes a number as an argument
test('returns 0 when given a non-integer value', () => {
    let actual = treasureHunt('abc');
    let expected = 0;
    expect(actual).toBe(expected);
  });

  // Checking if the function returns a number


test('checks that the function returns a number', () => {
    let actual = "number";
    let expected = typeof treasureHunt(5);
    
    expect(actual).toBe(expected);
});


// Checks if the function returns 0 when given a negative number
test('returns 0 when given a negative number', (number) => {
    let actual = treasureHunt(-number);
    let expected = 0;
    
    expect(actual).toBe(expected);
  });

/*
// Checks if the function returns the correct answer for a given number
test('returns 0 when given 0', () => {
let actual = 0;
let expected = 0;

    expect(actual).toBe(expected);
});

test('returns 0 when given 1', () => {
    let actual = 1;
    let expected = 0;

    expect(actual).toBe(expected);
});

test('returns 4 when given 4', () => {
let actual = 4;
let expected = 4;

    expect(actual).toBe(expected);
});

test('returns 7 when given 7', (number) => {
    let actual = 7;
    let expected = 7;
    
    expect(actual).toBe(expected);
});

test('returns 11 when given 8', (number) => {
    let actual = treasureHunt(8);
    let expected = 11;
    
    expect(actual).toBe(expected);
});

test('returns 81 when given 20', (number) => {
    let actual = treasureHunt(20);
    let expected = 81;
    
    expect(actual).toBe(expected);
});

*/
