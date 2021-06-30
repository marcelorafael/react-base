import styled ,{ createGlobalStyle } from 'styled-components'
import {primary, darkColor} from '../config/colors'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${darkColor};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background: ${primary};
  border: none;
  color: #FFF;
  padding: 20px;
  border-radius: 4px;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: ${primary};
}

ul {
  list-style: none;
}
`;

export const Container = styled.section`
max-width: 360px;
background: #FFF;
margin: 30px auto;
padding: 30px;
border-radius: 4px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
