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
                    <Route path={'/'} exact render={() => <Header/>}/>
                    <Route path={'/about'} component={Cards}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
