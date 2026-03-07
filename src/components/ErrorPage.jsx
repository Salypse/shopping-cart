import { Link } from "react-router";

export function ErrorPage() {
   return (
      <div>
         <h1>This page doesn't exist</h1>
         <Link to="/">Home Page</Link>
      </div>
   );
}
