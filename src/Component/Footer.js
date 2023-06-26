import "./FooterStyle.css";

import React from 'react';

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                        <p>Beni , Myagdi</p>
                        <p>Nepal.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    +977 9848824226</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    kamalbhattaraiofficial@gmail.com</h4>
                </div>
            </div>
            
            <div className="right">
                <h4>About Me</h4>
                <p>This is Kamal Bhattarai. I specialize in creating beautiful, user-friendly websites that help businesses grow.</p>
                <div className="social">
                    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
                    <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} />
                    <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer