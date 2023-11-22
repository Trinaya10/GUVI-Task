/*1 i) (function(data=[]) {
    for (var i = 0; i < data.length; i++) {
      if (data[i] % 2 !== 0) {
        console.log(data[i]);
      }
    }
  })([1,2,3,4,5]);
  
  1 ii) const odd = function(b = []) {
      const oddNumbers = [];
  
      for (var i = 0; i < b.length; i++) {
          if (b[i] % 2 !== 0) {
              oddNumbers.push(b[i]);
          }
      }
  
      return oddNumbers;
  };
  
  console.log(odd([1, 2, 3, 4, 5]));
  
  2 i)const stringArray = ["hello", "world", "javascript"];
  
  (function(arr) {
      for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
      }
  })(stringArray);
  
  console.log(stringArray);
  
  3 i) const sum = function(arr) {
      let result = 0;
      for (var i = 0; i < arr.length; i++) {
          result += arr[i];
      }
      return result;
  };
  
  const totalSum = sum([1,2,3,4,5]);
  console.log(totalSum); // Output: 15
  
  ii) const numbers = [1, 2, 3, 4, 5];
  
  const totalSum = (function(arr) {
      let result = 0;
      for (var i = 0; i < arr.length; i++) {
          result += arr[i];
      }
      return result;
  })(numbers);
  
  console.log(totalSum); // Output: 15 */
  /*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const primeNumbers = numbers.filter(function(num) {
    if (num <= 1) {
      return false;
    }
  
    if (num <= 3) {
      return true;
    }
  
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  });
  
  console.log("Prime numbers in the array:", primeNumbers); */

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*const primeNumbers = (function() {
  return numbers.filter(function(num) {
    if (num <= 1) {
      return false;
    }

    if (num <= 3) {
      return true;
    }

    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  });
})();

console.log("Prime numbers in the array:", primeNumbers); */

/*const words = ["level", "hello", "racecar", "world", "madam"];

const palindromes = words.filter(function(word) {
  // Convert the word to lowercase for case-insensitive comparison
  const lowercaseWord = word.toLowerCase();

  // Check if the reversed word is the same as the original word
  return lowercaseWord === lowercaseWord.split('').reverse().join('');
});

console.log("Palindromes in the array:", palindromes); */

/*const words = ["level", "hello", "racecar", "world", "madam"];

const palindromes = words.filter(function(word) {
  // Convert the word to lowercase for case-insensitive comparison
  const lowercaseWord = word.toLowerCase();

  // Check if the reversed word is the same as the original word
  return lowercaseWord === lowercaseWord.split('').reverse().join('');
})();

console.log("Palindromes in the array:", palindromes); */
/*const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      // If the length is even, return the average of the middle two elements
      const middle1 = mergedArray[(length / 2) - 1];
      const middle2 = mergedArray[length / 2];
      return (middle1 + middle2) / 2;
    } else {
      // If the length is odd, return the middle element
      return mergedArray[Math.floor(length / 2)];
    }
  };
  
  // Example usage:
  const nums1 = [1, 3, 5, 7];
  const nums2 = [2, 4, 6, 8];
  
  const median = findMedianSortedArrays(nums1, nums2);
  console.log("Median:", median);*/
  

  





  

  