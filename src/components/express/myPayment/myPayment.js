import React from "react";
import classes from './css/myPayment.module.css';
import classNamees from "../myShipments/css/myShipments.module.css";
import {NavLink} from "react-router-dom";
import BlockPayment from "./blockPayment/blockPayment";
import Button_return from "../../common/standarts_elements/button/button_return/button_return";

const MyPayment =(props)=>{
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 mt-3'}>
                    <h2>
                        Счета и оплата
                    </h2>
                </div>
                <div className={'col-12'}>
                    {/*Место для фильтра*/}
                </div>
                <div className={'col-12'}>
                    <BlockPayment/>
                </div>
            </div>
        </div>
    </div>
}
export default MyPayment;