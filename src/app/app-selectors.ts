import { AppRootState } from './store'

export const selectorStatusApp = (state: AppRootState) => state.app.status
