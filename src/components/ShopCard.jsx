import { addToCart } from "../helper/addToCart";

export function ShopCard(props) {
   const { data, cartData, setCartData } = props;

   return (
      <div>
         <div className="product-info">
            <img src={data.image} />
            <p>{data.title}</p>
         </div>
         <form
            className="product-quantity"
            onSubmit={(event) => addToCart(event, data, cartData, setCartData)}
         >
            <input type="number" name="quantity" min={1} required></input>
            <button type="submit">Add to Cart</button>
         </form>
      </div>
   );
}
