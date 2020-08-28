import React from 'react';
import classNamees from './modalMobileMenu.module.css';
import KenguruIcons from "../../svgImg/kenguruIcons";
import {NavLink} from "react-router-dom";

const ModalMobileMenu = (props) => {
    let updateDataCompany=(id,name,logo,person)=>{
        props.props.updateCompanyActiveData(id,name,logo,person);
    }
    let listCompanyData = props.listCompany.map(nav=>(
        <div onClick={()=>(updateDataCompany(nav.id,nav.name,nav.logo,nav.responsiblePerson))} className={'row  mr-0 ml-0 mb-2' + ' ' + classNamees.blockCompany}>
            <div className={'col-auto pr-0 align-self-center'}>
                <img src={nav.logo} className={classNamees.imgProfile}/>
            </div>
            <div className={'col-auto text-left pr-0'}>
                <span className={classNamees.nameCompany}>{nav.name}</span><br/>
                <span className={classNamees.authorizedFaceCompany}>{nav.responsiblePerson}</span>
            </div>
        </div>
    ));
    return <div className="modal fade" id="gridModal" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className={'modal-dialog' + ' ' + classNamees.modalDialog} role="document">
            <div className={'modal-content' + ' ' + classNamees.modalContent}>
                <div className={'modal-header' + ' ' + classNamees.modalHeader}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-8'}>
                                <KenguruIcons/>
                            </div>
                            <div className={'col-4 text-right align-self-center'}>
                                <button type="button" className={'close' + ' ' + classNamees.close} data-dismiss="modal"
                                        aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'modal-body' + ' ' + classNamees.modalBody}>
                   <div className={'container'}>
                       <div className={'row'}>
                           <div className={'col-12'}>
                               <div className={'row  mr-0 ml-0 mb-2' + ' ' + classNamees.blockCompany}>
                                   <div className={'col-auto pr-0 align-self-center'}>
                                       <img src={props.props.companyLogo} className={classNamees.imgProfile}/>
                                   </div>
                                   <div className={'col-auto text-left pr-0'}>
                                       <span className={classNamees.nameCompany}>{props.props.companyName}</span><br/>
                                       <span className={classNamees.authorizedFaceCompany}>{props.props.ResponsiblePerson}</span>
                                   </div>
                               </div>
                           </div>
                           <div className={'col-12 text-center'}>
                               <span className={classNamees.modalHeaderText}>Навигация</span>
                           </div>
                           <div className={'col-12'}>
                               <div className={'row' + ' ' + classNamees.link}>
                                   <div className={'col-12 mb-1'}>
                                       <NavLink to={'/'} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Контакты и адреса</span></NavLink>
                                   </div>
                                   <div className={'col-12 mb-1'}>
                                       <NavLink to={'/'} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Мои отправления</span></NavLink>
                                   </div>
                                   <div className={'col-12 mb-1'}>
                                       <NavLink to={'/'} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Счета и оплата</span></NavLink>
                                   </div>
                                   <div className={'col-12 mb-1'}>
                                       <NavLink to={'/'} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Калькуляция</span></NavLink>
                                   </div>
                               </div>
                           </div>
                           <div className={'col-12 text-center'}>
                               <span className={classNamees.modalHeaderText}>Профиль</span>
                           </div>
                           <div className={'col-12' + ' ' + classNamees.link}>
                               <div className={'row'}>
                                   <div className={'col-12 mb-1'}>
                                       <NavLink to={'/'} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Личный кабинет</span></NavLink>
                                   </div>
                                   <div className={'col-12 mb-1'}>
                                       <NavLink to={'/'} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Настройки</span></NavLink>
                                   </div>
                                   <div className={'col-12 mb-1'}>
                                       <NavLink to={'/'} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Выход</span></NavLink>
                                   </div>
                               </div>
                           </div>
                           <div className={'col-12 text-center'}>
                               <span className={classNamees.modalHeaderText}>Компании</span>
                           </div>
                           <div className={'col-12 mt-2' + ' ' + classNamees.blockLine}>
                               {listCompanyData}
                           </div>
                           <div className={'col-12 mt-2 text-center'}>
                               <NavLink className={classNamees.btnAddCompany} to={'/'}>Добавить компанию</NavLink>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
}
export default ModalMobileMenu;