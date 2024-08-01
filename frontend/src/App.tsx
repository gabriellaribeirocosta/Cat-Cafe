import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'

import Router from './routes/Router'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;