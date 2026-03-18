import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartSummary } from "../components/CartSummary";

describe("Cart Summary", () => {
   it("renders order summary with correct calculations", () => {
      const mockCartData = [
         { title: "men's t-shirt", price: 9.99, quantity: 1 },
      ];
      render(<CartSummary cartData={mockCartData} />);

      expect(screen.getByText("Subtotal: $9.99")).toBeInTheDocument();
      expect(screen.getByText("Order Total: $24.97")).toBeInTheDocument();
   });

   it("doesn't render tax or shipping costs when cartData is empty", () => {
      const mockCartData = [];
      render(<CartSummary cartData={mockCartData} />);

      expect(screen.getByText("Subtotal: $0")).toBeInTheDocument();
      expect(screen.getByText("Order Total: $0")).toBeInTheDocument();
      expect(screen.queryByText("Sale's tax: $9.99")).not.toBeInTheDocument();
      expect(
         screen.queryByText("Shipping Cost: $4.99"),
      ).not.toBeInTheDocument();
   });
});
