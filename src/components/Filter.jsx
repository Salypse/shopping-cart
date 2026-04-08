import { getCategories, filterData } from "../helper/filter";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/filter.module.css";
import closeIcon from "../assets/close-icon.svg";

export function Filter(props) {
   const { productData, setFilteredItems, isActive, setIsActive } = props;
   const categories = getCategories(productData);
   const formRef = useRef(null);
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
      function handleResize() {
         setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <>
         <div
            className={`${styles["filter"]} ${isActive || width >= 1000 ? styles["active"] : ""}`}
         >
            <button
               className={styles["icon"]}
               onClick={() => setIsActive((prev) => !prev)}
            >
               <img src={closeIcon} />
            </button>
            <form ref={formRef} className={styles["form"]}>
               <legend>Filter Products</legend>
               <ul className={styles["form-options"]}>
                  {categories.map((category) => (
                     <li key={category}>
                        <div>
                           <input
                              type="radio"
                              id={`filter-${category}`}
                              name={`filter-option`}
                              onClick={() => {
                                 setFilteredItems(
                                    filterData(productData, category),
                                 );
                                 if (width < 1000) {
                                    setIsActive((prev) => !prev);
                                 }
                              }}
                           ></input>
                           <label htmlFor={`filter-${category}`}>
                              {category.charAt(0).toUpperCase() +
                                 category.slice(1)}
                           </label>
                        </div>
                     </li>
                  ))}
                  <button
                     className={styles["btn"]}
                     onClick={(event) => {
                        event.preventDefault();
                        setFilteredItems(productData);
                        if (width < 1000) {
                           setIsActive((prev) => !prev);
                        }
                        formRef.current.reset();
                     }}
                  >
                     Clear Filter
                  </button>
               </ul>
            </form>
         </div>
      </>
   );
}
