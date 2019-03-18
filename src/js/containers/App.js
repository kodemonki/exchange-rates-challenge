import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { NavigationBar } from "../components/NavigationBar";

import { dumbAction } from "../actions/dumbAction";

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div className="Router">
          <NavigationBar />
          <div className="Content">
            <Route exact path="/" render={props => <h1>home</h1>} />
            <Route exact path="/about" render={props => <h1>about</h1>} />
            <Route
              path="/exchange-rates"
              render={props => <h1>exchange-rates</h1>}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialised: state.dumbReducer.initialised
  };
};

const mapDispatchToProps = dispatch => {
  return {
    consoleLog: message => {
      dispatch(dumbAction(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
