import { useOutletContext } from "react-router";
import { ProductRow } from "./ProductRow";
import { CartSummary } from "./CartSummary";
import styles from "../styles/cartPage.module.css";

export function Cart() {
   const { cartData, setCartData } = useOutletContext();

   return (
      <div className={styles["cart-page"]}>
         <section className={styles["cart-products"]}>
            <ul>
               {cartData.map((product) => (
                  <li key={product.id}>
                     <ProductRow
                        productData={product}
                        setCartData={setCartData}
                     />
                  </li>
               ))}
            </ul>
         </section>
         <CartSummary cartData={cartData} />
      </div>
   );
}
