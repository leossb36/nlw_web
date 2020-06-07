import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>

                <main>
                    <h1>Seu MarketPlace de coleta de Resíduos.</h1>
                    <p>ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um Ponto de Coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;