import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

:root {
--color-black: #111111;
--color-dark-purple: #1E1823;
--color-orange: #FD9222;
--color-white: #FFFFFF;
--color-background: #FAFAFA;
--color-overlay: #rgba(0, 0, 0, 0.7)
}


   body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

body{
    margin:0;
    padding: 0;
    color: grey;
    background: linear-gradient(to left, silver, black);
}

ul{
    margin: 0px;
    padding: 0;
    list-style:none;
}

p{
    margin:0px;
    padding: 0;
}

ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

button {
  padding: 17px 28px;
  font-size: 1.2rem;
  color: var(--color-white);
  font-weight:600;
  background-color: transparent;
  border: 1px solid var(--color-orange);
  border-radius: 12px;
  cursor: pointer;
}

button:hover,
button:focus {
  /* color: var(--color-dark-purple); */
  background: var(--color-orange);
}


line {
  display: block;
  width: 40px;
  height: 3px;
  margin: 5px auto;
  background-color: var(--color-orange);
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

section {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.secondary-section {
  /* background: #303030; */
  align-items: flex-end;
  background: linear-gradient(to right, silver, black);
}

section h2 {
  font-size: 5rem;
  mix-blend-mode: 2rem;
}

/* #root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 150px;
  margin-top: 100px;
} */

`;

// :root {
//   --accent-color: #9bb537;
//   --primary-text-color: #050505;
//   --secondary-text-color: #ffffff;
//   --primary-text-color-08: rgba(5, 5, 5, 0.8);
//   --primary-text-color-05: rgba(5, 5, 5, 0.5);
//   --primary-text-color-03: rgba(5, 5, 5, 0.3);
//   --primary-text-color-02: rgba(5, 5, 5, 0.2);
//   --dark-theme-text-color-08: rgba(255, 255, 255, 0.8);
//   --dark-theme-text-color-05: rgba(255, 255, 255, 0.5);
//   --dark-theme-text-color-03: rgba(255, 255, 255, 0.3);
//   --dark-theme-text-color-02: rgba(255, 255, 255, 0.2);
//   --light-text-color: #f8f8f8;
//   --switch-bg-off-color: #cecdcd;
//   --light-background-color: #f8f8f8;
//   --dark-background-color: #161616;

//   --animation-set: 400ms cubic-bezier(0.4, 0, 0.2, 1);
//   --cubic: cubic-bezier(0.4, 0, 0.2, 1);
// }

// /* body.scroll-hidden {
//   overflow: hidden;
// } */

// h1,
// h2,
// h3,
// h4,
// p {
//   margin: 0;
// }

// html {
//   scroll-behavior: smooth;
// }

// body {
//   /* width: 100vw; */
//   margin: 0;
//   padding: 0;
//   font-family: 'Inter', sans-serif;
//   overflow-x: hidden;

//   background-color: var(--light-background-color);
//   color: var(--primary-main-color);
// }

// ul {
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }

// a {
//   display: block;
//   color: currentColor;
//   text-decoration: none;
//   cursor: pointer;
// }

// button {
//   cursor: pointer;
// }

// img {
//   display: block;
// }

// .container {
//   max-width: 1280px;
//   margin: auto;
//   /* outline: 1px solid green; */
// }

// .visually-hidden {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   margin: -1px;
//   border: 0;
//   padding: 0;

//   white-space: nowrap;
//   clip-path: inset(100%);
//   clip: rect(0 0 0 0);
//   overflow: hidden;
// }

// /* Mobile */
// @media screen and (max-width: 374px) {
//   .container {
//     width: 100vw;
//     padding: 0 8px;
//   }
// }

// @media screen and (min-width: 375px) {
//   .container {
//     width: 375px;
//     padding: 0 20px;
//   }
// }

// /* Tablet */
// @media screen and (min-width: 768px) {
//   .container {
//     width: 768px;
//     padding-left: 32px;
//     padding-right: 32px;
//   }

//   .container.categories,
//   .container.popular {
//     width: 176px;
//     padding: 0;
//   }

//   .container.filter,
//   .container.cards {
//     width: 496px;
//     padding: 0;
//   }

//   .tablet-desktop {
//     display: flex;
//     justify-content: space-between;
//     width: 768px;
//     padding: 0 32px;
//     margin: 0 auto;
//     /* outline: 1px solid blue; */
//   }
// }

// /* Desktop */
// @media screen and (min-width: 1280px) {
//   .container {
//     width: 1280px;
//     padding: 0 100px;
//   }

// :root {
//   --color-black: #111111;
//   --color-dark-purple: #1E1823;
//   --color-orange: #FD9222;
//   --color-white: #FFFFFF;
//   --color-background: #FAFAFA;
// }

// .container {
//   max-width: 375px;
//   padding-left: 20px;
//   padding-right: 20px;
//   margin-left: auto;
//   margin-right: auto;
// }

// @media screen and (min-width: 768px) {
//   .container {
//      padding-left: 32px;
//      padding-right: 32px;
//      max-width: 768px;
//   }
// }

// @media screen and (min-width: 1200px) {
//   .container {
//      max-width: 1200px;
//   }
// }

// .visually-hidden {
// position: absolute;
// width: 1px;
// height: 1px;
// margin: -1px;
// padding: 0;
// overflow: hidden;
// border: 0;
// clip: rect(0 0 0 0);
// }

// body {
//   font-family: 'Montserrat', sans-serif;
//   color: var(--color-black);
//   font-size: 14px;
//   letter-spacing: -0.02em;
//   line-height: 1.28;
//   background-color: var(--color-background);
// }

// html {
//   scroll-behavior: smooth;
// }
