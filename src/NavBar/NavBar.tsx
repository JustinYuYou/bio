import Link from '@mui/material/Link';

export const NavBar = () => {
   return (
      <div className="nav-bar">
         <Link href="#skill" underline="hover" component="button">
            Skill
         </Link>
         <Link href="#experience" underline="hover" component="button">
            Experience
         </Link>
         <Link href="#project" underline="hover" component="button">
            Project
         </Link>
      </div>
   );
}