import { createGlobalStyle } from "styled-components";

interface props {
  darkMode: boolean;
}

const GlobalStyles = createGlobalStyle<props>`
:root{
 --text-color:${(p) => (p.darkMode ? "#dfdfdf" : "black")};
 --secondary-color:#ffdc85;
 --secondary-font: "Oswald", sans-serif;
 --additional-color:${(p) => (p.darkMode ? "#FFB703" : "#b3b5f8")};
 --background-color:${(p) => (p.darkMode ? "#08324c" : "#DDF0FF")};
 --dark-header-color:${(p) => (p.darkMode ? "#06283d" : "#b3f8f6")};
 --dark-logo-color:${(p) => (p.darkMode ? "#041926" : "#b3b5f8")};
 --animated-logo-color:${(p) => (p.darkMode ? "white" : "black")};
 --text-size:1.6rem;
 --text-sizeMobile:1rem;
 --big-font-size:5rem;
 --big-font-sizeMobile:3rem;
 --h2-font-size:2.2rem;
 --h2-font-sizeMobile:1.3rem;
 --project-box-color:${(p) =>
   p.darkMode ? "rgba(6, 40, 61, 0.95)" : "rgba(176, 216, 251, 0.95)"};
  --project-box-singleContainer:${(p) =>
    p.darkMode ? "#0e5581" : "rgba(176, 216, 251, 0.9)"};
 
}
*{
 box-sizing:border-box;
font-family:"Oswald", sans-serif;}
letter-spacing:1px;

body{
 margin:0;
 padding:0;
 background: var(--background-color);
overflow-x:hidden;
overflow-y:scroll;

 /* background-image: radial-gradient(#3c3d43 1px, transparent 0);
 background-size: 30px 30px;
 background-position: -19px -19px; */
}
`;

export default GlobalStyles;

// background: linear-gradient(-45deg, #DFF6FF, #47B5FF, #1363DF, #06283D);
// #FFB703 -- orange
