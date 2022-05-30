import React from 'react'

export interface User {
   name: string,
   skills: string[],
   linkedinURL: string,
   githubURL: string,
   email: string,
}

const UserContext = React.createContext({
   name: "JJ Yu",
   skills: [],
   linkedinURL: "",
   githubURL: "",
   email: "",
} as User);

export { UserContext }