import React from 'react'
import "./index.scss"

const modal = ({ id = "modal", onClose = () => {} }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id == id) onClose();
    }

    return (
        <div id = {id} className='modal' onClick={handleOutsideClick}>
            <div className='container'>
                <button className='close' onClick={onClose} />
                <div className='content'>
                    <h1 className='content__h1'>
                        SOBRE MIM
                    </h1>
                    <h2 className='content__h2'>
                        Estudante de Formação em Tech da DNC 📚
                    </h2>
                    <h2 className='content__h2'>
                        Conhecimento em linguagens HTML, CSS e Javascript ✅️<br />
                        Frameworks e bibliotecas como React.js e Bootstrap ✅<br />
                        Estudando Back-End ▶️
                    </h2>
                    <h2 className='content__h2'>
                    Com experiência há 8 anos na área de logística, 
                    tendo atuação como Encarregado 
                    e atualmente como Analista, 
                    tenho habilidade na gestão do tempo, 
                    e principalmente de pessoas, 
                    sendo responsável pela execução 
                    e monitoramento de processos diversos.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default modal