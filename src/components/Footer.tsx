import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid, } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useContext } from "react"
import { UserContext } from "../globalContext"

export const Footer = () => {
   const user = useContext(UserContext);
   return (
      <footer id="footer">
         <div>
            <FontAwesomeIcon icon={regular('linkedin')} />
         </div>
         <p> Copyright @ {new Date().getFullYear()} All Rights Reserved by {user.name} </p>
      </footer>)
}