export function removeProduct(id, setCartData) {
   setCartData((prev) => prev.filter((product) => product.id !== id));
}

export function increaseQuantity(id, setCartData) {
   setCartData((prev) =>
      prev.map((product) => {
         if (product.id === id) {
            return {
               ...product,
               quantity: product.quantity + 1,
            };
         } else return product;
      }),
   );
}

export function decreaseQuantity(id, setCartData) {
   setCartData((prev) =>
      prev
         .map((product) => {
            if (product.id === id) {
               return {
                  ...product,
                  quantity: product.quantity - 1,
               };
            } else return product;
         })
         .filter((product) => product.quantity > 0),
   );
}
