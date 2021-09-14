import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import {Home} from "../../pages/Home";
import {About} from "../../pages/About";
import {Contact} from "../../pages/Contact";
import {NotFound} from "../../pages/NotFound";
import {Category} from "../../pages/Category";
import {MealRecipe} from "../../pages/MealRecipe";

function App() {
  return <>
      <Router>
          <Header/>
          <main className="container content">
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/about" component={About}/>
                  <Route path="/contacts" component={Contact}/>
                  <Route path="/category/:name" component={Category}/>
                  <Route path="/meal/:id" component={MealRecipe}/>
                  <Route component={NotFound}/>
              </Switch>
          </main>
          <Footer/>
      </Router>
  </>;
}

export default App;
