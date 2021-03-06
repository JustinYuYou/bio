import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContext } from './globalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{
      name: "Justin Yu",
      skills: ["TypeScript", "JavaScript"],
      linkedinURL: "https://www.linkedin.com/in/yu-chen-ting",
      githubURL: "https://github.com/JustinYuYou",
      email: "chentingyu0117@gmail.com",
    }}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
