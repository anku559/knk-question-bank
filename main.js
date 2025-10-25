// 1
const basics = [
  '100-input-output',
  '101-variables-constants',
  '102-operators',
  '103-conditionals',
  '104-loops',
  '105-functions',
  '110-numbers',
  '111-strings',
  '112-null-undefined-boolean',
  '113-arrays-lists',
  '114-objects-dict',
  '115-date',
  '116-star-patterns',
];

// 2
const dataStructure = [
  // Core Data Structures
  '200-arrays-lists',
  '205-strings',
  '210-hash-map-dicts',
  '215-linked-lists',
  '220-stacks',
  '225-queues',
  '230-math',
  '235-bit-manipulation',
  '240-intervals',
  '245-binary-search',

  // Trees & Variants
  '250-trees',
  '251-binary-search-tree',
  '252-avl-tree',
  '253-red-black-tree',
  '254-b-tree-bplus-tree',
  '255-heaps-priority-queue',
  '256-fibonacci-heap',
  '257-treap',
  '258-segment-tree',
  '259-fenwick-tree-binary-indexed-tree',

  // Graphs
  '260-graphs',
  '261-adjacency-list-matrix',
  '262-directed-acyclic-graph',
  '263-weighted-graph',
  '264-mst-structures-disjoint-sets',
  '265-tries',

  // Hashing & Advanced Maps
  '270-union-find-disjoint-set',
  '271-disjoint-set-path-compression',
  '272-open-addressing-hashmap',
  '273-cuckoo-hashing',
  '274-perfect-hashing',
  '275-segment-tree-range-queries',
  '276-sparse-table',
  '277-skip-list',
  '278-bloom-filter',
  '279-consistent-hashing',

  // Caches & Specialized
  '280-linked-hashmap-lru-cache',
  '281-lfu-cache',
  '282-mru-cache',
  '283-double-ended-queue-deque',
  '284-circular-buffer',
  '285-bloom-filter-skiplist',
  '286-rope-data-structure',
  '287-suffix-array',
  '288-suffix-tree',
  '289-patricia-trie-radix-tree',
  '290-order-statistics-tree',
  '291-interval-tree',
  '292-range-tree',
  '293-kd-tree',
  '294-quadtree',
  '295-octree',
  '296-disjoint-interval-set',
  '297-unrolled-linked-list',
  '298-van-emde-boas-tree',
  '299-x-fast-y-fast-trie',
];

// 3
const algorithmPattern = [
  '400-frequency-counter',
  '401-recursion',
  '402-divide-and-conquer',
  '403-sliding-window',
  '404-two-pointers',
  '405-fast-slow-pointers',
  '406-merge-intervals',
  '407-cyclic-sort',
  '408-inplace-reversal-linkedlist',
  '409-tree-bfs',
  '410-tree-dfs',
  '411-two-heaps',
  '412-subsets-combinations',
  '413-modified-binary-search',
  '414-bitwise-xor',
  '415-top-k-elements',
  '416-k-way-merge',
  '417-knapsack-0-1-dp',
  '418-topological-sort-graph',
  '419-greedy',
  '420-backtracking',
  '421-prefix-sum',
  '422-sliding-prefix-diff',
  '423-monotonic-stack',
  '424-trie-backtracking',
  '425-dynamic-programming',
  '426-union-find-disjoint-set',
  '427-graph-traversal-dijkstra',
  '428-graph-traversal-bellman-ford',
  '429-graph-traversal-floyd-warshall',
  '430-graph-traversal-kruskal',
  '431-graph-traversal-prims',
  '432-segment-tree',
  '433-fenwick-tree-binary-indexed-tree',
  '434-matrix-dp',
  '435-matrix-traversal-bfs-dfs',
  '436-matrix-spiral-and-rotation',
  '437-geometry-line-sweep',
  '438-geometry-convex-hull',
  '439-randomized-reservoir-sampling',
  '440-suffix-array',
  '441-suffix-tree',
  '442-kmp-string-pattern-matching',
  '443-rabin-karp-string-search',
  '444-z-algorithm-string-matching',
  '445-manachers-palindrome-search',
  '446-lru-cache-design',
  '447-union-find-optimized-path-compression',
  '448-minimax-algorithm',
  '449-alpha-beta-pruning',
  '450-bitmask-dp',
  '451-meet-in-the-middle',
  '452-game-theory-grundy',
  '499-miscellaneous',
];

const fs = require('fs');
const path = require('path');

const mainFolder = path.join(__dirname, '1-building-blocks');

// Create the main folder
fs.mkdirSync(mainFolder, { recursive: true });

for (const folder of basics) {
  const subFolder = path.join(mainFolder, folder);
  fs.mkdirSync(subFolder, { recursive: true });
  fs.writeFileSync(path.join(subFolder, '.gitkeep'), '');
}
