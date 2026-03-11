import { getCategories, filterData } from "../helper/filter";
import { useRef } from "react";

export function Filter(props) {
   const { productData, setFilteredItems } = props;
   const categories = getCategories(productData);
   const formRef = useRef(null);

   return (
      <>
         <form ref={formRef}>
            <legend>Filter Products</legend>
            <ul>
               {categories.map((category) => (
                  <li key={category}>
                     <div>
                        <input
                           type="radio"
                           id={`filter-${category}`}
                           name={`filter-option`}
                           onClick={() =>
                              setFilteredItems(
                                 filterData(productData, category),
                              )
                           }
                        ></input>
                        <label htmlFor={`filter-${category}`}>
                           {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                        </label>
                     </div>
                  </li>
               ))}
               <button
                  onClick={(event) => [
                     event.preventDefault(),
                     setFilteredItems(productData),
                     formRef.current.reset(),
                  ]}
               >
                  Clear Filter
               </button>
            </ul>
         </form>
      </>
   );
}
