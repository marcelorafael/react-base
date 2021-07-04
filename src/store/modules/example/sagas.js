import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as types from '../types'
import * as actions from './actions'
import { toast } from 'react-toastify';

const requisicao = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  },600)
});

function* exemploRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess())
  } catch (error) {
    toast.error('Deu ruim brow')
    yield put(actions.clicaBotaoFailure())
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exemploRequest)
])
