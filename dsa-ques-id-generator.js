const { encode, WIDTH } = require('./src/revhash');
const { writeFileSync, readFileSync } = require('node:fs');

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

        if (!questionTopics[topics][i].emit) continue;

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
    }
  }

  writeFileSync('question-slugs.json', JSON.stringify(jsonOutput, null, 2));
}

const mappingObj = {
  100: 'input-output',
  101: 'variables-constants',
  102: 'operators',
  103: 'conditionals',
  104: 'loops',
  110: 'star-patterns',
  200: 'numbers',
  201: 'strings',
  202: 'arrays-lists-sets',
  203: 'hash-maps-objects-dicts',
  215: 'linked-lists',
  220: 'stacks',
  225: 'queues',
  230: 'math',
  235: 'bit-manipulation',
  240: 'intervals',
  245: 'binary-search',
  250: 'trees',
  251: 'binary-search-tree',
  252: 'avl-tree',
  253: 'red-black-tree',
  254: 'b-tree-bplus-tree',
  255: 'heaps-priority-queue',
  256: 'fibonacci-heap',
  257: 'treap',
  258: 'segment-tree',
  259: 'fenwick-tree-binary-indexed-tree',
  260: 'graphs',
  261: 'adjacency-list-matrix',
  262: 'directed-acyclic-graph',
  263: 'weighted-graph',
  264: 'mst-structures-disjoint-sets',
  265: 'tries',
  270: 'union-find-disjoint-set',
  271: 'disjoint-set-path-compression',
  272: 'open-addressing-hashmap',
  273: 'cuckoo-hashing',
  274: 'perfect-hashing',
  275: 'segment-tree-range-queries',
  276: 'sparse-table',
  277: 'skip-list',
  278: 'bloom-filter',
  279: 'consistent-hashing',
  280: 'linked-hashmap-lru-cache',
  281: 'lfu-cache',
  282: 'mru-cache',
  283: 'double-ended-queue-deque',
  284: 'circular-buffer',
  285: 'bloom-filter-skiplist',
  286: 'rope-data-structure',
  287: 'suffix-array',
  288: 'suffix-tree',
  289: 'patricia-trie-radix-tree',
  290: 'order-statistics-tree',
  291: 'interval-tree',
  292: 'range-tree',
  293: 'kd-tree',
  294: 'quadtree',
  295: 'octree',
  296: 'disjoint-interval-set',
  297: 'unrolled-linked-list',
  298: 'van-emde-boas-tree',
  299: 'x-fast-y-fast-trie',
  400: 'frequency-counter',
  401: 'recursion',
  402: 'divide-and-conquer',
  403: 'two-pointers',
  404: 'sliding-window',
  405: 'fast-slow-pointers',
  406: 'merge-intervals',
  407: 'cyclic-sort',
  408: 'inplace-reversal-linkedlist',
  409: 'tree-bfs',
  410: 'tree-dfs',
  411: 'two-heaps',
  412: 'subsets-combinations',
  413: 'modified-binary-search',
  414: 'bitwise-xor',
  415: 'top-k-elements',
  416: 'k-way-merge',
  417: 'knapsack-0-1-dp',
  418: 'topological-sort-graph',
  419: 'greedy',
  420: 'backtracking',
  421: 'prefix-sum',
  422: 'sliding-prefix-diff',
  423: 'monotonic-stack',
  424: 'trie-backtracking',
  425: 'dynamic-programming',
  426: 'union-find-disjoint-set',
  427: 'graph-traversal-dijkstra',
  428: 'graph-traversal-bellman-ford',
  429: 'graph-traversal-floyd-warshall',
  430: 'graph-traversal-kruskal',
  431: 'graph-traversal-prims',
  432: 'segment-tree',
  433: 'fenwick-tree-binary-indexed-tree',
  434: 'matrix-dp',
  435: 'matrix-traversal-bfs-dfs',
  436: 'matrix-spiral-and-rotation',
  437: 'geometry-line-sweep',
  438: 'geometry-convex-hull',
  439: 'randomized-reservoir-sampling',
  440: 'suffix-array',
  441: 'suffix-tree',
  442: 'kmp-string-pattern-matching',
  443: 'rabin-karp-string-search',
  444: 'z-algorithm-string-matching',
  445: 'manachers-palindrome-search',
  446: 'lru-cache-design',
  447: 'union-find-optimized-path-compression',
  448: 'minimax-algorithm',
  449: 'alpha-beta-pruning',
  450: 'bitmask-dp',
  451: 'meet-in-the-middle',
  452: 'game-theory-grundy',
  499: 'miscellaneous',
};

const jsonData = readFileSync('question-slugs.json', { encoding: 'utf-8' });
const jsonParse = JSON.parse(jsonData);

for (const key in jsonParse) {
  if (!Object.hasOwn(jsonParse, key)) continue;
  const element = jsonParse[key];
  if (!Array.isArray(element)) continue;
  if (!element.length) continue;

  //console.log(element);
}

module.exports = { encode };
