import Navbar from "./components/Nav/navbar";
import Intro from './components/Intro/intro';
import Compétences from "./components/Compétences/competences";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/contact";

function App() {

  return (
    
      <div className="App">
        <Navbar />
        <Intro />
        <Compétences />
        <Works />
        <Contact />
       
      </div>

  )
}

export default App;
