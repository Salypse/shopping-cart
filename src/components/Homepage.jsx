import { Link, useOutletContext } from "react-router";

/* eslint-disable no-unused-vars */
/* Above line used to stop unused var error for unused productData */

export function Homepage() {
   const { productData } = useOutletContext();

   return (
      <>
         <Link to="/shop">Shop</Link>
         <Link to="/cart">Cart</Link>
      </>
   );
}
