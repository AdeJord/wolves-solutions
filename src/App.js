import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import Gallery from "./pages/Gallery.js";
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/enquiry">
        <Enquiry />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Redirect to='/' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
