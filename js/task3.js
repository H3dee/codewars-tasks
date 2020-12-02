/**
 * The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
 * ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
 */

const partsSums = (list) => {
  if (list instanceof Array) {
    let currentList = [...list]
    const sums = [];
    let currentSum = 0;

    
      currentList.forEach((digit, index, arr) => {
        currentSum += digit;
        if (index === arr.length - 1) {
          sums.push(currentSum);
          currentSum = 0;
        }
      });
      currentList.shift();
    

    sums.push(0);
    return sums;
  }

  return [];
};
