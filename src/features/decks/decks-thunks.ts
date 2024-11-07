import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setStatusAppAC } from '../../app/app-reducer.ts'

// export const fetchDecksTC = () => (dispatch: Dispatch) => {
//   dispatch(changeStatusAppAC('loading'))
//   decksAPI.fetchDecks().then((res) => {
//     dispatch(setDecksAC(res.data.items))
//     dispatch(changeStatusAppAC('succeeded'))
//   })
// }
export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'))
  try {
    const resposnse = await decksAPI.fetchDecks()
    dispatch(setDecksAC(resposnse.data.items))
    dispatch(setStatusAppAC('succeeded'))
  } catch (error) {
    alert(error)
    dispatch(setStatusAppAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  return decksAPI.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
