import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TestItem from "./routes/testItem/TestItem";
import LudoDice from "./routes/LudoDice/LudoDice";

export default class Router extends React.Component {
    render() {
        return (
            <div className={''}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/testItem'} component={TestItem}/>
                        <Route path={'/dice'} component={LudoDice}/>
                        <Route component={TestItem}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}