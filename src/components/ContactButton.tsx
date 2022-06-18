import { User } from "../globalContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton/IconButton";

const LinkedInButton = ({ linkedinURL }: { linkedinURL: string }) =>
   <a href={linkedinURL} target="_blank" rel="noreferrer">
      <IconButton>
         <LinkedInIcon sx={{ color: "white" }} />
      </IconButton>
   </a>;

const GithubButton = ({ githubURL }: { githubURL: string }) =>
   <a href={githubURL} target="_blank" rel="noreferrer">
      <IconButton>
         <GitHubIcon sx={{ color: "white" }} />
      </IconButton>
   </a>;

const MailButton = ({ email }: { email: string }) =>
   <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
      <IconButton>
         <MailIcon sx={{ color: "white" }} />
      </IconButton>
   </a>;

const ContactButtons = ({ user }: { user: User }) => (
   <div className="contact-buttons">
      <LinkedInButton linkedinURL={user.linkedinURL}></LinkedInButton>
      <GithubButton githubURL={user.githubURL} ></GithubButton>
      <MailButton email={user.email}></MailButton>
   </div>);


export { LinkedInButton, GithubButton, MailButton, ContactButtons }