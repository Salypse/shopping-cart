import { useState } from "react";
import { addToCart } from "../helper/addToCart";
import styles from "../styles/shopCard.module.css";

export function ShopCard(props) {
   const { data, cartData, setCartData } = props;
   const [quantity, setQuantity] = useState(0);

   return (
      <div className={styles["shop-card"]}>
         <div className={styles["info"]}>
            <div className={styles["image-wrapper"]}>
               <img src={data.image} className={styles["shop-image"]} />
            </div>
            <strong>{data.title}</strong>
         </div>
         <form
            className={styles["cart-options"]}
            onSubmit={(event) => addToCart(event, data, cartData, setCartData)}
         >
            <div className={styles.quantity}>
               <button
                  type="button"
                  className={styles["quantity-btn"]}
                  onClick={() => {
                     setQuantity((prev) => (prev - 1 > 0 ? prev - 1 : 0));
                  }}
               >
                  -
               </button>
               <input
                  type="number"
                  name="quantity"
                  min={1}
                  defaultValue={quantity > 0 ? quantity : ""}
                  required
               ></input>
               <button
                  type="button"
                  className={styles["quantity-btn"]}
                  onClick={() => {
                     setQuantity((prev) => prev + 1);
                  }}
               >
                  +
               </button>
            </div>
            <button type="submit" className={styles.btn}>
               Add to Cart
            </button>
         </form>
      </div>
   );
}
