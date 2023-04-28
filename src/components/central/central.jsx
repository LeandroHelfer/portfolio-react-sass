import React from 'react'
import "./index.scss"
import foto from "../../assets/foto.png"
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"

const central = () => {
    return (
        <section className="central">
            <div className="central-top">
                <div className="central-top__text">
                    <h1 className="central-top__text_h1" >Olá, sou o Leandro</h1>
                    <h3 className="central-top__text_h3" >Sou desenvolvedor, e gostaria de apresentar meu <br></br>
                        trabalho para você através deste portfólio.</h3>
                </div>
                <div className="central-top__img">
                    <img src={foto} alt="foto perfil" />
                </div>
            </div>

            <div className="central-mid">
                <h1 className="central-mid__h1" >Meus Projetos</h1>
            </div>

            <div className="central-end">
                <div>
                    <a href="https://adorable-smakager-538f79.netlify.app/" target="_blank" >
                        <img className='ImgCard' src={card1} alt="card1" />
                    </a>
                </div>
                <div>
                    <a href="https://illustrious-centaur-0813da.netlify.app/" target="_blank">
                        <img className='ImgCard' src={card2} alt="card2" />
                    </a>
                </div>
                <div>
                    <a href="https://admirable-platypus-6c0a1e.netlify.app/" target="_blank">
                        <img className='ImgCard' src={card3} alt="card3" />
                    </a>
                </div>
                <div>
                    <a href="https://sprightly-peony-327014.netlify.app/" target="_blank"> 
                        <img className='ImgCard' src={card4} alt="card4" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default central