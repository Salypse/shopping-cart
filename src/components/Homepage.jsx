import { Link, useOutletContext } from "react-router";
import { ProductSpotlight } from "./ProductSpotlight";
import { BestSellers } from "./BestSellers";
import styles from "../styles/homepage.module.css";

export function Homepage() {
   const { productData } = useOutletContext();

   return (
      <>
         <ProductSpotlight productData={productData} />
         <Link to="/shop" className={styles.link}>
            SHOP NOW!
         </Link>
         <BestSellers productData={productData} />
      </>
   );
}
