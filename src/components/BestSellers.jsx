import styles from "../styles/bestSellers.module.css";

export function BestSellers(props) {
   const bestSellerId = [3, 7, 13, 14, 20];
   const { productData } = props;
   const bestSelling = productData.filter((product) =>
      bestSellerId.includes(product.id),
   );

   return (
      <section className={styles["best-sellers"]}>
         <h2>BEST SELLING PRODUCTS</h2>
         <ul className={styles.products}>
            {bestSelling.map((product) => (
               <li key={product.title} className={styles["product-card"]}>
                  <img
                     src={product.image}
                     className={styles["product-image"]}
                  />
                  <p>{product.title}</p>
               </li>
            ))}
         </ul>
      </section>
   );
}
