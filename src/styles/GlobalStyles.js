import styled ,{ createGlobalStyle } from 'styled-components'
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${colors.darkColor};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background: ${colors.primary};
  border: none;
  color: #FFF;
  padding: 20px;
  border-radius: 4px;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: ${colors.primary};
}

ul {
  list-style: none;
}

/* body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: ${colors.success};
}

body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background: ${colors.error};
} */
`;

export const Container = styled.section`
max-width: 360px;
background: #FFF;
margin: 30px auto;
padding: 30px;
border-radius: 4px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
