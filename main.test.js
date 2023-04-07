//👉 Write your tests below here:

/* Test Planning
Function to test:
function treasureLocator(number) {
  //👉 Write your code here
}

I need to write some tests to make sure that solutions to my kata
are correct and it words as expected.

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
 import { treasureHunt } from './main';
 import { test, expect } from '@jest/globals';


// Checking if the function takes a number as an argument
test('returns NaN when given a non-integer value', () => {
    expect(treasureHunt('abc')).toBe(NaN);
  });

  // Checking if the function returns a number


test('checks that the function returns a number', () => {
    expect(treasureHunt(64)).toBe(Number);
});


// Checks if the function returns 0 when given a negative number
test('returns 0 when given a negative number', () => {
    expect(treasureHunt(-5)).toBe(0);
  });


// Checks if the function returns the correct answer for a given number
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

