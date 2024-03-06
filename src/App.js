import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ProductList } from './pages/ProductList'
import { NotFoundPage } from './pages/NotFoundPage'
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className='bg-gray-100'>
          <Router>
            <Header toggleModal={toggleModal} />
              <Routes>
                <Route index element={<ProductList showModal={showModal} toggleModal={toggleModal} />} />
                <Route path="/CheckoutPage" element={<CheckoutPage showModal={showModal} toggleModal={toggleModal} />} />
                <Route path="*" element={<NotFoundPage showModal={showModal} toggleModal={toggleModal} />} />
              </Routes>
            <Footer />
          </Router>
      </div>
    </>
  );
}

export default App;
