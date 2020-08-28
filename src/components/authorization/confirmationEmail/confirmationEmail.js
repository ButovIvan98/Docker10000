import React from "react";
import classes from './css/confirmationEmail.module.css';
import {Nav} from "bootstrap-4-react/lib/components";
import {NavLink} from "react-router-dom";

const ConfirmationEmail = (props)=>{
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 text-center mt-5'}>
                    <img src="https://img.icons8.com/fluent/56/000000/mail.png"/>
                </div>
                <div className={'col-12 mt-4 text-center'}>
                    <label className={classes.text}>
                        Благодарим вас за регистрацию.<br/>
                        Вы подтвердили Email.<br/> Авторизируйтесь и заполните все поля для активации аккаунта.<br/> С уважением команда KenguruExpress.
                    </label>
                </div>
                <div className={'col-12 text-center'}>
                    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path d="M80 35C80 48.8071 68.8071 60 55 60C41.1929 60 30 48.8071 30 35C30 21.1929 41.1929 10 55 10C68.8071 10 80 21.1929 80 35Z" fill="url(#paint0_linear)"/>
                        </g>
                        <path d="M68.8224 35.0403L66.282 35.2898L57.7898 39.1677L59.1969 37.1606L53.6629 38.2275L58.0521 46.4152L48.2225 36.4161L51.361 35.5555L37 25L51.0271 30.602L55.7044 30.4188L63.1835 34.1884L65.5875 33.7461L64.4771 33.7432L63.629 32.6782L69.4501 34.338L68.8224 35.0403Z" fill="white"/>
                        <path d="M60.2627 36.9541L57.7891 39.1684L59.1962 37.1604L60.2627 36.9541Z" fill="#EFEFEF"/>
                        <path d="M52.8788 35.1391L51.361 35.5555L37 25L52.8788 35.1391Z" fill="#EFEFEF"/>
                        <path d="M58.0523 46.4151L48.2227 36.416L51.262 37.4282L58.0523 46.4151Z" fill="#EFEFEF"/>
                        <defs>
                            <filter id="filter0_d" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="20"/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.521569 0 0 0 0 1 0 0 0 0.3 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear" x1="67.5" y1="10" x2="17.5046" y2="34.4615" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#18A2F1"/>
                                <stop offset="1" stop-color="#0085FF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={'col-12 text-center mt-4'}>
                    <NavLink to={'/login'} className={classes.buttonLogin}>
                        <span>
                            Авторизация
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
}
export default ConfirmationEmail;