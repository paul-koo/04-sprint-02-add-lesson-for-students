export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-STATUS-APP': {
      return { ...state, status: action.status }
    }
    case 'SET-ERROR': {
      return { ...state, error: action.error }
    }

    default:
      return state
  }
}

export const setStatusAppAC = (status: RequestStatusType) => {
  return {
    type: 'SET-STATUS-APP' as const,
    status,
  }
}

export const setErrorAC = (error: string | null) => {
  return { type: 'SET-ERROR' as const, error }
}
type ActionsType = ReturnType<typeof setStatusAppAC> | ReturnType<typeof setErrorAC>
