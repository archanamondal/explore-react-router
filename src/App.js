import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/project-details";
import NotFound from "./pages/not-found";
import Navbar from "./components/navbar";



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route path="/projects" exact>
          <Projects />
        </Route>

        <Route path="/projects/:id" exact>
          <ProjectDetails />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
