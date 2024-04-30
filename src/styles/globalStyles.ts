import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #692FA4;
    --primary-light: #B576F5;
    --primary-dark: #4D1981;
    --primary-dark-40: rgba(77, 25, 129, 0.4);
    --primary-gradient: linear-gradient(to right, #692FA4, #764BA2, #8659B4);
    --secondary: #D22AE8;
    --secondary-light: #F0A6FA;
    --secondary-20: rgba(210, 42 , 232, 0.2);
    --secondary-40: rgba(210, 42 , 232, 0.4);
    --tertiary: #41F7EC;
    --tertiary-light: #A3FDF7;
    --tertiary-20: rgba(65, 247 , 236, 0.2);
    --warning: #FB4B4B;
    --white: #FFFFFF;
    --gray: #CBB5E1;
    --gray-light: #F7EFFF;
    --black-5: rgba(0, 0, 0, 0.05);
    --black-10: rgba(0, 0, 0, 0.1);
    --gradient-1: linear-gradient(to bottom, #862FA4 30%, #692FA4);
    --gradient-2: linear-gradient(to bottom, #692FA4, #8A2A99);
    --gradient-3: linear-gradient(to bottom, #8A2A99 15%, #8DFFF8);
    --bg-1: #320F56;
    --bg-2: #220341;
    --bg-3: #2E1746;
    --bg-4: #2D213A;
    --bg-5: #271A34;
    --bg-6: #1E0B32;
    --bg-7: #16012B;
    --gap: 200px;
  }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--bg-2);
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
    padding: 0 240px;
  }

  .skeleton {
    background: linear-gradient(
    110deg,
    var(--black-10) 8%,
    var(--black-5) 18%,
    var(--black-10) 33%
    );
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    animation-delay: 0.3s;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  /* ---------- SCROLLBAR ---------- */

  *::-webkit-scrollbar,
  body::-webkit-scrollbar,
  html::-webkit-scrollbar {
    background: transparent;
    width: 6px;
    height: 12px;
  }

  *::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  html::-webkit-scrollbar-thumb {
    background: var(--tertiary-20);
    border-radius: 35px;
  }

  *::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  html::-webkit-scrollbar-thumb:hover {
    background: var(--tertiary);
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

  @media screen and (max-width: 1680px) {
    .container {
      padding: 0 120px;
    }
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
      padding: 0 16px;
    }

    :root {
      --gap: 140px
    }
  }
`;

export default GlobalStyles;
