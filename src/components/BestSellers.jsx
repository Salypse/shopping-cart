export function BestSellers(props) {
   const bestSellerId = [3, 7, 13, 14, 20];
   const { productData } = props;
   const bestSelling = productData.filter((product) =>
      bestSellerId.includes(product.id),
   );

   return (
      <section className="best-sellers">
         <h2>BEST SELLING PRODUCTS</h2>
         <ul>
            {bestSelling.map((product) => (
               <li key={product.title}>
                  <img src={product.image} />
                  <p>{product.title}</p>
               </li>
            ))}
         </ul>
      </section>
   );
}
