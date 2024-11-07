import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../store'
import { selectorErrorApp } from '../app-selectors'
import { setErrorAC } from '../app-reducer'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectorErrorApp)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
