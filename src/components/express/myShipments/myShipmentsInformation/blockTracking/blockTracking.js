import React from 'react';
import ClockImg from "../../../../common/svgImg/clockImg";
import classes from "./blockTracking.module.css";
const BlockTracking = (props)=>{
    return <div className={'row align-self-center'}>
        <div className={'col-lg-auto pr-0'}>
            <ClockImg/>
        </div>
        <div className={'col-lg-auto align-self-center'}>
            <span className={classes.text}>24 июля 2019,  14:37</span>
        </div>
        <div className={'col-lg-1 pl-0 pr-0 align-self-center'}>
            <hr className={classes.line}/>
        </div>
        <div className={'col-lg-auto align-self-center'}>
            <span className={classes.text}>Заказ принят. Идет обработка заказа</span>
        </div>
    </div>
}
export default BlockTracking