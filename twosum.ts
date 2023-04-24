/*
  Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution,
    and you may not use the same element twice. You can return the answer in any order.
*/
/*
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSum(nums: number[], target: number): number[] {
  const hashMapOfNums = Object.fromEntries(nums.map((num, idx) => [idx, num]));
  let res: number[];

  for (let idx = 0; idx < nums.length; idx++) {
    const compliment = target - nums[idx];
    const indexOfCompliment = Object.values(hashMapOfNums).indexOf(compliment);
    if (indexOfCompliment !== -1) {
      return [hashMapOfNums[idx], idx];
    }
    return [];
  }
}

let nums = [2, 7, 11, 15];
let target = 9;
const v = twoSum(nums, target);
console.log("v", v);
