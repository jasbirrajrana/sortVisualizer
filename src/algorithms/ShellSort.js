import React from "react";
import { swap, newTrace, addToTrace, createRange, createKey } from "./helpers";

const ShellSort = (nums) => {
  const trace = newTrace(nums);

  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < nums.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        addToTrace(trace, nums, [], [i, i + gap]);
        if (nums[i + gap] < nums[i]) {
          addToTrace(trace, nums, [], [], [i, i + gap]);
          swap(nums, i, i + gap);
          addToTrace(trace, nums, [], [], [i, i + gap]);
        } else {
          break;
        }
      }
    }
  }

  addToTrace(trace, nums, createRange(0, nums.length));
  return trace;
};

export const ShellSortKey = createKey("Comparing", "Swapping");

export const ShellSortDesc = {
  title: "Shell Sort",

  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>
      <sup>3/2</sup>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>,
  code: `function ScriptoniteSort() {
    this.arr = [];
}

ScriptoniteSort.prototype = {
    swap: function(arr, index_one, index_two) {
        //swap
        var temp = arr[index_one];
        arr[index_one] = arr[index_two];
        arr[index_two] = temp;
    },

    validateCollection: function(datalist) {
        if(arguments.length === 0 || !Array.isArray(this.arr)) {
            throw new Error('Either No Arguments Passed, Or Passed Param is not an Array');
        }
    },

    //use this insertion sort when working with shell sort
    insertionSortGap: function(datalist, startIndex, increment) {
        //set length of array
        var dataLength = datalist.length;
        //create sub lists and do sorting
        for (var i = startIndex + increment; i < dataLength; i += increment) {
            var temp = this.arr[i];
            //placeholder is where we will insert
            var placeHolderIndex = i;
            //like the insertion sort method we do the same here only using the increment values
            while( (placeHolderIndex >= increment) && (this.arr[placeHolderIndex - increment] > temp) ) {
                //if condition is met then keep shifting the values
                this.arr[placeHolderIndex] = this.arr[placeHolderIndex - increment];
                placeHolderIndex -= increment;
            }
            //after shifting is all done, insert the value into right location
            this.arr[placeHolderIndex] = temp;
        }
    },

    //this method uses two for loops instead of a while within a loop
    insertionSortGapAlternative: function(datalist, startIndex, increment) {
        //set length of array
        var dataLength = datalist.length;
        //create sub lists and do sorting
        for(var i = startIndex; i < dataLength; i += increment) {
            //console.log(this.arr[i]);
            for(var j = Math.min(i + increment, dataLength - 1); j - increment >= 0; j = j - increment) {
                if(this.arr[j] < this.arr[j - increment]) {
                    this.swap(this.arr, j, j - increment);
                } else {
                    break;
                }
            }
        }
    },

    shellSort: function(datalist) {
         //assign the data property to the passed in datalist
         this.arr = datalist;
         //check if passed in is an array
         this.validateCollection(this.arr);
        //set the increment
        var increment = Math.floor(this.arr.length / 2);
        //a long as increment is greater than 1 call the modified insertion sort with gap
        while(increment >= 1) {
            for(var i = 0; i < increment; i++) {
                this.insertionSortGap(datalist, i, increment);
                //or call the other method insertion sort method
                //this.insertionSortGapAlternative(datalist, i, increment);
            }
            increment = Math.floor(increment / 2);
        }
        //display or return final array
        console.log("---->" + this.arr.toString());
    }
};`,
};
export default ShellSort;
