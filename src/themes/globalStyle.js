import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/static/fonts/Poppins.woff');
  }

  body {
    background-color: #eee;
    color: #3c4858;
    font-size: 18px;
    margin: 0;
    font-family: Poppins, Arial, sans-serif;
    font-weight: 300;
    line-height: 1.5em;
  }

  box-shadow:
    0 10px 30px -12px rgba(0, 0, 0 , 0.42),
    0 4px 25px 0px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .whiteFont{
    color: #FFF
  }

  small {
    font-size: 80%;
  }

  blockquote p {
    font-style: italic;
  }

  a {
    color: #80d8ff;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #b5ffff;
    text-decoration: none;
  }

  legend {
    border-bottom: 0;
  }

  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
  }

  *:focus {
    outline: 0;
  }

  legend {
    margin-bottom: 20px;
    font-size: 21px;
  }

  output {
    padding-top: 8px;
    font-size: 14px;
    line-height: 1.42857;
  }

  label {
    font-size: 14px;
    line-height: 1.42857;
    color: #aaaaaa;
    font-weight: 400;
  }

  footer {
    padding: 15px 0;
  }

  footer ul {
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }

  footer ul li {
    display: inline-block;
  }

  footer ul li a {
    color: inherit;
    padding: 15px;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 3px;
    text-decoration: none;
    position: relative;
    display: block;
  }

  footer ul li a:hover {
    text-decoration: none;
  }

  @media (max-width: 991px) {
    body,
    html {
      position: relative;
      overflow-x: hidden;
    }

    #bodyClick {
      height: 100%;
      width: 100%;
      position: fixed;
      opacity: 0;
      top: 0;
      left: auto;
      right: 260px;
      content: "";
      z-index: 9999;
      overflow-x: hidden;
    }
  }

  .background {
    position: absolute;
    z-index: -99;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
  }

  .fitContent{
		width: fit-content;
	}
`;

export default GlobalStyle;
