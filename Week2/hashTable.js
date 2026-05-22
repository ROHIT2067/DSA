// 1) Fundamentals : A hashmap, also known as a dictionary or an associative array, is a data structure that maps keys to values.
// In JavaScript, hashmaps can be implemented using objects or Map objects. Objects are a simple way to implement
// hashmaps, but they have some limitations, such as the fact that keys must be strings and the fact that keys are
// enumerated in the order in which they were added. Map objects were introduced in ECMAScript 6 and provide a more
// flexible and powerful implementation of hashmaps, with support for keys of any type and ordered iteration.

// 2) Collision in hashmap : Collisions occur when two or more keys are mapped to the same index in the hashmap. In JavaScript,
// collisions can be resolved using various strategies, such as chaining (storing a linked list at each index)
// or probing (searching for an empty slot after a collision). The choice of collision resolution strategy can
// affect the time and space complexity of hashmap operations.

//hashTable
class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(i, this.table[i]);
    }
  }
}

//two Sum
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

//removeDuplicates
function removeDuplicates(arr) {
  const seen = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

//firstNonRepeating
function firstNonRepeating(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) return char;
  }
  return null;
}

//Valid Anagram
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const freq = {};
  for (let char of s) freq[char] = (freq[char] || 0) + 1;
  for (let char of t) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
}

//Frequency Count
function freqCount(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
