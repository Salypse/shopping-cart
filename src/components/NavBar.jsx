import { Link } from "react-router";

export function NavBar(props) {
   const { cartData } = props;

   const cartQuantity = cartData.reduce((accumulator, product) => {
      return accumulator + product.quantity;
   }, 0);

   return (
      <nav>
         <strong>Shopping</strong>
         <Link to="/">Home</Link>
         <Link to="/shop">Shop</Link>
         <div className="cart-nav">
            <Link to="/cart">Cart</Link>
            {cartQuantity > 0 && <p>{cartQuantity}</p>}
         </div>
      </nav>
   );
}
