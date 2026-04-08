import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { NavBar } from "./NavBar";

export function App() {
   const [productData, setProductData] = useState([]);
   const [cartData, setCartData] = useState(
      JSON.parse(localStorage.getItem("userData")) || [],
   );
   const [error, setError] = useState(undefined);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("https://fakestoreapi.com/products")
         .then((response) => {
            if (response.status >= 400) {
               throw new Error(
                  `Request failed: ${response.status} ${response.statusText}`,
               );
            }
            return response.json();
         })
         .then((data) => setProductData(data))
         .catch((error) => setError(error))
         .finally(() => setLoading(false));
   }, []);

   if (loading) return <p> Loading...</p>;
   if (error) return <p>A network error has occurred</p>;
   return (
      <>
         <NavBar cartData={cartData} />
         <Outlet
            context={{ productData, setProductData, cartData, setCartData }}
         />
      </>
   );
}
