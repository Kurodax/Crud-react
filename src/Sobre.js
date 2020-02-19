import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {

    return (
        <div className="Sobre">
            <h1>Rotas Sobre</h1>
            <Link to="/"><button> Voltar para Home </button></Link>
        </div>
    );
};
export default Sobre;