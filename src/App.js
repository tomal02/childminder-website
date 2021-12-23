import './App.css';

import ContactBar from './components/ContactBar';
import NavigationBar from './components/Navbar';
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <ContactBar />
      <NavigationBar />
      <Welcome />
      <About />
      <Contact />
      <Gallery />
    </div>
  );
}

export default App;
