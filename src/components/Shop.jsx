import { useOutletContext } from "react-router";
import { ShopCard } from "./ShopCard";
import { Filter } from "./Filter";
import { useState } from "react";
import styles from "../styles/shop.module.css";
import filterStyles from "../styles/filter.module.css";
import filterIcon from "../assets/filter.svg";

export function Shop() {
   const { productData, cartData, setCartData } = useOutletContext();
   const [filteredItems, setFilteredItems] = useState(productData);
   const [isActive, setIsActive] = useState(false);

   return (
      <>
         {isActive && (
            <aside className="filter">
               <Filter
                  productData={productData}
                  setFilteredItems={setFilteredItems}
                  isActive={isActive}
                  setIsActive={setIsActive}
               />
            </aside>
         )}

         {!isActive && (
            <section>
               <button
                  className={filterStyles["icon"]}
                  onClick={() => setIsActive((prev) => !prev)}
               >
                  <img src={filterIcon} />
               </button>
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
         )}
      </>
   );
}
