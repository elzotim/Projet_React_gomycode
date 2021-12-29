import React from 'react';
import CardTemoignage from './CardTemoignage';
const Temoignage = () => {
    const DataTable =[
                
        { id: 1, name: "John Doe",message:"Tres bon service ,je récommandes" },
        { id: 2, name: "Victor Wayne",message:"travail trés propre" },
        { id: 3, name: "Jane Doe" ,message:"je donnes 5 étoiles"},
        { id: 4, name: "Joel Apach" ,message:"n'hesitez pas "},
      ];
    return (
        <div className='temoignage'>
            <div className='container'>
                {DataTable.map((user)=>(
                    <CardTemoignage
                     name={user.name}
                     message={user.message} 
                     key={user.id}
                    />
                ))}
               
               
            </div>
        </div>
    );
};

export default Temoignage;