import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Body from './components/Body';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Body />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
