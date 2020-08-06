import React from 'react';
import WhatsIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/7575324?s=460&u=b010135f20d143603b104225b1980c43ae8e6e68&v=4" alt="Avatar" />
                <div>
                    <strong>Cristian Cardoso</strong>
                    <span>Ciencia da Computação</span>
                </div>
            </header>
            <p>
                audhausdhausdhaushdasd
                <br /><br />
                ausdhausdhausdhasd
            </p>
            <footer>
                <p>
                    Preço/Hora <strong>R$ 180,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsIcon} alt="WhatsApp" />
                     Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;