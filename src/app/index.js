import React from "react";
import { render } from "react-dom";
import {HomeComponent} from "./components/HomeComponent";
import {AboutComponent} from "./components/AboutComponent";
import {AsyncContactComponent} from "./components/AsyncContactComponent";
import {BrowserRouter, Switch, NavLink as Link,Route} from "react-router-dom";

class AppComponent extends React.Component{

    render(){
       
        return(

            <BrowserRouter>
            <div>
                <div className="menu">
                    <Link exact to="/" >Home </Link>
                    <Link to="/about" >About </Link>
                    <Link to="/contact" >Contact</Link>
                </div>
                
                <Switch>
                    <Route exact path="/" component={ HomeComponent } />
                    <Route path="/about" component={ AboutComponent } />
                    <Route path="/contact" component={ AsyncContactComponent } />
                </Switch>
            </div>
            </BrowserRouter>
            
           
        );

    }
}

render(<AppComponent/>,document.getElementById("root"));