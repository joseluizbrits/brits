import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --primary: #692FA4;
    --primaryLight: #B576F5;
    --primaryDark: #4D1981;
    --primaryGradient: linear-gradient(to right, #692FA4, #764BA2, #8659B4);
    --secondary: #41F7EC;
    --tertiary: #D22AE8;
    --gradientOne: linear-gradient(to bottom, #862FA4 30%, #692FA4);
    --gradientTwo: linear-gradient(to bottom, #692FA4, #8A2A99);
    --gradientThree: linear-gradient(to bottom, #8A2A99 15%, #8DFFF8);
    --gradientTwoReverse: linear-gradient(to bottom, #8A2A99, #692FA4);
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--primaryGradient);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  .container {
    padding: 0 120px;
  }
`;

export default GlobalStyles;
