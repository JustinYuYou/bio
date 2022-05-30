import React from 'react'

interface User {
   name: string,
   skills: string[],
}

const UserContext = React.createContext({
   name: "JJ Yu",
   skills: [],
} as User);
export { UserContext }