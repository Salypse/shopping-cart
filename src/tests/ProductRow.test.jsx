import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductRow } from "../components/ProductRow";

describe("Cart", () => {
   const testProduct = {
      id: 1,
      title: "Men's t-shirt",
      price: "9.99",
      quantity: 1,
      image: "mShirt.png",
   };

   function setup() {
      render(<ProductRow productData={testProduct} />);
   }

   it("renders row with product data", () => {
      setup();

      expect(screen.getByText("Men's t-shirt")).toBeInTheDocument();
      expect(screen.getByText("$9.99")).toBeInTheDocument();
      expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
   });
});
