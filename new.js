"use strict";

Array.prototype.last = function () {
  if (this.length === 0) {
    console.log(-1);
    return -1;
  }
//   let index = this.length - 1;
//   console.log(this.length);
//   console.log(index);
  return this[this.length - 1];
};

const arr = [1, 2, 3];
arr.last(); // 3
console.log(arr.last());

// const arr = [];
// arr.last(); // -1
