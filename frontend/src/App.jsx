import './App.css';
import Navigation from './Components/Navigation';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div id="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/productPage/:product_id" element={<ProductPage />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
