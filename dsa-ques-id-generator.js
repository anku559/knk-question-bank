const { encode, WIDTH } = require('./src/revhash');
const { writeFileSync } = require('node:fs');

// Files
const { inputOutputQuestions } = require('./_static-dsa/100');
const { arrayQuestions } = require('./_static-dsa/202');

const questionTopics = {
  ...inputOutputQuestions, // 100
  //...arrayQuestions, // 202
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
