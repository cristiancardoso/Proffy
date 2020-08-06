import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

//Definicao das propriedades do PageHeader
interface PageHeaderProps {
    title: string;
}

/*Quando adiciona propriedades para um function entao troca para 
  const e usa o aerofunction como abaixo e passa as propriedades com o
  react.functioncomponent<propriedades>*/
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;