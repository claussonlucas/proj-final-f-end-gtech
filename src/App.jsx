import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

/*
primereact/resources/themes/bootstrap4-light-purple/theme.css
primereact/resources/themes/lara-dark-purple/theme.css
primereact/resources/themes/saga-purple/theme.css #
*/
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
