import React from 'react';
import classes from './blockPayment.module.css';
import {NavLink} from "react-router-dom";

const BlockPayment = (props) => {
    return <NavLink className={classes.navLink} to={'/myPayment/account'}>
        <div className={'row mb-3 mt-3 mr-0 ml-0 ' + ' ' + classes.listOrder}>
            <hr className={'d-block d-lg-none' + ' ' + classes.line}/>
            <div className={'col-lg-2 mb-lg-0 mb-3 col-12 '} style={{borderLeft: '2px solid' + ' ' + 'red'}}>
                <span className={classes.textHeader}>Счет от 28.06.2020</span>
                <p className={classes.text}>Требуется оплата</p>
            </div>
            <div className={'col-lg-3 mb-lg-0 mb-3 col-12' + ' ' + classes.cityIn}>
                <span className={classes.textHeader}>ООО «31»</span>
                <p className={classes.text}>Компания</p>
            </div>
            <div className={'col-lg-3 mb-lg-0 mb-3 col-12'}>
                <span className={classes.textHeader}>С 28.05.2020 по 28.06.2020</span>
                <p className={classes.text}>Период</p>
            </div>
            <div className={'col-lg-1 mb-lg-0 mb-2 col-6'}>
                <span className={classes.textHeader} style={{color: '#28a4eb'}}>1</span>
                <p className={classes.text}>Заявки</p>
            </div>
            <div className={'col-lg-1 col-6 pl-lg-0 pr-lg-0'}>
                <span className={classes.textHeader}>890 ₽</span>
                <p className={classes.text}>Сумма</p>
            </div>
            <div className={'col-lg-2 mt-lg-0 mt-2 col-12 align-self-center text-lg-right text-center'}>
                <NavLink to={'/paymentCard'}>
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 0C8.54836 0 8.18182 0.366545 8.18182 0.818182V4.09091H9.81818V0.818182C9.81818 0.366545 9.45164 0 9 0ZM9.81818 4.09091V14.3885L11.6942 12.5124C12.0142 12.1925 12.5313 12.1925 12.8512 12.5124C13.1711 12.8323 13.1711 13.3495 12.8512 13.6694L9.57848 16.9421C9.41894 17.1017 9.20945 17.1818 9 17.1818C8.79055 17.1818 8.58107 17.1017 8.42152 16.9421L5.14879 13.6694C4.82888 13.3495 4.82888 12.8323 5.14879 12.5124C5.4687 12.1925 5.98584 12.1925 6.30575 12.5124L8.18182 14.3885V4.09091H1.63636C0.732273 4.09091 0 4.82318 0 5.72727V19.6364C0 20.5405 0.732273 21.2727 1.63636 21.2727H16.3636C17.2677 21.2727 18 20.5405 18 19.6364V5.72727C18 4.82318 17.2677 4.09091 16.3636 4.09091H9.81818Z"
                            fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="13.5" y1="1.86024e-06" x2="-5.54302" y2="7.88385"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#34A5E5"/>
                                <stop offset="1" stop-color="#00A2FF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className={classes.loading}>Скачать</span>
                </NavLink>
            </div>
        </div>
    </NavLink>
}
export default BlockPayment
