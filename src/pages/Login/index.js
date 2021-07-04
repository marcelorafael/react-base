import React from 'react'
import { useDispatch } from 'react-redux';

import * as exemploActions from '../../store/modules/example/actions'

import { Title, Paragrafo  } from './Login.styles'
import { Container} from '../../styles/GlobalStyles'


export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e){
    e.preventDefault();

    dispatch(exemploActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo> Lorem ipsum dolor sit amet. </Paragrafo>
      <button type="button" onClick={handleClick}>Enviar</button>
    </Container>
  )
}
