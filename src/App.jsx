import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


/*
primereact/resources/themes/bootstrap4-light-purple/theme.css
primereact/resources/themes/lara-dark-purple/theme.css
primereact/resources/themes/saga-purple/theme.css #
*/
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';

import PageTeste from './components/PageTeste';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
          <Route path='/teste' element={<PageTeste />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
