import React from "react";
import Photo from "../profilePhoto.jpg";
import {FaEnvelope,FaLinkedin} from "react-icons/fa";


export default function Info(){
    return(
            <div className="infoBody">
                <div id="profileImage">
                    <img src= {Photo} className="photoProfile"/>
                </div>
                <h2 className="name">Moisés F. Guedes Neto</h2>
                <h3 className="position">Web Developer</h3>
                <p className="personalSite">moisesneto.frontend</p>
                <div className="buttons">
                    <button className="button email" ><span className="icon"><FaEnvelope icon="fa-solid fa-envelope"/></span><a href = "mailto: neto_guedes_1@hotmail.com">Email</a></button>
                    <button className="button linkedin" ><span className="icon"><FaLinkedin icon="fa-brands fa-linkedin" /></span><a target="_blank" href="https://www.linkedin.com/in/moisés-f-guedes-neto-b922b9b8/ ">Linkedin</a></button>
                </div>
            </div>
        
    )
}

