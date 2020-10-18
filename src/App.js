import React from "react";
import { Route, Switch } from "react-router-dom";
import { TestCard } from "./components/TestCard";
import blueplaque from "./blueplaque";
import "./App.css";
import DetailPlaqueCard from "./components/DetailCard.component/DetailPlaqueCard";

function App(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={blueplaque} />
        <Route
          exact
          path={`/Test`}
          component={TestCard}
        />
        <Route path={"/DetailPlaqueCard/:id"} component={DetailPlaqueCard} />
      </Switch>
    </div>
  )


}

export default App;
