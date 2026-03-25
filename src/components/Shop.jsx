import { useOutletContext } from "react-router";
import { ShopCard } from "./ShopCard";
import { Filter } from "./Filter";
import { useState, useEffect } from "react";
import styles from "../styles/shop.module.css";
import filterStyles from "../styles/filter.module.css";
import filterIcon from "../assets/filter.svg";

export function Shop() {
   const { productData, cartData, setCartData } = useOutletContext();
   const [filteredItems, setFilteredItems] = useState(productData);
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      if (isActive) {
         document.body.style.overflow = "hidden";
      }

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isActive]);

   return (
      <>
         <aside>
            <Filter
               productData={productData}
               setFilteredItems={setFilteredItems}
               isActive={isActive}
               setIsActive={setIsActive}
            />
         </aside>

         <section>
            {!isActive && (
               <button
                  className={filterStyles["icon"]}
                  onClick={() => setIsActive((prev) => !prev)}
               >
                  <img src={filterIcon} />
               </button>
            )}
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
