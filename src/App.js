import './App.css';

import ContactBar from './components/ContactBar';
import NavigationBar from './components/Navbar';
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <ContactBar />
      <NavigationBar />
      <Welcome />
      <About />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
