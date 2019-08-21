import React from "react";
import "./App.css";
import { ObjectiveCard } from "./components/ObjectiveCard";

const App: React.FC = () => {
  return (
    <div className="App">
      <ObjectiveCard key="a">
        <ObjectiveCard key="a.1" />
        <ObjectiveCard key="a.2" />
      </ObjectiveCard>
      <ObjectiveCard key="b">
        <ObjectiveCard key="b.1" />
        <ObjectiveCard key="b.2">
          <ObjectiveCard key="b.2.a">
            <ObjectiveCard key="b.2.a.1" />
          </ObjectiveCard>
          <ObjectiveCard key="b.2.b" />
          <ObjectiveCard key="b.2.c" />
          <ObjectiveCard key="b.2.d" />
        </ObjectiveCard>
        <ObjectiveCard />
        <ObjectiveCard />
      </ObjectiveCard>
      <ObjectiveCard key="c" />
      <ObjectiveCard key="d">
        <ObjectiveCard key="d.1" />
        <ObjectiveCard key="d.2" />
      </ObjectiveCard>
    </div>
  );
};

export default App;
