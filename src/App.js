import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navi from "./client/components/navbar/navbar";
import Wrapper from "./client/components/wrapper/wrapper";
import About from "./client/components/pages/about";
import Contact from "./client/components/contact/contact";
import Portfolio from "./client/components/pages/portfolio";
import LandingPage from "./client/components/landingPage/landingPage";
import ContactForm from "./client/components/contact/contact";


function App() {
  return (
    
    <Router>
    <div className="App">
    <Navi/>
    
    <Wrapper>
          <Route exact path= "/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          
        </Wrapper>
        
    </div>
    </Router>
  );
}



export default App;
