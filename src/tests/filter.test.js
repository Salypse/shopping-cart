import { filterData, getCategories } from "../helper/filter";
import { test, expect } from "vitest";

const testProducts = [
   {
      id: 1,
      title: "Men's T-Shirt",
      price: "$9.99",
      description: "It's a men's t-shirt",
      category: "men's-clothing",
      image: "mShirt.png",
   },
   {
      id: 2,
      title: "Woman's T-Shirt",
      price: "$9.99",
      description: "It's a woman's t-shirt",
      category: "woman's-clothing",
      image: "wShirt.png",
   },

   {
      id: 3,
      title: "Men's Pants",
      price: "$9.99",
      description: "It's a man's pair of pants",
      category: "men's-clothing",
      image: "mPants.png",
   },
];

test("returns filtered products of given category", () => {
   expect(filterData(testProducts, "woman's-clothing")).toEqual([
      {
         id: 2,
         title: "Woman's T-Shirt",
         price: "$9.99",
         description: "It's a woman's t-shirt",
         category: "woman's-clothing",
         image: "wShirt.png",
      },
   ]);
});

test("returns all of the different category names in given data", () => {
   expect(getCategories(testProducts)).toEqual([
      "men's-clothing",
      "woman's-clothing",
   ]);
});

test("only returns one of each category name", () => {
   expect(getCategories(testProducts).length).toBe(2);
});
