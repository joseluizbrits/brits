import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --primary: #692FA4;
    --primaryLight: #B576F5;
    --primaryLightShadow: rgba(181, 118, 245, 0.2);
    --primaryDark: #4D1981;
    --primaryGradient: linear-gradient(to right, #692FA4, #764BA2, #8659B4);
    --secondary: #41F7EC;
    --secondaryShadow: rgba(65, 247, 236, 0.8);
    --tertiary: #D22AE8;
    --tertiaryShadow: rgba(210, 42 , 232, 0.9);
    --warning: #FB4B4B;
    --gradientOne: linear-gradient(to bottom, #862FA4 30%, #692FA4);
    --gradientTwo: linear-gradient(to bottom, #692FA4, #8A2A99);
    --gradientThree: linear-gradient(to bottom, #8A2A99 15%, #8DFFF8);
    --gradientTwoToPrimary: linear-gradient(to bottom, #692fa4, #8A2A99, #692FA4 99%);
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

  html,
  body {
    scroll-snap-type: y mandatory;
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

  input, textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }

  .container {
    padding: 0 120px;
  }

  .scroll-align {
    scroll-snap-align: start;
  }

  @media screen and (max-width: 1440px) {
    .container {
      padding: 0 80px;
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      padding: 0 40px;
    }
  }
`;

export default GlobalStyles;
