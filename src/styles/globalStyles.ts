import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --primary: #692FA4;
    --primaryLight: #B576F5;
    --primaryLightShadow: rgba(181, 118, 245, 0.2);
    --primaryDark: #4D1981;
    --primaryDarkShadow: rgba(77, 25, 129, 0.8);
    --primaryDarkClear: rgba(77, 25, 129, 0.2);
    --primaryGradient: linear-gradient(to right, #692FA4, #764BA2, #8659B4);
    --secondary: #41F7EC;
    --secondaryShadow: rgba(65, 247, 236, 0.8);
    --secondaryClear: rgba(65, 247, 236, 0.2);
    --tertiary: #D22AE8;
    --tertiaryShadow: rgba(210, 42 , 232, 0.9);
    --tertiaryClear: rgba(210, 42 , 232, 0.2);
    --warning: #FB4B4B;
    --blogBody: #220341;
    --blogText: #F7EFFF;
    --gradientOne: linear-gradient(to bottom, #862FA4 30%, #692FA4);
    --gradientTwo: linear-gradient(to bottom, #692FA4, #8A2A99);
    --gradientThree: linear-gradient(to bottom, #8A2A99 15%, #8DFFF8);
    --gradientTwoToPrimary: linear-gradient(to bottom, #692fa4, #8A2A99, #692FA4 99%);
    --shortTriangle: polygon(0 0, 100% 100%, 0 100%);
    --middleTriangle: polygon(0 0, 100.1% 0%, 50.1% 100%, 0% 100%);
    --middleTriangleBottom: polygon(0 0, 40% 0, 80% 100%, 0% 100%);
    --largeTriangle: polygon(0 0, 0% 100%, 100.3% 0);
    --aboutDeco: translateX(0);
    --me: circle(50% at 50% 50%);
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--primaryDark);
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

  /* ---------- SCROLLBAR ---------- */

  *::-webkit-scrollbar,
  body::-webkit-scrollbar,
  html::-webkit-scrollbar {
    background: var(--primaryGradient);
    width: 12px;
    height: 12px;
  }

  *::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  html::-webkit-scrollbar-thumb {
    background: var(--gradientOne);
    border-radius: 25px;
    border: 5px solid var(--primaryGradient);
  }

  *::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  html::-webkit-scrollbar-thumb:hover {
    background: var(--gradientThree);
  }

  /* LENIS SCROLL SMOOTH */

  html.lenis {
    height: auto;
  }

  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }

  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }

  .lenis.lenis-stopped {
    overflow: hidden;
  }

  .lenis.lenis-scrolling iframe {
    pointer-events: none;
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

  @media screen and (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      padding: 0 20px;
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-position:0% 97%
    }
    50% {
      background-position:100% 4%
    }
    100% {
      background-position:0% 97%
    }
  }
`;

export default GlobalStyles;
