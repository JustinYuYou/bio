import React, { useContext } from 'react';
import { UserContext } from '../globalContext';

export const BackgroundImageHeader = () => {
   return (
      <div>
         <IntroDescription ></IntroDescription>
      </div>
   );
}

const IntroDescription = () => {
   const user = useContext(UserContext);

   return (<><p>
      Hi, my name is
   </p>
      <h2>{user.name}</h2>
   </>)
}