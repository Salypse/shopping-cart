export function ShopCard(props) {
   const { data } = props;

   return (
      <div>
         <div className="product-info">
            <img src={data.image} />
            <p>{data.title}</p>
         </div>
         <form className="product-quantity">
            <input type="number" name="quantity" min={0} required></input>
            <button type="submit">Add to Cart</button>
         </form>
      </div>
   );
}
