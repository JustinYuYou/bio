import React, { useContext } from 'react';
import { UserContext } from '../globalContext';
import { NavBar } from '../NavBar/NavBar';
import { ContactButtons } from './ContactButton';

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

   return (<div>
      <p>
         Hello, my name is
      </p>
      <h2>{user.name}</h2>
      <p>
         , a passionate software enginner with expereience in AWS, web development, and mobile development
      </p>
      <ContactButtons user={user}></ContactButtons>
   </div>)
}