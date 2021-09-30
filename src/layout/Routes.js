import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import NotFound from "./NotFound";
import Projects from "../projects/Projects";

function Routes () {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/contact" render={() => <Contact />} />
            <Route render={() => <NotFound />} />
        </Switch>
    )
}

export default Routes;