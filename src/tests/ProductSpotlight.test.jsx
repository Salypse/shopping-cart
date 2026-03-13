import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductSpotlight } from "../components/ProductSpotlight";
import userEvent from "@testing-library/user-event";

describe("ProductSpotlight", () => {
   const testProducts = [
      {
         id: 1,
         title: "Men's T-Shirt",
         price: "9.99",
         description: "It's a men's t-shirt",
         category: "men's-clothing",
         image: "mShirt.png",
      },
      {
         id: 2,
         title: "Woman's T-Shirt",
         price: "9.99",
         description: "It's a woman's t-shirt",
         category: "woman's-clothing",
         image: "wShirt.png",
      },
   ];

   function setup() {
      render(<ProductSpotlight productData={testProducts} />);
   }

   it("renders a spotlight card with using product data", () => {
      setup();

      expect(screen.getByText(/t-shirt/i)).toBeInTheDocument();
      expect(screen.getByText(/clothing/i)).toBeInTheDocument();
      expect(screen.getByText("$9.99")).toBeInTheDocument();
   });

   it("changes current product in spotlight when button pressed", async () => {
      const user = userEvent.setup();
      setup();

      const nextButton = screen.getByRole("button", { name: ">" });
      const firstProduct = screen.getByText(/t-shirt/i).textContent;

      await user.click(nextButton);

      const newProduct = screen.getByText(/t-shirt/i).textContent;
      expect(newProduct).not.toBe(firstProduct);
   });
});
