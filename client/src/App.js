import React from "react";
import Join from "./components/join/Join";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/global.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat-room" component={Chat} />
      </Switch>
    </Router>
  );
};

export default App;
