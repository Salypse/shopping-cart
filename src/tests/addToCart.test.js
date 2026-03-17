import { addToCart } from "../helper/addToCart";
import { test, expect, vi, beforeEach } from "vitest";

const setCartData = vi.fn();
beforeEach(() => {
   setCartData.mockClear();
});

const testProduct = {
   id: 1,
   title: "Men's T-Shirt",
   price: "$9.99",
   description: "It's a men's t-shirt",
   category: "men's-clothing",
   image: "mShirt.png",
};

test("adds new cart data object to state", () => {
   const cartData = [];
   const eventMock = {
      preventDefault: vi.fn(),
      target: {
         quantity: {
            value: "1",
         },
      },
   };

   addToCart(eventMock, testProduct, cartData, setCartData);
   expect(setCartData).toHaveBeenCalledWith([
      ...cartData,
      {
         id: 1,
         title: "Men's T-Shirt",
         price: "$9.99",
         image: "mShirt.png",
         quantity: 1,
      },
   ]);
});

test("adds another product when cart is not empty", () => {
   const cartData = [
      {
         id: 1,
         title: "Men's T-Shirt",
         price: "$9.99",
         image: "mShirt.png",
         quantity: 1,
      },
   ];
   const eventMock = {
      preventDefault: vi.fn(),
      target: {
         quantity: {
            value: "1",
         },
      },
   };

   const secondProduct = {
      id: 2,
      title: "Woman's T-Shirt",
      price: "$9.99",
      image: "wShirt.png",
      quantity: 1,
   };

   addToCart(eventMock, secondProduct, cartData, setCartData);
   const updatedCart = setCartData.mock.calls[0][0];

   expect(updatedCart).toHaveLength(2);
   expect(updatedCart).toStrictEqual([
      {
         id: 1,
         title: "Men's T-Shirt",
         price: "$9.99",
         image: "mShirt.png",
         quantity: 1,
      },

      {
         id: 2,
         title: "Woman's T-Shirt",
         price: "$9.99",
         image: "wShirt.png",
         quantity: 1,
      },
   ]);
});

test("updates cart data's quantity if item has already been added", () => {
   const cartData = [
      {
         id: 1,
         title: "Men's T-Shirt",
         price: "$9.99",
         image: "mShirt.png",
         quantity: 1,
      },
   ];
   const eventMock = {
      preventDefault: vi.fn(),
      target: {
         quantity: {
            value: "3",
         },
      },
   };

   addToCart(eventMock, testProduct, cartData, setCartData);
   const updatedCart = setCartData.mock.calls[0][0];

   expect(updatedCart).toHaveLength(1);
   expect(updatedCart[0].quantity).toBe(3);
});
