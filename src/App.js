import './App.css';
import {
  BrowserRouter,
  Route,  
  Switch
} from "react-router-dom";
import Navbar from './component/Navbar'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
