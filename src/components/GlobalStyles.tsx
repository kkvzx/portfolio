import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
 --text-color:white;
 --secondary-color:#ffdc85;
 --secondary-font: "Oswald", sans-serif;
 --additional-color:#FFB703;
 --background-color:#08324c;
}
*{
 box-sizing:border-box;
font-family:"Oswald", sans-serif;}
letter-spacing:1px;

body{
 margin:0;
 padding:0;
 background: white;
 /* background-image: radial-gradient(#3c3d43 1px, transparent 0);
 background-size: 30px 30px;
 background-position: -19px -19px; */
}
`;

export default GlobalStyles;

// background: linear-gradient(-45deg, #DFF6FF, #47B5FF, #1363DF, #06283D);
// #FFB703 -- orange
