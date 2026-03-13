import {
   increaseIndex,
   decreaseIndex,
   getRandomProducts,
} from "../helper/productSpotlight";
import { useEffect, useState } from "react";
import { SpotlightCard } from "./SpotlightCard";

export function ProductSpotlight(props) {
   const { productData } = props;
   const [currentIndex, setCurrentIndex] = useState(0);
   const [spotlightProducts, setSpotlightProducts] = useState([]);

   useEffect(() => {
      setSpotlightProducts(getRandomProducts(productData));
   }, [productData]);

   return (
      <section className="spotlight">
         <h2>FEATURED</h2>
         <div className="product-spotlight">
            <button
               onClick={() =>
                  setCurrentIndex(
                     decreaseIndex(currentIndex, spotlightProducts.length),
                  )
               }
            >
               {"<"}
            </button>

            {spotlightProducts.length && (
               <SpotlightCard data={spotlightProducts[currentIndex]} />
            )}

            <button
               onClick={() =>
                  setCurrentIndex(
                     increaseIndex(currentIndex, spotlightProducts.length),
                  )
               }
            >
               {">"}
            </button>
         </div>
      </section>
   );
}
