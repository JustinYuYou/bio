import { useContext } from "react";
import { UserContext, User } from "../globalContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton/IconButton";

export const Footer = () => {
   const user = useContext(UserContext);
   return (
      <footer id="footer">
         <ContactButtons user={user}></ContactButtons>
         <p> Copyright @ {new Date().getFullYear()} All Rights Reserved by {user.name} </p>
      </footer>)
}

const LinkedInButton = ({ user }: { user: User }) => <a href={user.linkedinURL} target="_blank" rel="noreferrer">
   <IconButton>
      <LinkedInIcon />
   </IconButton>
</a>;

const GithubButton = ({ user }: { user: User }) => <a href={user.githubURL} target="_blank" rel="noreferrer">
   <IconButton>
      <GitHubIcon />
   </IconButton>
</a>;

const MailButton = ({ user }: { user: User }) => <a href={`mailto:${user.email}`} target="_blank" rel="noreferrer">
   <IconButton>
      <MailIcon />
   </IconButton>
</a>;

const ContactButtons = ({ user }: { user: User }) => (
   <div>
      <LinkedInButton user={user}></LinkedInButton>
      <GithubButton user={user}></GithubButton>
      <MailButton user={user}></MailButton>
   </div>);