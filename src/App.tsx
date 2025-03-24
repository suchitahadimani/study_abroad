import './App.css';
import Header from './pages/Header';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Schedule from './pages/Schedule';
import Tracks from './pages/Tracks';
import Footer from './pages/Footer';



const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Schedule />
      <Tracks />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
