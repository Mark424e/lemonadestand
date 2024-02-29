import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
