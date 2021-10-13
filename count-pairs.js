// add whatever parameters you deem necessary
function countPairs(nums, tar) {
    let count = 0;
    let set = new Set(nums);
    for (let val of nums) {
      set.delete(val);
      if (set.has(tar - val)) {
        count++;
      }
    }
  
    return count;
}

module.exports = countPairs;