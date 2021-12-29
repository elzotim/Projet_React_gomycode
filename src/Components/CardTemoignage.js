import React from 'react';

const CardTemoignage = (props) => {
    return (
        <div className='ItemTemoignage'>
                <div className='Title'>
                    <img src='./images/th.jpg'  alt="g"/>
                    <div className='autorName' >{props.name}</div>
                </div>
                <div className='Description'>
                    <p>
                    {props.message}  
                    </p>
                </div>
            </div>
    );
};

export default CardTemoignage;