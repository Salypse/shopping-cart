import styles from "../styles/spotlightCard.module.css";
import buttonStyles from "../styles/productSpotlight.module.css";
import { decreaseIndex, increaseIndex } from "../helper/productSpotlight";

export function SpotlightCard(props) {
   const { data, setCurrentIndex, spotlightProducts } = props;
   return (
      <div className={styles["spotlight-product"]}>
         <button
            onClick={() =>
               setCurrentIndex((prevIndex) =>
                  decreaseIndex(prevIndex, spotlightProducts.length),
               )
            }
            className={`${buttonStyles["spotlight-button"]} ${buttonStyles["left"]}`}
         >
            {"<"}
         </button>

         <div className={styles["image-wrapper"]}>
            <img
               src={data.image}
               alt=""
               className={styles["spotlight-image"]}
            />
         </div>
         <div className={styles["spotlight-info"]}>
            <strong>{data.title}</strong>
            <p>
               {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
            </p>
            <p className={styles["spotlight-price"]}>${data.price}</p>
         </div>

         <button
            onClick={() =>
               setCurrentIndex((prevIndex) =>
                  increaseIndex(prevIndex, spotlightProducts.length),
               )
            }
            className={`${buttonStyles["spotlight-button"]} ${buttonStyles["right"]}`}
         >
            {">"}
         </button>
      </div>
   );
}
