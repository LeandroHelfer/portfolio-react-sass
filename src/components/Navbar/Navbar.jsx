import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Modal from '../modal/modal'

const navbar = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <navbar className="navbar">
            <div className="navbar-leftSide">
                <ul>
                    <a>
                        <Link to={`/`}> Home </Link>
                    </a>
                </ul>
            </div>
            <div className="navbar-rightSide">
                <ul>
                    <li>
                        <a >
                            <button onClick={() => setModalVisible(true)}> Sobre Mim</button>
                            {modalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null}
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link to={`/projects`}>Meus Projetos</Link>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5551995285006" target="_blank" >
                            Fale Comigo
                        </a>
                    </li>
                </ul>
            </div>
        </navbar>

    )
}

export default navbar