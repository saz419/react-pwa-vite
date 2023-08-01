import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/home';
import './App.scss'

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : `${import.meta.env.VITE_GithubPageBaseUrl}`}
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