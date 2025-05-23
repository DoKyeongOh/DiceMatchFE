import { Provider } from 'react-redux'
import { store } from './store/store'
import AppRouter from './router/app-router'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
