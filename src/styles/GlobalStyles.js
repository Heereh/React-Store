import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

:root{
  //Colors
  --gray-bg:#2b2b2c;
  --skyblue-txt: #7396ec;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font: inherit;
}

html{
  scroll-behavior: smooth;
}

body{
  min-height: 100%;
  margin: 0;
  position: relative;
}

img, video, svg{
  display: block;
  height: auto;
  max-width: 100%;
}

a:visited{
  text-decoration: white;
}
/* h1,h2,h3,h4,h5,h6{
  text-wrap:balance
} */

/* p{
  text-wrap:pretty
} */
`;
