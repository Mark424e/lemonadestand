import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='bg-gray-100'>
      <Header toggleModal={toggleModal} />
      <Hero />
      <ProductList showModal={showModal} toggleModal={toggleModal} />
      <Footer />
    </div>
  );
}

export default App;
