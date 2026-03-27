import { Link } from "react-router";
import styles from "../styles/errorPage.module.css";

export function ErrorPage() {
   return (
      <div className={styles["error-page"]}>
         <h1>This page doesn't exist</h1>
         <Link to="/">Home Page</Link>
      </div>
   );
}
