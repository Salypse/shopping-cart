import { Link } from "react-router";

export function Homepage() {
   return (
      <>
         <Link to="/shop">Shop</Link>
         <Link to="/cart">Cart</Link>
      </>
   );
}
