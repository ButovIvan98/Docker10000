import React from "react";
import classes from "../myShipmentsInformation/css/myShipmentsInformation.module.css";

const InfoOrder=(props)=>{
    return <div className={'row'}>
        <div className={'col-12'}>
            <span className={classes.orderPageSender}>Отправитель</span><br/>
        </div>
        <div className={'col-12 mt-3'}>
            <span className={classes.orderText}>{props.MySpipmentsInfo.dateShipment}</span>
            <p className={classes.textOrderStatus}>Дата отправки</p>
        </div>
        <div className={'col-12 mt-0'}>
            <span className={classes.orderText}>{props.MySpipmentsInfo.companyShipment}</span>
            <p className={classes.textOrderStatus}>Компания</p>
        </div>
        <div className={'col-12 mt-0'}>
            <span className={classes.orderText}>{props.MySpipmentsInfo.contactPersonShipment}</span>
            <p className={classes.textOrderStatus}>Контактное лицо</p>
        </div>
        <div className={'col-12 mt-0'}>
            <span className={classes.orderText}>{props.MySpipmentsInfo.phoneShipment}</span>
            <p className={classes.textOrderStatus}>Телефон</p>
        </div>
        <div className={'col-12 mt-0'}>
            <span className={classes.orderText}>{props.MySpipmentsInfo.addressShipment}</span>
            <p className={classes.textOrderStatus}>Адрес отправителя</p>
        </div>
        <div className={'col-12 mt-0'}>
            <span className={classes.orderText}>{props.MySpipmentsInfo.commentShipment}</span>
            <p className={classes.textOrderStatus}>Комментарий</p>
        </div>
    </div>
}
export default InfoOrder;