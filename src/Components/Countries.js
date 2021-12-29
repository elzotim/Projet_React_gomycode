import React,{useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {

  const [data,setdata ] = useState([]);
  useEffect(()=>{
  axios
        .get(
          "https://restcountries.com/v2/all"
        )
        .then((res) => 
          setdata(res.data));
         console.log(data);
        } , []);
    return (
        <div className="countries">
          <ul className="countries-list">
          {data.map((country)=>(
                    <Card
                    
                    flag={country.flag}
                     name={country.name}
                   capital={country.capital} 
                   region={country.region}
                   population={country.population}
                    />
                ))}
           
          </ul>
        </div>
    )
};
export default Countries;
