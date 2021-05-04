import React from "react";
import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers";

const BubbleSort = (nums) => {
  // Set up code for tracing the algorithm
  const trace = newTrace(nums);

  // Sorting Algorithm with trace capture
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      // Visualize: Comparing A[j] and A[j + 1]
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        // Visualize: Swap A[j] and A[j + 1]
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
      }
    }
    // Visualize: final value is sorted
    addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1 - i]);
  }

  return trace;
};

export const BubbleSortKey = createKey("Comparing", "Swapping");

export const BubbleSortDesc = {
  title: "Bubble Sort",
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>,
  code: `function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}`,
};

export default BubbleSort;
