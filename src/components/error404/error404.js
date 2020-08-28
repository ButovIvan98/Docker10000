import React from 'react';
import classes from './css/error404.module.css';
import img404 from './img/404.png';
import {NavLink} from "react-router-dom";
import Clouds from "./clouds/cloudsLeft";

const Error404 =()=>{
    return<div className={'container-fluid' + ' ' + classes.block}>
        <div className={'row' + ' ' + classes.blockRow}>
            <div className={classes.block404}>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <img src={img404}/>
                    </div>
                </div>
                <div className={'col-lg-12 text-center'}>
                    <span className={classes.text}>
                    К сожалению, данная страница не найдена.<br/> Но вы можете перейти к созданию отправления.
                </span>
                </div>
                <div className={'col-lg-12 text-center mt-lg-5'}>
                    <NavLink to={'/'} className={classes.addAddress}>
                        <span>Главная страница</span>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
}
export default Error404;