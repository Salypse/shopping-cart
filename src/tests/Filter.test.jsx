import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Filter } from "../components/Filter";
import { filterData } from "../helper/filter";
import userEvent from "@testing-library/user-event";

describe("Filter", () => {
   const setFilteredItems = vi.fn();

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
   ];

   function setup() {
      render(
         <Filter
            productData={testProducts}
            setFilteredItems={setFilteredItems}
         />,
      );
   }

   it("renders filter with all given category's as option's", () => {
      setup();

      expect(screen.getByRole("radio", { name: /men/i })).toBeInTheDocument();
      expect(screen.getByRole("radio", { name: /woman/i })).toBeInTheDocument();
   });

   it("filters data when a category is clicked", async () => {
      const user = userEvent.setup();
      setup();

      const menFilterButton = screen.getByRole("radio", { name: /men/i });
      await user.click(menFilterButton);

      expect(setFilteredItems).toHaveBeenCalledWith(
         filterData(testProducts, "men's-clothing"),
      );
   });

   it("clears filter and reset data", async () => {
      const user = userEvent.setup();
      setup();

      const clearFilterButton = screen.getByRole("button", {
         name: "Clear Filter",
      });
      await user.click(clearFilterButton);

      expect(setFilteredItems).toHaveBeenCalledWith(testProducts);
   });
});
