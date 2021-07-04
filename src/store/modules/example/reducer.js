import * as types from '../types'
const initailReducer = {
  botaoClicado: false
}

export default function(state = initailReducer, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS:{
      const newState = {...state}
      newState.botaoClicado = !newState.botaoClicado
      console.log('Sucesso.')
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE:{
      console.log('Deu ruim brother.')
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST:{
      console.log('Fazendo a requisição')
      return state;
    }

    default:{
      return state;
    }
  }
}
