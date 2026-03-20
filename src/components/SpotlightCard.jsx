import styles from "../styles/spotlightCard.module.css";

export function SpotlightCard(props) {
   const { data } = props;
   return (
      <div className={styles["spotlight-product"]}>
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
      </div>
   );
}
