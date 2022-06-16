import { useContext } from "react";
import { UserContext } from "../globalContext";
import { ContactButtons } from "./ContactButton";
import "./Footer.css";

export const Footer = () => {
   const user = useContext(UserContext);
   return (
      <footer id="footer">
         <h1>Contact</h1>
         <ContactButtons user={user}></ContactButtons>
         <p className="copyright"> Copyright @ {new Date().getFullYear()} All Rights Reserved by {user.name} </p>
      </footer>)
}

