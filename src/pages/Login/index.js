import React from 'react'
import { toast } from 'react-toastify';

import { Title, Paragrafo  } from './Login.styles'
import { Container} from '../../styles/GlobalStyles'

export default function Login() {
  toast.success('Falae')
  // toast.error('Levou o farelo')
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo> Lorem ipsum dolor sit amet. </Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  )
}
