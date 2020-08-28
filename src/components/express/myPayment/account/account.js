import React from "react";
import classes from './account.module.css';
import BlockPayment from "../blockPayment/blockPayment";
import MySpipments from "../../myShipments/myShipments";
import ExportMyShipmentsContainer from "../../myShipments/myShipmentsContainer";
import Button_return from "../../../common/standarts_elements/button/button_return/button_return";

const Account =(props)=>{
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row mt-3 mb-3' + ' ' + classes.block}>
                <div className={'col-lg-12'}>
                    <Button_return path={'/myPayment'}/>
                </div>
                <div className={'col-lg-12 mt-3 '}>
                    <h2>
                        Счет от 28.06.2020
                    </h2>
                </div>
                <div className={'col-lg-12'}>
                    <BlockPayment/>
                </div>
                <div className={'col-lg-12'}>
                    <h4>
                        Список заказов
                    </h4>
                    <hr className={classes.line}/>
                </div>
                <div className={'col-lg-12'}>
                    <ExportMyShipmentsContainer/>
                </div>
            </div>
        </div>
    </div>
}
export default Account;