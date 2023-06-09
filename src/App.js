// import logo from './logo.svg';
import './App.css';
import './styles/navBar.css'
import './styles/banner.css'
import './styles/certificates.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Certificates } from "./components/Certificates";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Certificates />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
