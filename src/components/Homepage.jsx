import { Link, useOutletContext } from "react-router";
import { ProductSpotlight } from "./ProductSpotlight";

export function Homepage() {
   const { productData } = useOutletContext();

   return (
      <>
         <Link to="/shop">Shop</Link>
         <Link to="/cart">Cart</Link>

         <ProductSpotlight productData={productData} />
      </>
   );
}
