import React from "react";

const Card = (props) => {
    

  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <img src={props.flag}  />
      <div className="data-container">
        <ul>
          <li>{props.name}</li>
          <li>{props.capital}</li>
          <li>{props.region}</li>
          <li> Pop :{numberFormat (props.population)}</li>
        </ul>
      </div>
    </li>
  
  );
};

export default Card;
