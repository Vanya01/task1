import {
    BrowserRouter,
    Route, Switch
} from "react-router-dom";

import './App.css';
import Header from "./components/header/header";
import Cards from "./components/body/cards/cards";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path={'/home'} render={() => <Header/>}/>
                    <Route path={'/about'} render={() => <Cards/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
