// add whatever parameters you deem necessary
function averagePair(nums, tar) {
    if(nums.length === 0) return false;

    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        const avg = (nums[left] + nums[right]) / 2;
        if(avg === tar){
            return true
        }
        if(avg > tar){
            right--;
        }else{
            left++;
        }
    }

    return false;
}