import React from 'react'
import "./index.scss"
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import clip from "../../assets/clip.png"

const MyProjects = () => {
  return (
    <div className='MyProjects'>
      <div className='MyProjects--card1'>
        <div className='MyProjects--card1__img'>
          <img src={card1} alt="card1" />
        </div>
        <div className='MyProjects--card1__text'>
          <div className='MyProjects--card1__text__link'>
            <img src={clip} alt="clip" />
            <a href="https://adorable-smakager-538f79.netlify.app/" target="_blank">DNC Coffee</a>
          </div>
          <p>Projeto realizado no módulo 6 do curso de formação em Tech da Escola DNC 📚<br></br>
            Projeto foi desenvolvido e estilizado utilizando Bootstrap<br></br>
            Foi criada uma função para quando o usuário passar o mouse por cima de um card, habilitar o botão de compra sobre o mesmo.<br></br>
            Também foi criado um modal para quando o usuário clicar sobre o botão "atendimento".<br></br>
            Essas duas novas funcionalidades foram criadas utilizando HTML, CSS e JavaScript.</p>
        </div>
      </div>

      <div className='MyProjects--card2'>
        <div className='MyProjects--card2__text'>
          <div className='MyProjects--card2__text__link'>
            <a href="https://illustrious-centaur-0813da.netlify.app/" target="_blank" >Login Jumpy DNC</a>
            <img src={clip} alt="clip" />
          </div>
          <p>
            Projeto realizado no módulo 5 do curso de Formação em Tech da escola DNC 📚
            Foi desenvolvido um login, no qual se os campos não estiverem preenchidos,
            aparece uma mensagem de erro abaixo de campo.<br></br>
            E caso todos os campos estiverem preenchidos,<br></br>
            aparece uma mensagem de Sucesso! abaixo do botão.
          </p>
        </div>
        <div className='MyProjects--card2__img'>
          <img src={card2} alt="card1" />
        </div>
      </div>

      <div className='MyProjects--card3'>
        <div className='MyProjects--card3__img'>
          <img src={card3} alt="card1" />
        </div>
        <div className='MyProjects--card3__text'>
          <div className='MyProjects--card3__text__link'>
            <img src={clip} alt="clip" />
            <a href="https://admirable-platypus-6c0a1e.netlify.app/" target="_blank" >Evento CCXP</a>
          </div>
          <p>
            Projeto realizado no módulo 4 do curso de formação em Tech da Escola DNC 📚<br></br>
            Foi desenvolvido uma landing page sobre o evento CCXP utilizando HTML, CSS e JavaScript.
            Na qual contém um cronometro mostrando os dia, horas, minutos e segundos para o inicio do grande evento.
          </p>
        </div>
      </div>

      <div className='MyProjects--card4'>
        <div className='MyProjects--card4__text'>
          <div className='MyProjects--card4__text__link'>
            <a href="https://sprightly-peony-327014.netlify.app/" target="_blank" >Bye Card DNC</a>
            <img src={clip} alt="clip" />
          </div>
          <p>
            Projeto realizado durante uma das aulas ao vivo do curso de Formação em Tech da escola DNC 📚
            Foi desenvolvido uma página de divulgação e venda de motos utilizando HTML, CSS e JavaScript.
            Aprendemos a utilizar a funcionalidade de carrousel, onde o usuário pode trocar o modelo da moto através das setas ao lado.
          </p>
        </div>
        <div className='MyProjects--card2__img'>
          <img src={card4} alt="card1" />
        </div>
      </div>
    </div>
  )
}

export default MyProjects