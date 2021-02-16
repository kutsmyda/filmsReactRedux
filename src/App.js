import React, {useEffect} from "react";
import {BaseLayout} from "./layouts";
import {Home} from "./pages/Home";
import {Switch, Route, BrowserRouter as Router, useHistory} from 'react-router-dom'

import './App.css';
import {MovieDetails} from "./pages/MovieDetails/MovieDetail";


function App() {
    const history = useHistory()
    return (
        <BaseLayout>
            <Switch>
                <Route path="/" exact=''>
                    <Home/>
                </Route>

                <Route path="/movie/:id" >
                    <MovieDetails/>
                </Route>
                <Route path="/">
                    <h1>Page NON FOund <button onClick={() => history.push('/')}>go home</button></h1>
                </Route>
            </Switch>
        </BaseLayout>


    );
}

export default App;
