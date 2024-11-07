import { isAxiosError } from 'axios'
import { AppDispatch } from '../../app/store'
import { ServerError } from '../../features/decks/decks-thunks'
import { setErrorAC } from '../../app/app-reducer'

export const handleError = (dispatch: AppDispatch, err: any) => {
  let errorMessage: string
  if (isAxiosError<ServerError>(err)) {
    errorMessage = err.response ? err.response.data.errorMessages[0].message : err.message
  } else {
    errorMessage = err.message
  }
  dispatch(setErrorAC(errorMessage))
}
