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

   useEffect(() => {
      if (!spotlightProducts.length) return;

      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) =>
            increaseIndex(prevIndex, spotlightProducts.length),
         );
      }, 5000);

      return () => clearInterval(interval);
   }, [spotlightProducts]);

   return (
      <section className="spotlight">
         <h2>FEATURED</h2>
         <div className="product-spotlight">
            <button
               onClick={() =>
                  setCurrentIndex((prevIndex) =>
                     decreaseIndex(prevIndex, spotlightProducts.length),
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
                  setCurrentIndex((prevIndex) =>
                     increaseIndex(prevIndex, spotlightProducts.length),
                  )
               }
            >
               {">"}
            </button>
         </div>
      </section>
   );
}
