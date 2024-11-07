import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { useAppSelector } from './store.ts'
import { selectorStatusApp } from './app-selectors.ts'

export const App = () => {
  const selectorStatus = useAppSelector(selectorStatusApp)
  return (
    <div>
      {selectorStatus === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
