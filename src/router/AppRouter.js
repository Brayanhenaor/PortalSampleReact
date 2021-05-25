import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { GlosaryScreen } from '../screens/GlosaryScreen';
import { LifeCicleScreen } from '../screens/LifeCicleScreen';
import { PortalScreen } from '../screens/PortalScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>

                <Switch>

                    <Route exact path="/" component={PortalScreen}/>

                    <Route exact path="/ciclo" component={LifeCicleScreen}/>

                    <Route exact path="/Glosary" component={GlosaryScreen}/>
                    <Redirect to="/"/>
                </Switch>

                <Footer/>
            </div>
        </Router>
    )
}
