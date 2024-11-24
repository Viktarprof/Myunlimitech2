import './App.css';
import CarouselContainer from './components/CarouselContainer/CarouselContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import CategoryProducts from './components/CategoryProducts/CategoryProducts';
import Discount from './components/Discount/Discount';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <CarouselContainer/>
      <CategoryProducts/>
      <Discount/>
      <Footer/>
    </div>
  );
}

export default App;
