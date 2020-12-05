import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShips } from "./actions";
import Ship from "./components/Ship";
import SearchBar from "./components/SearchBar";

import "./styles.css";

const App = ({ fetchShips, ships }) => {
  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <div className="App">
      <img className="spacex-logo" src="./spacex.png" alt="spacex logo" />
      <SearchBar />
      <div className="ships">
        TOTAL COUNT : {ships && ships.length}
        {ships && ships.map((ship, index) => <Ship key={index} ship={ship} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ships: state.ships
});

export default connect(mapStateToProps, { fetchShips })(App);
