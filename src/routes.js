import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { MainPage } from './pages/main.page.js';
import {Constructor} from "./pages/Constructor.js";
import {OnemaketPage} from "./pages/onemaket.page.js";
import {Dd_modal} from "./components/dd_modal";
import {View_maket_part} from "./components/View_maket_part";
import {LoginPage} from "./pages/login.page";


export const useRoutes = isAuthenticated => {
        if(isAuthenticated)
        {
                return (
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/dd_modal" component={Dd_modal}/>
                        <Route exact path="/constructor" component={Constructor}/>
                        <Route exact path="/one/:id_maket" component={OnemaketPage}/>
                        <Route exact path="/look" component={View_maket_part}/>
                            <Redirect to="/"/>
                    </Switch>
                )
        }
        else{
                return (
                    <Switch>
                        <Route path="/login" exact>
                            <LoginPage/>
                        </Route>
                        <Route exact path="/" component={MainPage}/>
                        <Redirect to="/login"/>
                    </Switch>
                )
        }
}
