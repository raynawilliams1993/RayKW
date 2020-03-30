import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navi from "./components/navbar/navbar";
import Wrapper from "./components/wrapper/wrapper";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";



function App() {
  return (
    <Router>
    <div className="App">
    <Navi/>
    <Wrapper>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
    </div>
    </Router>
  );
}

export default App;
