import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductList />
      <Footer />
    </div>
  );
}
export default App;
