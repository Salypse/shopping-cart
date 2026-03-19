import { Link } from "react-router";
import styles from "../styles/navBar.module.css";
import cartIcon from "../assets/cart-icon.svg";

export function NavBar(props) {
   const { cartData } = props;

   const cartQuantity = cartData.reduce((accumulator, product) => {
      return accumulator + product.quantity;
   }, 0);

   return (
      <nav className={styles.nav}>
         <strong>Shopping</strong>
         <div className={styles["page-nav"]}>
            <Link to="/" className={styles["page-link"]}>
               Home
            </Link>
            <Link to="/shop" className={styles["page-link"]}>
               Shop
            </Link>
         </div>
         <div className={styles["cart-nav"]}>
            <Link to="/cart" className={styles["page-link"]}>
               <img src={cartIcon} className={styles["cart-icon"]} />
            </Link>
            {cartQuantity > 0 && <p>({cartQuantity})</p>}
         </div>
      </nav>
   );
}
