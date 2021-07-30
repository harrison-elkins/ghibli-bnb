import "./App.scss";
import Home from "../src/Pages/Home/Home";
import Listing from "../src/Pages/Listing/Listing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/listing" exact component={Listing} />
          <Route path="/listing/:id" exact component={Listing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
