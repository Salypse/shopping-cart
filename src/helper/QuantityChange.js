export function removeProduct(id, setCartData) {
   setCartData((prev) => {
      const updatedData = prev.filter((product) => product.id !== id);
      localStorage.setItem("userData", JSON.stringify(updatedData));
      return updatedData;
   });
}

export function increaseQuantity(id, setCartData) {
   setCartData((prev) => {
      const updatedData = prev.map((product) => {
         if (product.id === id) {
            return {
               ...product,
               quantity: product.quantity + 1,
            };
         } else return product;
      });
      localStorage.setItem("userData", JSON.stringify(updatedData));
      return updatedData;
   });
}

export function decreaseQuantity(id, setCartData) {
   setCartData((prev) => {
      const updatedData = prev
         .map((product) => {
            if (product.id === id) {
               return {
                  ...product,
                  quantity: product.quantity - 1,
               };
            } else return product;
         })
         .filter((product) => product.quantity > 0);
      localStorage.setItem("userData", JSON.stringify(updatedData));
      return updatedData;
   });
}
