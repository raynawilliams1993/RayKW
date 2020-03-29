import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Wrapper from "./components/wrapper/wrapper";




function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
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
