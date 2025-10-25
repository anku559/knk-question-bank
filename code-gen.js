const { encode, WIDTH } = require('./src/revhash');
const { writeFileSync } = require('node:fs');

const questionTopics = {
  100: ['Hello World', 'Greet User', 'Email and Password', 'Five Fruits'],
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

      for (const question of questionTopics[topics]) {
        const token = encode(question, secret);
        console.log(String(question).padEnd(20), '->', token);

        jsonOutput[topics].push({
          topic: question,
          slug: `${topics}-${token}`,
          title: `${topics}-${token} - ${question}`,
        });
      }
    }
  }

  writeFileSync('question-slugs.json', JSON.stringify(jsonOutput, null, 2));
}

module.exports = { encode };
