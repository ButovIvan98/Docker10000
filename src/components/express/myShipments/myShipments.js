import React from 'react';
import classes from './css/myShipments.module.css';
import {NavLink} from "react-router-dom";
import SearchSVG from "../../common/svgImg/searchSVG";
import BlockShipments from "./blockShipments/blockShipments";

const MySpipments = (props) => {
    let listOrder = props.MySpipments.map(list => (
        <BlockShipments
            color={list.color}
            sendingCity={list.sendingCity}
            sender={list.sender}
            recipientCity={list.recipientCity}
            recipient={list.recipient}
            status={list.status}
            dateOrder={list.dateOrder}
            numberInvoice={list.numberInvoice}
            price={list.price}
            transportCompany={list.transportCompany}
            tariff={list.tariff}
        />
    ))
    return <div className={'container' + ' ' + classes.block}>
        <div className={'row mr-0 ml-0' + ' ' + classes.blockRow}>
            <div className={'col-12 '}>
                <div className={'row'}>
                    <div className={'col-12 pl-0 pr-0'}>
                        <input placeholder={'Введите данные перевозки'} className={classes.search}/>
                        <SearchSVG/>
                        <span className={classes.textHeaderFilter}>Сортировать: </span>
                        <select className={classes.listFilter}>
                            <option>Сначала новые</option>
                            <option>Сначала старые</option>
                            <option>Сначала дорогие</option>
                            <option>Сначала дешевые</option>
                        </select>
                        <svg className={classes.imgSelect} width="10" height="6" viewBox="0 0 10 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M1 1L5 5L9 1" stroke="#0B202C"/>
                        </svg>

                    </div>
                </div>

                {listOrder}
            </div>
        </div>
    </div>
}
export default MySpipments