export const twoSum = (nums: Array<number>, target: number): Array<number> => {
  if (target == null) return []
  let result: Array<number> = []
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