import { addToCart } from "../helper/addToCart";
import styles from "../styles/shopCard.module.css";

export function ShopCard(props) {
   const { data, cartData, setCartData } = props;
   const cartProduct = cartData.find((product) => product.id === data.id);

   return (
      <div className={styles["shop-card"]}>
         <div className={styles["info"]}>
            <div className={styles["image-wrapper"]}>
               <img src={data.image} className={styles["shop-image"]} />
            </div>
            <strong>{data.title}</strong>
         </div>
         <form
            className={styles.quantity}
            onSubmit={(event) => addToCart(event, data, cartData, setCartData)}
         >
            <input
               type="number"
               name="quantity"
               min={1}
               defaultValue={cartProduct ? cartProduct.quantity : ""}
               required
            ></input>
            <button type="submit" className={styles.btn}>
               Add to Cart
            </button>
         </form>
      </div>
   );
}
