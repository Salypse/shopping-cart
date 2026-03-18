import { Link, useOutletContext } from "react-router";
import { ProductRow } from "./ProductRow";
import { CartSummary } from "./CartSummary";

export function Cart() {
   const { cartData, setCartData } = useOutletContext();

   return (
      <>
         <Link to="/">Home</Link>
         <section className="cart-products">
            <ul>
               {cartData.map((product) => (
                  <li key={product.id}>
                     <ProductRow
                        productData={product}
                        setCartData={setCartData}
                     />
                  </li>
               ))}
            </ul>
         </section>
         <CartSummary cartData={cartData} />
      </>
   );
}
