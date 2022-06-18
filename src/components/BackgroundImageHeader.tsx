import React, { useContext } from 'react';
import { UserContext } from '../globalContext';
import { NavBar } from '../NavBar/NavBar';
import { ContactButtons } from './ContactButton';
import "./BackgroundImageHeader.css";

export const BackgroundImageHeader = () => {
   return (
      <div className='header-backgroundimage'>
         <NavBar></NavBar>
         <IntroDescription ></IntroDescription>
      </div>
   );
}



const IntroDescription = () => {
   const user = useContext(UserContext);

   return (
      <div className='header-description'>
         <p>
            Hello, my name is
         </p>
         <h2>{user.name}</h2>
         <p>
            a software enginner passionate in AWS, web development, and mobile development
         </p>
         <ContactButtons user={user}></ContactButtons>
      </div>)
}