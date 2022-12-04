import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

/* background: rgb(233,246,7);
background: linear-gradient(90deg, rgba(233,246,7,1) 0%, rgba(240,240,242,1) 50%, rgba(0,214,255,1) 100%); */
  
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
