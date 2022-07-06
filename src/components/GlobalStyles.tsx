import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
 --text-color:#dfdfdf;
 --secondary-color:#ffdc85;
 --secondary-font: "Oswald", sans-serif;
 --additional-color:#FFB703;
 --background-color:#08324c;
 --green-color:#054a23;
 --text-size:1.3rem;
 --text-sizeMobile:0.8rem;
 --big-font-size:5rem;
 --big-font-sizeMobile:3rem;
 --h2-font-size:2.2rem;
 --h2-font-sizeMobile:1.3rem;
}
*{
 box-sizing:border-box;
font-family:"Oswald", sans-serif;}
letter-spacing:1px;

body{
 margin:0;
 padding:0;
 background: white;
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
