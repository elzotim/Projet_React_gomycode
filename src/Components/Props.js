import React from 'react';

const Props = (infos) => {
    return (
        <div>
        <h2>NOM: {infos.Firstname}</h2>
        <h2>Prenom: {infos.Lastname}</h2>
        <h2>Email {infos.Email}</h2>
        <h2>Ville {infos.Ville}</h2>
            
        </div>
    );
};

export default Props;