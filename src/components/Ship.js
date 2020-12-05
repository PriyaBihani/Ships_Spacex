import React from "react";

const Ship = ({ ship }) => (
  <div className="ship">
    <img src={ship.image} alt={ship.name} />
    <div className="content">
      <div>{ship.name}</div>
      <div>
        <div className="right">PORT: {ship.home_port}</div>
        <div>ROLES: Fairing recovery</div>
      </div>
    </div>
  </div>
);

export default Ship;
