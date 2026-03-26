import {
   removeProduct,
   increaseQuantity,
   decreaseQuantity,
} from "../helper/QuantityChange";
import styles from "../styles/productRow.module.css";

export function ProductRow({ productData, setCartData }) {
   return (
      <div className={styles["product-row"]}>
         <div className={styles["img-wrapper"]}>
            <img src={productData.image} className={styles["img"]} />
         </div>
         <div className={styles["product-wrapper"]}>
            <div className={styles["product-data"]}>
               <strong>{productData.title}</strong>
               <strong>${productData.price}</strong>
            </div>
            <div className={styles["product-quantity"]}>
               <p>Quantity: {productData.quantity}</p>
               <div>
                  <button
                     className={styles["btn"]}
                     onClick={() =>
                        increaseQuantity(productData.id, setCartData)
                     }
                  >
                     ⬆
                  </button>
                  <button
                     className={styles["btn"]}
                     onClick={() =>
                        decreaseQuantity(productData.id, setCartData)
                     }
                  >
                     ⬇
                  </button>
               </div>
               <button
                  className={`${styles["delete"]} ${styles["btn"]}`}
                  onClick={() => removeProduct(productData.id, setCartData)}
               >
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
}
