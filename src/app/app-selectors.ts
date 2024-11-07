import { AppRootState } from './store'

export const selectorStatusApp = (state: AppRootState) => state.app.status
export const selectorErrorApp = (state: AppRootState) => state.app.error
