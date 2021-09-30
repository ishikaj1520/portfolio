import Navbar from "./components/Navbar";
import Intro from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div class="container-fluid">
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Portfolio/>
     <Contact/>
    </div>
    </div>
  );
}

export default App;
