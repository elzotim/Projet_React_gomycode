
import React from "react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Infos from "./pages/Infos";
import Header from "./Components/Header";
import Not_Found from "./pages/Not_Found";
import Spinner from "./Components/Spinner";
import Footer from "./Components/Footer";
import Pays from "./pages/Pays";



const App = () => {
    
    return (
        <BrowserRouter>
        <Spinner/>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about"  element={<About />} />
                <Route path="/contact"  element={<Contact />} />
                <Route path="/infos"  element={<Infos />} />
                <Route path="/Pays"  element={<Pays />} />
                <Route  component={<Not_Found />} />

            </Routes>
            <Footer/>
        </BrowserRouter>
        

    );
};
export default App;
