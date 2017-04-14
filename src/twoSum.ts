export const twoSum = (nums: number[], target: number): number[] => {
  if (target == null) return []
  let result: number[] = []
  nums.forEach((element, index) => {
    if (element === target) result.push(index)
    nums.forEach((e, i) => {
      if ((element + e) === target && !result.includes(index) && !result.includes(i)) {
        result.push(index)
        result.push(i)
      }
    })
  });
  return result
}