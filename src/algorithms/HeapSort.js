import React from "react";
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey,
} from "./helpers";

const HeapSort = (nums) => {
  const trace = newTrace(nums);

  // Helper functions to quickly access nodes
  const left = (i) => 2 * i + 1;
  const right = (i) => 2 * i + 2;
  const parent = (i) => Math.floor((i - 1) / 2);

  const maxHeapify = (array, i, heapsize) => {
    const leftChild = left(i);
    const rightChild = right(i);

    // Visualize: Compare parent and leftChild
    addToTrace(trace, array, lastSorted(trace), [i, leftChild]);

    let largest =
      leftChild < heapsize && array[leftChild] > array[i] ? leftChild : i;

    // Visualize: Compare largest and rightChild
    addToTrace(trace, array, lastSorted(trace), [largest, rightChild]);

    if (rightChild < heapsize && array[rightChild] > array[largest])
      largest = rightChild;

    if (largest !== i) {
      // Visualize: Select largest child and parent
      addToTrace(trace, array, lastSorted(trace), [], [i, largest]);

      swap(array, i, largest);

      // Visualize: Swap largest child and parent
      addToTrace(trace, array, lastSorted(trace), [], [i, largest]);

      maxHeapify(array, largest, heapsize);
    }
  };

  const BuildMaxHeap = (array) => {
    const start = Math.floor(array.length / 2);
    const heapsize = array.length;
    for (let i = start; i >= 0; i--) {
      maxHeapify(array, i, heapsize);
    }

    // Visualize: Mark heap as built
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [],
      [],
      [],
      createRange(0, array.length)
    );
  };

  const heapSort = (array) => {
    BuildMaxHeap(array);
    let heapsize = array.length;
    for (let i = array.length - 1; i > 0; i--) {
      // Visualize: Select Maximum
      addToTrace(trace, array, lastSorted(trace), [], [0, i]);

      swap(array, 0, i);
      heapsize -= 1;

      // Visualize: Swap with last element in heap
      addToTrace(trace, array, [...lastSorted(trace), i], [], [0, i]);

      maxHeapify(array, 0, heapsize);

      // Visualize: Heap created
      addToTrace(
        trace,
        array,
        lastSorted(trace),
        [],
        [],
        [],
        createRange(0, heapsize)
      );
    }
    addToTrace(trace, array, [...lastSorted(trace), 0]);
  };

  // Execute Heapsort
  heapSort(nums);
  return trace;
};

export const HeapSortKey = createKey(
  "Comparing",
  "Swapping",
  null,
  "Heap Built"
);

export const HeapSortDesc = {
  title: "Heap Sort",

  worstCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>,
  code: `var heapSort = function(arr) {
  var n = arr.length;
  for(var i = Math.floor(n/2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  for(var i = n - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

var heapify = function(arr, n, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;

  if(left >= n && right >= n)
    return;

  const leftValue = (left >= n) ? Number.NEGATIVE_INFINITY : arr[left];
  const rightValue = (right >= n) ? Number.NEGATIVE_INFINITY : arr[right];

  if(arr[i] > leftValue && arr[i] > rightValue) 
    return;

  if(leftValue > rightValue) {
    swap(arr, i, left);
    heapify(arr, n, left);
  } else {
    swap(arr, i, right);
    heapify(arr, n, right);
  }
}

var swap = function(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}`,
};
export default HeapSort;
