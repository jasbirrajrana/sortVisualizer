import React from "react";
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey,
} from "./helpers";

const QuickSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  function choosePivot(array, start, end) {
    // randomly pick an element between start and end;
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;

    // Visualize: Keep pivot marked
    addToTrace(trace, array, lastSorted(trace), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        // Visualize: Mark item that is less than pivot
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        );

        swap(array, i, j);

        // Visualize: Move item to lesser list
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }

    // Visualize: Mark center position
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);

    // Visualize: Move pivot to center
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        // Visualize: Mark only item as sorted
        addToTrace(trace, array, [...lastSorted(trace), start]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);

    // Visualize: Mark chosen pivot
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    swap(array, start, pivot);

    // Visualize: Move chosen pivot to start
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    pivot = partition(array, start, end);

    // Visualize: Mark pivot after partition as sorted
    addToTrace(trace, array, [...lastSorted(trace), pivot]);

    recursiveQuickSort(array, start, pivot - 1);
    recursiveQuickSort(array, pivot + 1, end);
  }

  recursiveQuickSort(nums, 0, nums.length - 1);

  return trace;
};

export const QuickSortKey = createKey(
  "Comparing",
  "Swapping",
  null,
  "Less than pivot"
);

export const QuickSortDesc = {
  title: "Quick Sort",
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(log<em>n</em>)
    </span>
  ),
  code: `
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
  `,
};
export default QuickSort;
