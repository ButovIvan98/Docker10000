import React from 'react';
import classes from "../css/myShipments.module.css";
import {NavLink} from "react-router-dom";

const BlockShipments = (props) => {
    return <NavLink className={classes.navLink} to={'/1'}>
        <div className={'row mb-3 mt-3 ' + ' ' + classes.listOrder}>
            <hr className={'d-block d-lg-none' + ' ' + classes.line}/>
            <div className={'col-lg-2 mb-lg-0 mb-3 col-12 '} style={{borderLeft: '2px solid' + ' ' + props.color}}>
                <span className={classes.textHeader}>{props.sendingCity}</span>
                <p className={classes.text}>{props.sender}</p>
            </div>
            <div className={'col-lg-1 mt-2 d-none d-lg-block'}>
                <hr className={classes.lineDouble}/>
            </div>
            <div className={'col-lg-2 mb-lg-0 mb-3 col-12' + ' ' + classes.cityIn}>
                <span className={classes.textHeader}>{props.recipientCity}</span>
                <p className={classes.text}>{props.recipient}</p>
                <p className={classes.statusOrder} style={{color: props.color}}>{props.status}</p>
            </div>
            <div className={'col-lg-2 col-6'}>
                <span className={classes.textHeader}>{props.dateOrder}</span>
                <p className={classes.text}>Дата заказа</p>
            </div>
            <div className={'col-lg-2 mb-lg-0 mb-2 col-6'}>
                <span className={classes.textHeader}>{props.numberInvoice}</span>
                <p className={classes.text}>Номер накладной</p>
            </div>
            <div className={'col-lg-1 col-6 pl-lg-0 pr-lg-0'}>
                <span className={classes.textHeader} style={{color: '#28a4eb'}}>{props.price} ₽</span>
                <p className={classes.text}>Цена</p>
            </div>
            <div className={'col-lg-2 col-6'}>
                <span className={classes.textHeader}>{props.transportCompany}</span>
                <p className={classes.text}>{props.tariff}</p>
            </div>
        </div>
    </NavLink>
}
export default BlockShipments;