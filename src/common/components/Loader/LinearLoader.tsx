import { useSelector } from 'react-redux'
import s from './Loader.module.css'
import { useAppSelector } from '../../../app/store'
import { RequestStatusType } from '../../../app/app-reducer'
import { selectorStatusApp } from '../../../app/app-selectors'

export const LinearLoader = () => {
  return <div className={s.linearLoader}></div>
}
