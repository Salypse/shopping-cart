import { decreaseIndex, increaseIndex } from "../helper/productSpotlight";
import { test, expect } from "vitest";

test("correctly increases index", () => {
   let index = 0;

   index = increaseIndex(index, 3);
   expect(index).toBe(1);

   index = increaseIndex(index, 3);
   expect(index).toBe(2);
});

test("correctly decreases index", () => {
   let index = 3;

   index = decreaseIndex(index, 3);
   expect(index).toBe(2);

   index = decreaseIndex(index, 3);
   expect(index).toBe(1);
});

test("when index is equal to length - 1 index will be 0", () => {
   let index = 2;

   index = increaseIndex(index, 3);
   expect(index).toBe(0);
});

test("when index decreased to value below 0 set index to length - 1", () => {
   let index = 0;

   index = decreaseIndex(index, 3);
   expect(index).toBe(2);
});
