import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ShopCard } from "../components/ShopCard";

describe("ShopCard", () => {
   const testProduct = {
      id: 1,
      title: "apple",
      price: "$2.99",
      description: "It's an apple",
      category: "fruit",
      image: "apple.png",
   };

   it("renders a shop card with the correct data", () => {
      (render(<ShopCard data={testProduct} />), expect(screen.get));

      expect(screen.getByText("apple")).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveAttribute("src", "apple.png");
   });
});
