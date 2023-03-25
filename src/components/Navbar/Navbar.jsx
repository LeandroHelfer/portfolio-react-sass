import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const navbar = () => {
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
                        <a>
                            Sobre Mim
                        </a>
                    </li>
                    <li>
                        <a>
                            <Link to={`/projects`}>Meus Projetos</Link>
                        </a>
                    </li>
                    <li>
                        <a>
                            Fale Comigo
                        </a>
                    </li>
                </ul>
            </div>
        </navbar>

    )
}

export default navbar