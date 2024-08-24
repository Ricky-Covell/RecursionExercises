/** product: calculate the product of an array of numbers. */

function product(nums, index=0) {
  if (index === nums.length) return 1;

  return nums[index] * product(nums, index+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index=0, lengthCount=0) {
  if (index === words.length) return lengthCount;
  if (words[index].length > lengthCount) lengthCount = words[index].length;

  return longest(words, index+1, lengthCount);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index=0, returnString='') {
  if (index >= str.length) return returnString;
  returnString += str[index];

  return everyOther(str, index+2, returnString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index=0) {
  let leftIndex = index;
  let rightIndex = str.length - 1 - index;
  if (leftIndex >= rightIndex) return true;
  if (str[leftIndex] !== str[rightIndex]) return false;

  return isPalindrome(str, index+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, target, index=0) {
  if (index === arr.length) return -1;
  if (arr[index] === target) return index;

  return findIndex(arr, target, index+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index=0, reversed='') {
  if (reversed.length === str.length) return reversed;
  reversed += str[str.length - 1 - index];

  return revString(str, index+1, reversed);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [] ;
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") {
       gatherStrings(obj[key])
          .forEach((e) => stringArr.push(e));
    }
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, target, leftIndex=0, rightIndex=arr.length) {
  if (leftIndex > rightIndex) return -1;

  let middeIndex = Math.floor((rightIndex + leftIndex) / 2);

  if (arr[middeIndex] === target) return middeIndex;

  if (arr[middeIndex] > target) {
    rightIndex = middeIndex - 1;
    return binarySearch(arr, target, leftIndex, rightIndex);
  } else {
    leftIndex = middeIndex + 1;
    return binarySearch(arr, target, leftIndex, rightIndex);

  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
