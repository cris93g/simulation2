import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header/Header";

// import Wizard from "./components/Wizard/Wizard";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
