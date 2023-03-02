import React from 'react';
import './footer.css'


import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = ()=>{
    
    return (
        <>
            <div className='Footer-container'>
            <h3 id='follow-us'>Follow us :- </h3>
            <div className="links">
            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="www.facebook.com" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="www.facebook.com" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="www.facebook.com" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="www.facebook.com" target="_blank">
                                        <BsStackOverflow />
                                    </a>
                                </li>
                                <li>
                                    <a href="www.facebook.com" target="_blank">
                                        <BsGoogle />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="www.facebook.com" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="www.facebook.com" target="_blank">
                                        <BsYoutube />
                                    </a>
                                </li> 
                            </ul>
            </div>
           <div className="other-info">
           <div className="footerCopyright">
                                <p>© Watch live , 2023. Developed and Designed  by <a  href="www.facebook.com" target="_blank" rel="noreferrer">Deepak</a>.</p>
                            </div>
           </div>
            </div>
        </>
    )
}

export default Footer;