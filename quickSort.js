const quickSort = (arr, left, right) => {
  let len = arr.length, pivot, partitionIndex;

  if (left < right) {
    pivot = right;

    // find where to move 'pivot' to
    partitionIndex = partition(arr, pivot, left, right);

    // recurse - left (<) and right (>)
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
};

const partition = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot],
  partitionIndex = left;

  for (var i = left; i < right; i++){
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, right, partitionIndex);
  return partitionIndex;
};

// swap whenever value of i < partitionIndex
const swap = (arr, i, partitionIndex) => {
  let temp = arr[i];
  arr[i] = arr[partitionIndex];
  arr[partitionIndex] = temp;
};
