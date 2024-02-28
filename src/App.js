import './App.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
