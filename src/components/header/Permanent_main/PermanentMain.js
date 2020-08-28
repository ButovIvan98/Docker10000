import React from 'react';
import classes from './Permanent_main.module.css';
import {NavLink} from "react-router-dom";
import KenguruIcons from "../../common/svgImg/kenguruIcons";
import KenguruText from "../../common/svgImg/kenguruText";
import ListMenu from "../../common/svgImg/listMenu";
import ListMenuIn from "../../common/svgImg/listMenuIn";
import ModalMobileMenu from "../../common/modal/modalMobileMenu/modalMobileMenu";
import BlockMainSelectContainerExport from "../../common/selectBlock/blockMainSelectContainer";

const Permanent_main = (props) => {
    let updateStatus = () => {
        props.newStatus(props.status);
    }
    return <div className={'container-fluid'}>
        <div className={'row' + ' ' + classes.mainBlock}>
            <div className={'col-lg-3 col-3 mt-lg-1 mb-1' + ' ' + classes.indexHeaderLogo}>
                <NavLink to="/">
                    <KenguruIcons/>
                    <KenguruText/>
                </NavLink>
            </div>
            <div className={'col-lg-6 text-center d-lg-inline d-none  col-6 align-self-center'}>
                <NavLink className={classes.phoneNumber} to="/transportCompany">Транспортные компании</NavLink>
                <NavLink className={classes.phoneNumber} to="/paymentMethod">Способы оплаты</NavLink>
                <NavLink className={classes.phoneNumber} to="/websitePlagin">Модуль для сайта</NavLink>
                <NavLink className={classes.phoneNumber} to="/contact">Контакты</NavLink>
            </div>
            <div className={'col-6 d-lg-none d-flex'}>

            </div>
            <div className={'col-lg-0 d-lg-none col-3 align-self-center'}>
                <button type="button"
                        className={'btn btn-primary btn-lg open-modal-btn btnStyleModal ' + ' ' + classes.buttonMobileMenu}
                        data-toggle="modal"
                        data-target="#gridModal">
                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0H36L35 2H0L1 0Z" fill="white"></path>
                        <path d="M1 7H24L23 9H0L1 7Z" fill="white"></path>
                        <path d="M1 14H14L13 16H0L1 14Z" fill="white"></path>
                    </svg>
                </button>
                <ModalMobileMenu  props={props} listCompany={props.DataCompany}/>
            </div>
            { props.auth.isAuth
                ? <div className={'col-lg-3 d-lg-block text-right d-none align-self-center'}>
                    <span onClick={updateStatus} className={classes.listHeader}>
                        <img id={props.activeCompany.id}
                             src={props.activeCompany.photo}
                             className={classes.imgHeader}/><text
                        className={classes.listHeader}>{props.activeCompany.isPersonal ? (props.activeCompany.username) : props.activeCompany.companyTitle}</text>
                        {props.status === false ? <ListMenu/> : <ListMenuIn/>}
                    </span>
                    <BlockMainSelectContainerExport />
                </div>
                : <div className={'col-lg-3 d-lg-block text-right d-none align-self-center'}>
                    <NavLink className={classes.phoneNumber} to="tel:+78006004044">8(800)-600-40-44</NavLink>
                    <NavLink to={'/login'} className={classes.phoneNumber}>Личный кабинет</NavLink>
                </div>
            }
        </div>
    </div>
};
export default Permanent_main;