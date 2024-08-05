import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { ProductContextProvider } from './contexts/ProductContext'

import Router from './routes/Router'

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductContextProvider>
    </AuthContextProvider>
  )
}

export default App
