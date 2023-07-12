import React from 'react'
import "./index.scss"
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import card5 from "../../assets/card5.png"
import clip from "../../assets/clip.png"

const MyProjects = () => {
  return (
    <div className='MyProjects'>
      <div className='MyProjects-cardblue'>
        <div className='MyProjects-cardblue__img'>
          <img src={card2} alt="card1" />
        </div>
        <div className='MyProjects-cardblue__text'>
          <div className='MyProjects-cardblue__text__link'>
            <img src={clip} alt="clip" />
            <a className='text-LinkWhite' href="https://github.com/pripc/E-commerce-DNC" target="_blank">E-commerce DNC</a>
          </div>
          <p className='text-Projects'>
            Projeto realizado como conclusão da parte de Front-End do curso de formação em Tech da Escola DNC 📚<br></br>
            O projeto foi desenvolvido em grupo, onde tivemos que criar um cronograma através do Trello.<br></br>
            Cada participante ficou responsável por realizar o código de algum component ou View.<br></br>
            Para o desenvolvimento do projeto foi utilizado React Router e Vite.
          </p>
        </div>
      </div>

      <div className='MyProjects-cardwhite'>
        <div className='MyProjects-cardwhite__text'>
          <div className='MyProjects-cardwhite__text__link'>
            <a className='text-LinkBlue' href="https://adorable-smakager-538f79.netlify.app/" target="_blank" >DNC Coffee</a>
            <img src={clip} alt="clip" />
          </div>
          <p className='text-Projects'>
            Projeto realizado no módulo 6 do curso de formação em Tech da Escola DNC 📚<br></br>
            Projeto foi desenvolvido e estilizado utilizando Bootstrap<br></br>
            Foi criada uma função para quando o usuário passar o mouse por cima de um card, habilitar o botão de compra sobre o mesmo.<br></br>
            Também foi criado um modal para quando o usuário clicar sobre o botão "atendimento".<br></br>
            Essas duas novas funcionalidades foram criadas utilizando HTML, CSS e JavaScript.
          </p>
        </div>
        <div className='MyProjects-cardwhite__img'>
          <img src={card2} alt="card2" />
        </div>
      </div>

      <div className='MyProjects-cardblue'>
        <div className='MyProjects-cardblue__img'>
          <img src={card3} alt="card3" />
        </div>
        <div className='MyProjects-cardblue__text'>
          <div className='MyProjects-cardblue__text__link'>
            <img src={clip} alt="clip" />
            <a className='text-LinkWhite' href="https://illustrious-centaur-0813da.netlify.app/" target="_blank" >Login Jumpy DNC</a>
          </div>
          <p className='text-Projects'>
            Projeto realizado no módulo 5 do curso de Formação em Tech da escola DNC 📚<br></br>
            Foi desenvolvido um login, no qual se os campos não estiverem preenchidos,<br></br>
            aparece uma mensagem de erro abaixo de campo.<br></br>
            E caso todos os campos estiverem preenchidos,<br></br>
            aparece uma mensagem de Sucesso! abaixo do botão.
          </p>
        </div>
      </div>

      <div className='MyProjects-cardwhite'>
        <div className='MyProjects-cardwhite__text'>
          <div className='MyProjects-cardwhite__text__link'>
            <a className='text-LinkBlue' href="https://admirable-platypus-6c0a1e.netlify.app/" target="_blank" >Evento CCXP</a>
            <img src={clip} alt="clip" />
          </div>
          <p className='text-Projects'>
            Projeto realizado no módulo 4 do curso de formação em Tech da Escola DNC 📚<br></br>
            Foi desenvolvido uma landing page sobre o evento CCXP utilizando HTML, CSS e JavaScript.
            Na qual contém um cronometro mostrando os dia, horas, minutos e segundos para o inicio do grande evento.
          </p>
        </div>
        <div className='MyProjects-cardwhite__img'>
          <img src={card4} alt="card4" />
        </div>
      </div>

      <div className='MyProjects-cardblue'>
        <div className='MyProjects-cardblue__img'>
          <img src={card5} alt="card5" />
        </div>
        <div className='MyProjects-cardblue__text'>
          <div className='MyProjects-cardblue__text__link'>
            <img src={clip} alt="clip" />
            <a className='text-LinkWhite' href="https://sprightly-peony-327014.netlify.app/" target="_blank" >Bye Car DNC</a>
          </div>
          <p className='text-Projects'>
            Projeto realizado durante uma das aulas ao vivo do curso de Formação em Tech da escola DNC 📚<br></br>
            Foi desenvolvido uma página de divulgação e venda de motos utilizando HTML, CSS e JavaScript.<br></br>
            Aprendemos a utilizar a funcionalidade de carrousel, onde o usuário pode trocar o modelo da moto através das setas ao lado.
          </p>
        </div>
      </div>

    </div>
  )
}

export default MyProjects