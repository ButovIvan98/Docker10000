import React from 'react';
import classes from './css/orderData.module.css';
import img from './img/bklsrv.png';
import bksImg from './img/bklsrv.png';
import Rating from "@material-ui/lab/Rating";

const OrderData = (props) => {
    return <div className={'row align-self-center'}>
        <div className={'col-lg-3  text-center align-self-center'}>
            <img className={classes.imgCompany} src={props.company.imgCompany}/>
        </div>
        <div className={'col-lg-3 mt-lg-0 mt-2 col-6 align-self-center'}>
            <span className={classes.header1}>
                {props.company.company}
            </span>
            <br/>
            <span className={classes.header2}>
                {props.company.tariff}
            </span>
        </div>
        <div className={'col-lg-2 col-6 mt-lg-0 mt-2 align-self-center'}>
            <span className={classes.header1}>
                <Rating
                    name="simple-controlled"
                    value={props.company.rating}
                    precision={0.1}
                    readOnly={true}
                />
            </span>
            <br/>
            <span className={classes.header2}>
                Рейтинг
            </span>
        </div>
        <div className={'col-lg-2 col-6 mt-lg-0 mt-2 align-self-center'}>
            <span className={classes.header1}>
                {props.company.deliveryTime} дней
            </span>
            <br/>
            <span className={classes.header2}>
                Срок доставки
            </span>
        </div>
        <div className={'col-lg-2 col-6 mt-lg-0 mt-2 align-self-center'}>
            <span className={classes.header1}>
                {props.company.pickup ? 'Дверь' : 'Склад'}-{props.company.delivery ? 'Дверь' : 'Склад'}
            </span>
            <br/>
            <span className={classes.header2}>
                Доставка
            </span>
        </div>
    </div>
}
export default OrderData;
