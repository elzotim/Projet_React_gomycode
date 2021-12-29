
import { Link } from "react-router-dom";
import Temoignage from "../Components/Temoignage";
const Home = () => {
    return (
        <div className="Home">
            <div class="Home2">
                <div className="centrer_element">
                    <h2>Création de site internet, site vitrine,
                        site e-commerce et sur-mesure
                    </h2>
                    <p>
                        Développeur Web Freelance à Paris depuis 2011
                    </p>
                    <div>
                        <h2>Projet réaliser</h2>
                        <div>
                            <p>Projet realiser pour ne restaurant basé un peu partout en il de France et dans le metropole</p>
                            <img id="#logo" src='./images/ohmyfood.png' alt='logo-du-site' width={300} />
                            <button class="le__boutton button"><a href="https://elzotim.github.io/Timera_Mamadou_03_30062021/">Cliquez ici </a>  </button>

                        </div>
                    </div>
                </div>
                <div className="centrer_element">
                    <h2>Création de site internet, site vitrine,
                        site e-commerce et sur-mesure</h2>
                    <p>
                        Développeur Web Freelance à Paris depuis 2011
                    </p>
                    <div>
                        <h2>Projet réaliser</h2>
                        <div>
                            <p>Projet Trouvez votre hébergement pour des vacances de rêve</p>
                            <img id="#logo" src='./images/Reservia@3x.png' alt='logo-du-site' width={300} />
                            <button class="le__boutton button"> <a href="https://elzotim.github.io/Timera_Mamadou_2_27042021/">Cliquez ici </a> </button>

                        </div>
                    </div>
                </div>
            </div>
            
            <Link to="/About">A Propos de moi</Link>
            <Temoignage />
        </div>

    );
};
export default Home;