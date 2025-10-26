const { encode, WIDTH } = require('./src/revhash');
const { writeFileSync } = require('node:fs');

const questionTopics = {
  100: ['Hello World', 'Greet User', 'Email and Password', 'Five Fruits'],
  202: [
    'Loop and Print',
    'Reverse Array',
    'Sum of elements',
    'Sum of Even Elements',
    'Sum of Odd Elements',
    'Even Numbers in Array',
    'Odd Numbers in Array',
    'Average of Number in Array',
    'Odd Numbers till n',
    'Even Numbers till n',
    'Linear Search',
    'Occurrence count',
    'Find the Maximum',
    'Find the Minimum',
    'Largest and Smallest in Array',
    'Positive and Negative Number Count',
    'Prime Numbers in Array',
    'Largest Smallest Even Odd Prime',
    'Find Element Index',
    'Last Element Index',
    'Find All Indices',
    'Remove Duplicate',
    'All possible pairs',
    'All possible unique pairs',
    'All possible pairs without self pair',
    'All possible pairs without self pair and symmetric duplicates',
    'Split Strings by Separator',
    'Knapsack Problem',
    'Check If Sorted',
    'Lower Median Extractor',
    'Upper Median Extractor',
    'Minimize Sum of Absolute Differences - Lower Median Edition',
    'Minimize Sum of Absolute Differences - Upper Median Edition',
    'Merge Two Arrays',
    'Merge Arrays Alternately',
    'Array Intersection',
    'Array Union',
    'Array Difference',
    'Unique Elements from Both Arrays',
  ],
};

// Minimal demo: provide text and secret, get an 8-character token.
if (require.main === module) {
  const jsonOutput = {};

  const secret = 'KODES_EN_KOFFIE';
  for (const topics of Object.keys(questionTopics)) {
    if (
      Array.isArray(questionTopics[topics]) &&
      questionTopics[topics].length > 0
    ) {
      jsonOutput[topics] = [];

      for (let i = 0; i < questionTopics[topics].length; i++) {
        const token = encode(questionTopics[topics][i], secret);
        // console.log(String(questionTopics[topics][i]).padEnd(20), '->', token);

        jsonOutput[topics].push({
          topic: questionTopics[topics][i],
          order: i + 1,
          slug: `${topics}-${token}`,
          title: `${topics}-${token} - ${questionTopics[topics][i]}`,
        });
      }

      //for (const question of questionTopics[topics]) {
      //  const token = encode(question, secret);
      //  console.log(String(question).padEnd(20), '->', token);

      //  jsonOutput[topics].push({
      //    topic: question,
      //    order: 1,
      //    slug: `${topics}-${token}`,
      //    title: `${topics}-${token} - ${question}`,
      //  });
      //}
    }
  }

  writeFileSync('question-slugs.json', JSON.stringify(jsonOutput, null, 2));
}

module.exports = { encode };
