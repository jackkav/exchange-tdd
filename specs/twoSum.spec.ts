// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
import { twoSum } from "../src/twoSum";

test("dumb test of zero", () => {
  expect(twoSum([], 0)).toEqual([]);
});

test("target is zero", () => {
  expect(twoSum([0], 0)).toEqual([0]);
});

test("target in first num", () => {
  expect(twoSum([2], 2)).toEqual([0]);
});

test("target in one num", () => {
  expect(twoSum([2, 7], 7)).toEqual([1]);
  expect(twoSum([2, 7, 11], 11)).toEqual([2]);
});

test("target in two nums", () => {
  expect(twoSum([2, 7], 9)).toEqual([0, 1]);
});

test("target in example", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("target in two number apart", () => {
  expect(twoSum([2, 7, 11, 15], 13)).toEqual([0, 2]);
});
