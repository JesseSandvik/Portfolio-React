import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import NotFound from "./NotFound";
import Projects from "../projects/Projects";

export default function Routes () {
    const transition = {
        duration: 0.3,
        ease: [0.6, 0.01, -0.05, 0.9],
    };
    
    const initialMotion = {
        opacity: 0,
    };
    
    const animateMotion = {
        opacity: 1,
    };

    const exitMotion = {
        opacity: 0,
    };

    return (
        <>
        <Route render={({ location }) => (
            <AnimatePresence initial={ false } exitBeforeEnter>
                <Switch location={ location } key={ location.pathname }>
                    <Route exact path="/" render={() => <Home
                                                            initialMotion={initialMotion}
                                                            animateMotion={animateMotion}
                                                            exitMotion={exitMotion}
                                                            transition={transition}
                                                        />
                                                        }
                    />
                    <Route path="/about" render={() => <About
                                                            initialMotion={initialMotion}
                                                            animateMotion={animateMotion}
                                                            exitMotion={exitMotion}
                                                            transition={transition}
                                                        />
                                                        }
                    />
                    <Route path="/projects" render={() => <Projects
                                                            initialMotion={initialMotion}
                                                            animateMotion={animateMotion}
                                                            exitMotion={exitMotion}
                                                            transition={transition}
                                                        />
                                                        }
                    />
                    <Route path="/contact" render={() => <Contact
                                                            initialMotion={initialMotion}
                                                            animateMotion={animateMotion}
                                                            exitMotion={exitMotion}
                                                            transition={transition}
                                                        />
                                                        }
                    />
                    <Route render={() => <NotFound
                                            initialMotion={initialMotion}
                                            animateMotion={animateMotion}
                                            exitMotion={exitMotion}
                                            transition={transition}
                                        />
                                        }
                    />
                </Switch>
            </AnimatePresence>
        )}
        />
        </>
    );
};