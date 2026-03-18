import { increaseQuantity, decreaseQuantity } from "../helper/QuantityChange";
import { test, expect, vi, beforeEach } from "vitest";

const setCartData = vi.fn();
beforeEach(() => {
   setCartData.mockClear();
});

test("increases items quantity", () => {
   const mockCart = [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
   ];
   increaseQuantity(1, setCartData);

   expect(setCartData).toHaveBeenCalled();

   const updatedCart = setCartData.mock.calls[0][0];
   const result = updatedCart(mockCart);

   expect(result).toStrictEqual([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 2 },
   ]);
});

test("decreases items quantity", () => {
   const mockCart = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 2 },
   ];
   decreaseQuantity(1, setCartData);

   expect(setCartData).toHaveBeenCalled();

   const updatedCart = setCartData.mock.calls[0][0];
   const result = updatedCart(mockCart);

   expect(result).toStrictEqual([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
   ]);
});

test("removes item from cart when quantity is 0 or less", () => {
   const mockCart = [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
   ];
   decreaseQuantity(1, setCartData);

   expect(setCartData).toHaveBeenCalled();

   const updatedCart = setCartData.mock.calls[0][0];
   const result = updatedCart(mockCart);

   expect(result).toHaveLength(1);
   expect(result).toStrictEqual([{ id: 2, quantity: 2 }]);
});
