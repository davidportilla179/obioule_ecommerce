import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Analytics from "../pages/Analytics";
import AnalyticsCoo from "../pages/AnalyticsCoo";
import Landing from "../pages/Landing";
import PruebaClasificador from "../pages/pruebaClasificador";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/ClasificadorUsuarios"
          component={PruebaClasificador}
        />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/analytics/:name" component={AnalyticsCoo} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cooperativas/:id" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
