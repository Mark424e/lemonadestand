import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='bg-gray-100'>
      <Header toggleModal={toggleModal} />
      <Hero />
      <ToastContainer />
      <ProductList showModal={showModal} toggleModal={toggleModal} />
      <Footer />
    </div>
  );
}

export default App;
