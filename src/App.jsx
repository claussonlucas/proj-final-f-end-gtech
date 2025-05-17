import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


/*
primereact/resources/themes/bootstrap4-light-purple/theme.css
primereact/resources/themes/lara-dark-purple/theme.css
primereact/resources/themes/saga-purple/theme.css #
*/
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';

import ProductViewPage from './pages/ProductViewPage';
import ProductListingPage from './pages/ProductListingPage';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
