const { encode, WIDTH } = require('./src/revhash');
const { writeFileSync } = require('node:fs');

// Questions Files
// 1-building-blocks
const { inputOutputQuestions } = require('./_static-dsa/100');
const { varConstQuestions } = require('./_static-dsa/101');
const { operatorsQuestions } = require('./_static-dsa/102');
const { conditionalsQuestions } = require('./_static-dsa/103');
const { loopsQuestions } = require('./_static-dsa/104');
const { starPatternQuestions } = require('./_static-dsa/110');

// 2-data-types-data-structures
const { arrayQuestions } = require('./_static-dsa/202');
const { numbersQuestions } = require('./_static-dsa/200');

// 3-algorithm-patterns

const questionTopics = {
  //...inputOutputQuestions, // 100
  //...varConstQuestions, // 101
  //...operatorsQuestions, // 102
  //...conditionalsQuestions, // 103
  //...loopsQuestions, // 104
  //...starPatternQuestions, // 110

  //...numbersQuestions, // 200
  ...arrayQuestions, // 202
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
        // 100-Hello World

        const title = questionTopics[topics][i].title;
        const encodedTopic = `${topics}-${title}`;
        const token = encode(encodedTopic, secret);

        // console.log(String(questionTopics[topics][i]).padEnd(20), '->', token);

        jsonOutput[topics].push({
          order: i + 1,
          title,
          titleId: `${topics}-${token}`,
          titleHead: `${topics}-${token} - ${title}`,
          question: questionTopics[topics][i].question || '',
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
