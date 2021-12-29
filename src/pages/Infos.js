import React from 'react';
import { Link } from 'react-router-dom';
import Props from '../Components/Props';
// import  { useState } from "react";
const Infos = () => {
    ///faire un compteur
    // const [count, setCount] = useState(0);

    return (

        <div>
            <Props Firstname="TIMERA"
             Lastname="Moussa"
            Email="elzotim@gmail.com"
            Ville="Torcy"
            />
          {/* <p>Vous avez cliqué {count} fois</p>
          <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
         <br/>   */}
          <Link to="/">Retour à l'accueil</Link>
        </div>
    );
};

export default Infos;