import React from 'react';
import classNamees from './footer.module.css';
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className={'relative-bottom'}>
            <div className={'container-fluid mt-4'}>
                <div className={'row'}>
                    <li className={'col-lg-12 d-none d-lg-block text-lg-center'}>
                        <nav className={classNamees.indexFooter}>
                            <ul>
                                <li><NavLink to={'/aboutMe'}>О нас</NavLink></li>
                                <li><NavLink to={'/contact'}>Контакты</NavLink></li>
                                <li><NavLink to={'/transportCompany'}>Транспортные компании</NavLink></li>
                                <li><NavLink to={'/policy'}>Политика и конфиденциальность</NavLink></li>
                                <li><NavLink to={'/publicOffer'}>Публичная оферта</NavLink></li>
                                <li><NavLink to={'/paymentMethod'}>Способы оплаты</NavLink></li>
                            </ul>
                        </nav>
                    </li>
                </div>
                <div className={'col-12 text-center'}>
                    <p className={classNamees.indexFooterText}>
                        © 2016–2019, <NavLink to="/kenguru">Кенгуру</NavLink> - поиск и сравнение тарифов на
                        экспресс-перевозки
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;