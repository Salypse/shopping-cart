import { Link, useOutletContext } from "react-router";
import { ShopCard } from "./ShopCard";
export function Shop() {
   const { productData } = useOutletContext();

   return (
      <>
         <Link to="/">Home</Link>
         <section className="shop-products">
            <ul>
               {productData.map((product) => (
                  <li key={product.id}>
                     <ShopCard data={product} />
                  </li>
               ))}
            </ul>
         </section>
      </>
   );
}
