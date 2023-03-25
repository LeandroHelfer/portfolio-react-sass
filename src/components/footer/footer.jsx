import React from 'react'
import "./index.scss"
import linkedin from "../../assets/linkedin-p.png"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram-p.png"
import whatsapp from "../../assets/whatsapp-p.png"
import email from "../../assets/email.png"
import { NavLink } from 'react-router-dom'

const footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-left'>
                <h1>Minhas Redes</h1>
                <div className='footer-links'>
                    <img src={linkedin} alt="foto perfil" />
                    <a href="https://www.linkedin.com/in/leandrohelfer/" target="_blank" >
                        linkedin.com/in/leandrohelfer
                    </a>
                </div>
                <div className='footer-links'>
                    <img src={github} alt="foto perfil" />
                    <a href="https://github.com/LeandroHelfer" target="_blank" >
                        github.com/LeandroHelfer
                    </a>
                </div>
                <div className='footer-links'>
                    <img src={instagram} alt="foto perfil" />
                    <a href="https://www.instagram.com/leandrohelfer/" target="_blank" >
                        instagram.com/leandrohelfer
                    </a>
                </div>
            </div>
            <div className='footer-right'>
                <h1>Fale Comigo</h1>
                <div className='footer-links'>
                    <img src={whatsapp} alt="foto perfil" />
                    <a href="https://wa.me/5551995285006" target="_blank" >
                        https://wa.me/5551995285006
                        </a>
                </div>
                <div className='footer-links'>
                    <img src={email} alt="foto perfil" />
                    <a>leandrohelfer@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}

export default footer