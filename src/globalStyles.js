const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
*::before, *::after, h1, h2, h3, h4, h5, h6{
 margin: 0;
 padding: 0;
}
h1,h2, h3, h4, h5, h6{
 display: inline-block;
}

*::-webkit-scrollbar {
  width: 0px;
}


button { user-select: none; }

body{
 margin: 0;
 padding: 0;
 overflow-x: hidden;
 font-family: 'Source Sans Pro', sans-serif;
 -webkit-tap-highlight-color: rgba(0,0,0,0);

}`;

export default GlobalStyle;
