import React from "react";
import {FaTwitter,FaFacebook,FaInstagram,FaGithub} from "react-icons/fa"

export default function Footer(){
    return(
        <div className="footer">
            <div className="social-icons">
                <span className="twitter"><FaTwitter icon="fa-brands fa-square-twitter" /></span>
                <span className="facebook"><a target="_blank" href="https://www.facebook.com/neto.guedes1"><FaFacebook icon="fa-brands fa-square-facebook" /></a></span>
                <span className="instagram"><a target="_blank" href="https://instagram.com/moisesfguedesneto?igshid=ZDdkNTZiNTM="><FaInstagram icon="fa-brands fa-square-instagram" /></a></span>
                <span className="github"><a target="_blank" href="https://github.com/MoisesFGNeto"><FaGithub icon="fa-brands fa-square-github" /></a></span>
            </div>
        </div>
    )
}