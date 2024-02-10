import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400&display=swap');

:root{
  //Colors
  --bg-main:#ebebeb;
  --gray-bg:#2b2b2c;
  --skyblue-txt: #7396ec;
  --font-primary:#fffffe;



  --font-Josefin:'Josefin Sans', sans-serif;
  --font-Karla:'Karla', sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font: inherit;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--skyblue-txt) #ededed;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #ededed;
  }

  *::-webkit-scrollbar-thumb {
    background-color:  var(--skyblue-txt);
    border-radius: 0px;
    border: 0px solid #ffffff;
  }

html{
  scroll-behavior: smooth;
}

body{
  background-color: var(--bg-main);
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
 h1,h2,h3,h4,h5,h6{
  font-family: var(--font-Josefin);
} 


 p, ul,li{
  font-family: var(--font-Karla);
} 

footer{
  //position: absolute;
  bottom: 0;
}
`;
