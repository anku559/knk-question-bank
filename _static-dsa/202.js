const arrayQuestions = {
  202: [
    // Single Arrays Questions
    {
      title: 'Loop and Print',
      emit: false,
      question: 'Write an algorithm that print all the elements in an Array?',
    },
    {
      title: 'Reverse Array',
      emit: false,
      question:
        'Write an algorithm that prints the elements of an Array in reverse order?',
    },
    {
      title: 'Modify Array',
      emit: false,
      question:
        'Implement a function modifyArray that takes an array and two additional arguments, first is index (the position where a new element should be added) and second is value (the value to insert at the given index)? This function should add the element at the specified index and return the modified array. If index is out of range, add value at the end.',
    },
    {
      title: 'Sum of elements',
      emit: false,
      question:
        'Write an algorithm to calculate sum of all the elements in an Array?',
    },
    {
      title: 'Sum of Even Elements',
      emit: false,
      question:
        'Write an algorithm that calculates and prints the sum of all even elements in an Array?',
    },
    {
      title: 'Sum of Odd Elements',
      emit: false,
      question:
        'Write an algorithm that calculates and prints the sum of all odd elements in an Array?',
    },
    {
      title: 'Even Numbers in Array',
      emit: false,
      question:
        'Write an algorithm that counts and prints the number of even elements in an Array?',
    },
    {
      title: 'Odd Numbers in Array',
      emit: false,
      question:
        'Write an algorithm that counts and prints the number of odd elements in an Array?',
    },
    {
      title: 'Odd Numbers till n',
      emit: false,
      question:
        'Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers?',
    },
    {
      title: 'Even Numbers till n',
      emit: false,
      question:
        'Implement a function createEvenNumbersArray(n) that takes a positive integer n and returns an array containing the first n even numbers?',
    },
    {
      title: 'Average of Number in Array',
      emit: false,
      question:
        'Write an algorithm to find average of numbers given in an Array?',
    },
    {
      title: 'Linear Search',
      emit: false,
      question:
        'Write an algorithm to find element in an array (Linear Search)?',
    },
    {
      title: 'Occurrence count',
      emit: false,
      question: `* Write an algorithm that takes an array of numbers and finds the reoccurring number?
* Write an algorithm to count the number of occurrences of given number in an Array?
      `,
    },
    {
      title: 'Find the Maximum',
      emit: false,
      question:
        'Write an algorithm that finds and prints the largest (maximum) element in an Array?',
    },
    {
      title: 'Find the Minimum',
      emit: false,
      question:
        'Write an algorithm that finds and prints the smallest (minimum) element in an Array?',
    },
    {
      title: 'Largest and Smallest in Array',
      emit: false,
      question:
        'Write an algorithm to find the largest and smallest elements in a given array. Print both values?',
    },
    {
      title: 'Positive and Negative Number Count',
      emit: false,
      question:
        'Write an algorithm to count number of negative and positive numbers in Array?',
    },
    {
      title: 'Prime Numbers in Array',
      emit: false,
      question:
        'Write an algorithm that takes an array of numbers and finds all Prime Numbers given in an Array?',
    },
    {
      title: 'Largest Smallest Even Odd Prime',
      emit: false,
      question:
        'Write an algorithm to find largest and smallest number in an array, check if the number obtained is even or odd, also check if it is Prime number?',
    },
    {
      title: 'Find Element Index',
      emit: false,
      question:
        'Write an algorithm that prints the index of the first occurrence of a given element in an Array. If the element is not found, print -1?',
    },
    {
      title: 'Last Element Index',
      emit: false,
      question:
        'Write an algorithm that prints the index of the last occurrence of a given element in an Array. If the element is not found, print -1?',
    },
    {
      title: 'Find All Indices',
      emit: false,
      question:
        'Write an algorithm that finds and prints all the indices of a given element in an Array. If the element is not found, print an empty array?',
    },
    {
      title: 'Remove Duplicate',
      emit: false,
      question:
        'Write an algorithm to remove duplicate elements from the the array and return array with unique elements preserving the original order?',
    },
    {
      title: 'All possible pairs',
      emit: false,
      question:
        'Write an algorithm to find all the possible pairs which can be created in a given array?',
    },
    {
      title: 'All possible unique pairs',
      emit: false,
      question:
        'Write an algorithm to find all the possible unique pairs (pair must not repeat) that can be created in a given array?',
    },
    {
      title: 'All possible pairs without self pair',
      emit: false,
      question:
        'Write an algorithm to find all the possible pairs which can be created in a given array (make sure to remove self pair)?',
    },
    {
      title: 'All possible pairs without self pair and symmetric duplicates',
      emit: false,
      question:
        'Write an algorithm to find all the possible pairs which can be created in a given array (make sure to remove self pair and symmetric duplicates)?',
    },
    //{ title: 'Split Strings by Separator', question: '' },
    //{ title: 'Knapsack Problem', question: '' },
    //{ title: 'Check If Sorted', question: '' },
    //{ title: 'Lower Median Extractor', question: '' },
    //{ title: 'Upper Median Extractor', question: '' },
    //{
    //  title: 'Minimize Sum of Absolute Differences - Lower Median Edition',
    //  question: '',
    //},
    //{
    //  title: 'Minimize Sum of Absolute Differences - Upper Median Edition',
    //  question: '',
    //},

    // Two Arrays Questions
    {
      title: 'Merge Two Arrays',
      emit: false,
      question:
        'Write an algorithm that merges two Arrays into a single Array, preserving the order of elements from both?',
    },
    {
      title: 'Merge Arrays Alternately',
      emit: false,
      question:
        'Write an algorighm that merges two Arrays by alternating elements from each. If one Array ends before the other, append the remaining elements of the longer Array?',
    },
    {
      title: 'Array Intersection',
      emit: false,
      question: `* Write an algorithm that finds and prints the intersection of two Arrays (elements that appear in both), preserving the order based on the first array?
* You have given 2 arrays and you have to create a function that let's user know true or false weather these two arrays contain common items?`,
    },
    {
      title: 'Array Union',
      emit: false,
      question:
        'Write an algorithm that finds and prints the union of two Arrays (all distinct elements from both), preserving the order based on the first appearance in either array?',
    },
    {
      title: 'Array Difference',
      emit: false,
      question:
        'Write an algorithm that finds and prints the difference between two Arrays (elements that appear in the first array but not in the second), preserving the order from the first array?',
    },
    {
      title: 'Unique Elements from Both Arrays',
      emit: false,
      question:
        'Write an algorithm that finds and prints all elements that appear in either of two Arrays but not in both (symmetric difference), preserving the order based on first appearance in the original arrays?',
    },
  ],
};

module.exports = { arrayQuestions };
