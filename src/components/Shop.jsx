import { useOutletContext } from "react-router";
import { ShopCard } from "./ShopCard";
import { Filter } from "./Filter";
import { useState } from "react";
import styles from "../styles/shop.module.css";

export function Shop() {
   const { productData, cartData, setCartData } = useOutletContext();
   const [filteredItems, setFilteredItems] = useState(productData);

   return (
      <>
         <aside className="filter">
            <Filter
               productData={productData}
               setFilteredItems={setFilteredItems}
            />
         </aside>
         <section>
            <ul className={styles.shop}>
               {filteredItems.map((product) => (
                  <li key={product.id} className={styles["shop-product"]}>
                     <ShopCard
                        data={product}
                        cartData={cartData}
                        setCartData={setCartData}
                     />
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
}
