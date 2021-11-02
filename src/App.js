import {
    BrowserRouter,
    Route
} from "react-router-dom";

import './App.css';
import Header from "./components/header/header";
import Body from "./components/body/body";
import Card from "./components/body/card/card";
import Cards from "./components/body/cards/cards";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Cards/>
                {/*<Body/>*/}
                <Route path={'/about'} component={Card}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
