import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/home';

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/react-pwa-vite/'}
    >
      <Routes>
        <Route
          path='/'
          element={
            <HomePage />
          }
        />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App