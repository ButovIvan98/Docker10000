import React from 'react';
import classes from './css/blockResult.module.css';
import Rating from '@material-ui/lab/Rating';
import {Redirect} from "react-router-dom";

const BlockResult = (props) => {
    return <div className={'row  mb-2 ml-0 mr-0' + ' ' + classes.block}>
        <div className={'col-lg-3 text-lg-left text-center mt-lg-0 mt-3 col-6'}>
            <img src={props.img} className={classes.iconsTk}/>
        </div>
        <div className={'col-lg-2 text-lg-left text-center col-6 align-self-center'}>
                <span className={classes.textHeader}>
                    {props.nameTK}
                </span>
            <br/>
            <span className={classes.textDesc}>
                    {props.tariff}
                </span>
        </div>
        <div className={'col-lg-2 text-lg-left text-center col-6 align-self-center'}>
                <span className={classes.textHeader}>
                        <Rating
                            name="simple-controlled"
                            value={props.rating}
                            precision={0.1}
                            readOnly={true}
                        />
                </span>
            <br/>
            <span className={classes.textDesc}>
                    Рейтинг
                </span>
        </div>
        <div className={'col-lg-2 text-lg-left text-center col-6 align-self-center'}>
                <span className={classes.textHeader}>
                    {props.deliveryTime} дн.
                </span>
            <br/>
            <span className={classes.textDesc}>
                    Срок доставки
                </span>
        </div>
        <div
            className={'col-lg-3 text-lg-left text-center mt-lg-0 mt-2  mb-lg-0 mb-3 col-12 align-self-center text-center'}>
            <button onClick={() => (props.arrange(props.fullInfoCityDeparture, props.fullInfoCityDestination,props.fullInfoTK))} className={classes.buttonClick}>
                    <span className={classes.buttonTextHeader}>
                    Заказать за {props.afterPrice} ₽
                </span>
                <br/>
                <span className={classes.buttonTextDesc}>
                    Обычная цена <s>{props.beforePrice} ₽</s>
                </span>
            </button>
            {
                props.statusArrange
                    ? <Redirect to={'/order/' + props.beforePrice}/>
                    : ''
            }
        </div>
    </div>
}
export default BlockResult;