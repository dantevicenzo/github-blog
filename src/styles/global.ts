import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: color, background-color 0.15s;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme.baseBackground};
    color: ${(props) => props.theme.baseText};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
    font-weight: 400;
    font-size: 1rem;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: background-color, color, 0.15s;
  }

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder { 
    color: ${(props) => props.theme.baseLabel}
  }

`
