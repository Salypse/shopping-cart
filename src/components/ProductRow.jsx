import {
   removeProduct,
   increaseQuantity,
   decreaseQuantity,
} from "../helper/QuantityChange";

export function ProductRow({ productData, setCartData }) {
   return (
      <div className="product-row">
         <img src={productData.image} />
         <h3>{productData.title}</h3>
         <strong>${productData.price}</strong>
         <p>Quantity: {productData.quantity}</p>
         <div className="product-quantity">
            <div className="quantity">
               <button
                  onClick={() => increaseQuantity(productData.id, setCartData)}
               >
                  ⬆
               </button>
               <button
                  onClick={() => decreaseQuantity(productData.id, setCartData)}
               >
                  ⬇
               </button>
            </div>
            <button onClick={() => removeProduct(productData.id, setCartData)}>
               Delete
            </button>
         </div>
      </div>
   );
}
