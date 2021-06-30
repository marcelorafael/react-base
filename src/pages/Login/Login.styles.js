import styled from 'styled-components';

export const Title = styled.h1`
background: green;
color: ${props => props.isRed ? 'red' : 'blue'};
small {
  font-size: 12px;
  margin-left: 15px;
  color: #999
}
`;

export const Paragrafo = styled.p`
font-size: 80px;
`;
