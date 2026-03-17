export function ProductRow({ productData }) {
   return (
      <div className="product-row">
         <img src={productData.image} />
         <h3>{productData.title}</h3>
         <strong>${productData.price}</strong>
         <p>Quantity: {productData.quantity}</p>
      </div>
   );
}
