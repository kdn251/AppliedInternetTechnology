// reversi.js

const rev = {

  //return the product of all numbers
  prod: function(...numbers) {

    if(numbers.length === 0) {

      return undefined;

    }

    let answer = numbers.reduce(function(product, currentNumber ){
	     return product * currentNumber;
    }, 1);

    return answer;

  },

  //check if there exist any even numbers in arr
  any: function(arr, fn) {

    let passedTest = arr.filter(fn);

    return passedTest.length > 0 ? true : false;

  },

  //check if undefined or null value exists and call function accordingly
  maybe: function(fn1) {

    return function(fn) {

      let array = [...arguments];

      if(array.indexOf(undefined) > -1 || array.indexOf(null) > -1) {

        return undefined;

      }

      else {

        return fn1(...array);

      }

    };

  }

	// prod: function(...numbers) {
  //
  //   if(numbers.length === 0) {
  //
  //     return undefined;
  //
  //   }
  //
  //   return rev.prodRecursive(0, 1, ...numbers);
  //
  //
  // },
  //
  // prodRecursive: function(index, product, ...numbers) {
  //
  //   if(index === numbers.length) {
  //
  //     console.log(product);
  //     return product;
  //
  //   }
  //
  //   product *= numbers[index];
  //   index++;
  //   rev.prodRecursive(index, product, ...numbers);
  //
  // },


};

module.exports = rev;