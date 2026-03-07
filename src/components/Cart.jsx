import { Link, useOutletContext } from "react-router";

/* eslint-disable no-unused-vars */
/* Above line used to stop unused var error for unused productData */

export function Cart() {
   const { productData } = useOutletContext;

   return (
      <>
         <Link to="/">Home</Link>
      </>
   );
}
