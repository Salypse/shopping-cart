import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BestSellers } from "../components/BestSellers";

describe("Best Sellers", () => {
   const testProducts = [
      { id: 3, title: "best seller 1" },
      { id: 7, title: "best seller 2" },
      { id: 13, title: "best seller 3" },
      { id: 14, title: "best seller 4" },
      { id: 20, title: "best seller 5" },
      { id: 1, title: "not a best seller" },
   ];

   function setup() {
      render(<BestSellers productData={testProducts} />);
   }

   it("renders all best selling products", () => {
      setup();

      const products = screen.getAllByRole("listitem");
      expect(products).toHaveLength(5);

      expect(screen.queryByText("not a best seller")).not.toBeInTheDocument();
   });

   it("renders products with their titles", () => {
      setup();

      expect(screen.getByText("best seller 1")).toBeInTheDocument();
      expect(screen.getByText("best seller 5")).toBeInTheDocument();
   });
});
