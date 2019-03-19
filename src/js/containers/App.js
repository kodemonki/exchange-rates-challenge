import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { NavigationBar } from "../components/NavigationBar";
import { Home } from "../components/Home";
import ExchangeRates from "../components/ExchangeRates";

import { getLatestAction } from "../actions/getLatestAction";
import { getSearchAction } from "../actions/getSearchAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getLatestAction();
  }
  render() {
    return (
      <Router basename="/">
        <div className="Router">
          <NavigationBar />
          <div className="Content">
            <Route
              exact
              path="/"
              render={props => <Home latestRates={this.props.latestRates} />}
            />
            <Route exact path="/about" render={props => <h1>About</h1>} />
            <Route
              exact
              path="/exchangerates"
              render={props => (
                <ExchangeRates
                  base={this.props.base}
                  latestRates={this.props.latestRates}
                  lastDate={this.props.lastDate}
                  getSearchAction={this.props.getSearchAction}
                  searchResults={this.props.searchResults}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestRates: state.latestReducer.rates,
    lastDate: state.latestReducer.date,
    base: state.latestReducer.base,
    searchResults: state.searchReducer.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLatestAction: () => {
      dispatch(getLatestAction());
    },
    getSearchAction: query => {
      dispatch(getSearchAction(query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
