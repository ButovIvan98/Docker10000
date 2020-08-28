import React from "react";
import classes from './blockMainSelect.module.css';
import {NavLink} from "react-router-dom";

const BlockMainSelect = (props) => {
    let listCompanyData = props.listInfoCompany.listCompany.map(nav => (
        <div onClick={()=>{
            props.newStatus(props.listInfoCompany.statusBlockMain);
            props.updateCompanyActiveData(
                nav.id,
                nav.company_title,
                nav.is_legal,
                nav.is_owner_company,
                nav.is_personal,
                nav.photo,
                (nav.last_name + ' ' + nav.first_name)
            )}} className={'row mr-0 ml-0 mb-2' + ' ' + classes.blockCompany}>
            <div className={'col-auto pr-0 align-self-center'}>
                <img src={nav.photo} className={classes.imgProfile}/>
            </div>
            <div className={'col-auto text-left pr-0'}>
                <span className={classes.nameCompany}>{nav.is_personal ? 'Физ. лицо' : nav.company_title}</span><br/>
                <span className={classes.authorizedFaceCompany}>{nav.last_name}</span>
            </div>
        </div>
    ))
    return <div >
        {
            props.listInfoCompany.statusBlockMain===true
                ? <div className={classes.listBlock}>
                    <NavLink to={'/personalAccount'} className={classes.mainBlockLink}><span onClick={()=>{props.newStatus(props.listInfoCompany.statusBlockMain)}}>Личный кабинет</span></NavLink><br/>
                    <NavLink to={'/setting'} className={classes.mainBlockLink}><span
                        onClick={()=>{props.newStatus(props.listInfoCompany.statusBlockMain)}}>Настройки</span></NavLink><br/>
                    <NavLink to={'/login'} className={classes.mainBlockLink}><span onClick={()=>{props.newStatus(props.listInfoCompany.statusBlockMain); props.logout();}}>Выход</span></NavLink><br/>
                    <div className={'row mb-2'}>
                        <div className={'col-12 text-center'}>
                            <span className={classes.mainBlockHeader}>Аккаунты</span>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-12' + ' ' + classes.blockLine}>
                            {listCompanyData}
                        </div>
                    </div>
                    <div className={'col-12 mt-2 text-center'}>
                        <NavLink onClick={()=>{props.newStatus(props.listInfoCompany.statusBlockMain)}} className={classes.linkAddCompany} to={'/addCompany'}>
                            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0V14M14 7H0" stroke="url(#paint0_linear)" stroke-width="2"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="10.5" y1="1.22426e-06" x2="-3.4987" y2="6.84921"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#34A5E5"/>
                                        <stop offset="1" stop-color="white"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            Добавить компанию
                        </NavLink>
                    </div>
                </div>
                : null
        }
    </div>
}
export default BlockMainSelect;