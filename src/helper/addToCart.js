export function addToCart(event, data, cartData, setCartData) {
   event.preventDefault();
   const quantity = Number(event.target.quantity.value);

   //Check if item added to cart has already been added then update it quantity
   if (cartData.some((product) => product.id == data.id)) {
      const updatedCartData = cartData.map((product) => {
         if (product.id == data.id) {
            return {
               ...product,
               quantity: quantity,
            };
         }
         return product;
      });
      setCartData(updatedCartData);
   }
   //If item is not in cart data make a new object for it
   else {
      const newCartData = {
         id: data.id,
         title: data.title,
         price: data.price,
         quantity: quantity,
         image: data.image,
      };

      setCartData([...cartData, newCartData]);
   }
}
