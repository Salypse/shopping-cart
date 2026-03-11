import { Link, useOutletContext } from "react-router";
import { ShopCard } from "./ShopCard";
import { Filter } from "./Filter";
import { useState } from "react";
export function Shop() {
   const { productData } = useOutletContext();
   const [filteredItems, setFilteredItems] = useState(productData);

   return (
      <>
         <Link to="/">Home</Link>
         <aside className="filter">
            <Filter
               productData={productData}
               setFilteredItems={setFilteredItems}
            />
         </aside>
         <section className="shop-products">
            <ul>
               {filteredItems.map((product) => (
                  <li key={product.id}>
                     <ShopCard data={product} />
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
}
