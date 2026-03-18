import { Link, useOutletContext } from "react-router";
import { ProductSpotlight } from "./ProductSpotlight";
import { BestSellers } from "./BestSellers";

export function Homepage() {
   const { productData } = useOutletContext();

   return (
      <>
         <ProductSpotlight productData={productData} />
         <Link to="/shop">SHOP NOW!</Link>
         <BestSellers productData={productData} />
      </>
   );
}
