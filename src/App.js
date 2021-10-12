import { DataProvider } from "./context/DataContextMain";
import { ShopCartProvider } from "./context/ShopCartContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { CardGrid } from "./components/CardGrid";
import { CardList } from "./components/CardList";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <DataProvider>
      <ShopCartProvider>
        <Router>
          <div className="bg-gray-300 min-h-full">
            <Switch>
              <Route path="/" exact>
                <CardGrid />
              </Route>
              <Route path="/cart" exact>
                <CardList />
              </Route>
              <Route path="/checkout" exact>
                <Checkout />
              </Route>
            </Switch>
          </div>
        </Router>
      </ShopCartProvider>
    </DataProvider>
  );
}

export default App;
