// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function findSmallest(arr) {
  let minIndex = 0;

  arr.forEach((item, index) => {
    if (item < arr[minIndex]) {
      minIndex = index;
    }
  });

  return minIndex;
}

function selectionSort(list) {
  const sortedArr = [];
  const arrLength = list.length;

  for (let i = 0; i < arrLength; i++) {
    const smallestIndex = findSmallest(list);
    sortedArr.push(list[smallestIndex]);
    list.splice(smallestIndex, 1);
  }

  return sortedArr;
}

const list = [3, 2, 5, 1, 4, 1000];

console.log(selectionSort(list));
