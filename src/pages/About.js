import { Link } from "react-router-dom";
import Cv from "../Components/Cv";

const About= ()=>{
    return (
        <div className="About">
        
        <Cv/>
        <Link className="lienAccueil" to="/">retour a la page d'accueille</Link>
        </div>

    );
};
export default About;