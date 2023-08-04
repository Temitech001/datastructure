//solution to first problem
function sumOfDistinctElements(set1, set2) {
  let distinctElements = [];
  let totalSum = 0;

  for (let element of set1) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
      totalSum += element;
    }
  }

  for (let element of set2) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
      totalSum += element;
    }
  }

  return totalSum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log(result); // Output: 13

//solution to second problem

function dotProduct(v1, v2) {
  let ps = 0;

  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }

  return ps;
}

function checkOrthogonal(vectors) {
  for (let [v1, v2] of vectors) {
    const product = dotProduct(v1, v2);

    if (product === 0) {
      console.log('Vectors v1 and v2 are orthogonal');
    } else {
      console.log('Vectors v1 and v2 are not orthogonal');
    }
  }
}

const vectors = [
  [
    [1, 0, -1],
    [0, 1, 0],
  ],
  [
    [3, -2, 1],
    [4, 1, 2],
  ],
  // ... add more vector pairs
];

checkOrthogonal(vectors);
