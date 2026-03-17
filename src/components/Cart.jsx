import { Link, useOutletContext } from "react-router";
import { ProductRow } from "./ProductRow";

export function Cart() {
   const { cartData } = useOutletContext();
   return (
      <>
         <Link to="/">Home</Link>
         <section className="cart-products">
            <ul>
               {cartData.map((product) => (
                  <li>
                     <ProductRow productData={product} />
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
}
