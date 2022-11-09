const maxValue = (nums) => {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};

console.log(maxValue([10, 6, 30, 7, 5]));
