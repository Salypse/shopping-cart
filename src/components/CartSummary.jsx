export function CartSummary(props) {
   const { cartData } = props;

   const taxPrice = 9.99;
   const shippingPrice = 4.99;
   const itemPrice = Number(
      cartData
         .reduce((accumulator, product) => {
            const productTotal = product.price * product.quantity;
            return accumulator + productTotal;
         }, 0)
         .toFixed(2),
   );

   return (
      <div className="cart-summary">
         <h3>Order Summary</h3>
         <p>Subtotal: ${itemPrice}</p>
         {itemPrice > 0 && (
            <>
               <p>Sales Tax: ${taxPrice}</p>
               <p>Shipping Cost: ${shippingPrice}</p>
            </>
         )}

         <strong>
            Order Total: $
            {itemPrice > 0
               ? (itemPrice + shippingPrice + taxPrice).toFixed(2)
               : 0}
         </strong>
         <a target="_blank" href="https://www.youtube.com/watch?v=QDia3e12czc">
            Checkout
         </a>
      </div>
   );
}
