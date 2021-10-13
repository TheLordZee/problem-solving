// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        if(nums[right] > 0 && nums[left] < 0){
            temp = nums[left];
            nums[left] = nums[right]
            nums[right] = temp;
        } else if(nums[right] > 0 && nums[left] > 0){
            left++;
        } else {
            right--;
        } 
    }

    return nums;
}
