import './App.css';

import ContactBar from './components/ContactBar';
import Navbar from './components/Navbar';
import Welcome from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <ContactBar />
      <Navbar />
      <Welcome />
      <About />
      <Contact />
    </div>
  );
}

export default App;
