import { useState } from "react";
import { increaseIndex, decreaseIndex } from "../helper/productSpotlight";

export function ProductSpotlight(props) {
   const { productData } = props;
   const [currentIndex, setCurrentIndex] = useState(0);

   return (
      <section className="product-spotlight">
         <button
            onClick={() =>
               setCurrentIndex(decreaseIndex(currentIndex, productData.length))
            }
         >
            {"<"}
         </button>
         <button
            onClick={() =>
               setCurrentIndex(increaseIndex(currentIndex, productData.length))
            }
         >
            {">"}
         </button>
      </section>
   );
}
