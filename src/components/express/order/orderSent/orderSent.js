import React from 'react';
import classes from './orderSent.module.css';
import oneImg from './img/1.png';
import twoImg from './img/2.png';
import threeImg from './img/3.png';
import kenguImg from './img/kengu.png';
import InfoManager from "../../../common/infoManager/infoManager";
import img from "../../addCompany/addingDocuments/img/1.png";
import download from './img/Vector.png';

const OrderSent = (props) => {
    return <div className={'container-fluid' + classes.blockContainer}>
        <div className={'container'}>
            <div className={'row mt-lg-4' + ' ' + classes.block}>
                <div className={'col-lg-12 mt-lg-5 text-center'}>
                    <img src={kenguImg}/>
                </div>
                <div className={'col-lg-12 text-center'}>
                    <h3 className={classes.headerText}>
                        Ваше первое отправление успешно создано!<br/> Что дальше?
                    </h3>
                </div>
                <div className={'col-lg-12'}>
                    <div className={'row mt-5'}>
                        <div className={'col-lg-4' + ' ' + classes.blockInfo1}>
                            <div className={'row'}>
                                <div className={classes.blockImg}>
                                    <img className={classes.img} src={oneImg}/>
                                </div>
                                <div className={'col-lg-12 text-center pt-4 mt-5'}>
                                    <h4 className={classes.textHeader2}>
                                        Скачайте и распечатайте<br/>
                                        накладную
                                    </h4>
                                </div>
                                <div className={'col-lg-12 pl-lg-4 mt-3 text-center  pr-lg-4'}>
                                    <label className={classes.labelText}>
                                        В файле находится 4 копии накладной, пожалуйста, распечатайте ее до приезда
                                        курьера.
                                    </label>
                                </div>
                                <div className={'col-lg-12 text-center'}>
                                    <a href={img} className={classes.buttonLoad} download>
                                        <img src={download}/>
                                        <span>
                                            Скачать накладные
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-4'}>
                            <div className={'row'}>
                                <div className={classes.blockImg}>
                                    <img className={classes.img} src={twoImg}/>
                                </div>
                                <div className={'col-lg-12 text-center pt-4 mt-5'}>
                                    <h4 className={classes.textHeader2}>
                                        Ожидайте<br/>
                                        курьера.
                                    </h4>
                                </div>
                                <div className={'col-lg-12 pl-lg-4 mt-3 text-center  pr-lg-4'}>
                                    <label className={classes.labelText}>
                                        По приезду курьера вручите ему 3 копии
                                        накладной и сам груз. Если до приезда курьера
                                        вы не распечатали накладную, попросите его оформить новый бланк накладной.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-4'}>
                            <div className={'row'}>
                                <div className={classes.blockImg}>
                                    <img className={classes.img} src={threeImg}/>
                                </div>
                                <div className={'col-lg-12 text-center pt-4 mt-5'}>
                                    <h4 className={classes.textHeader2}>
                                        Отслеживайте<br/>
                                        отправление.
                                    </h4>
                                </div>
                                <div className={'col-lg-12 pl-lg-4 mt-3 text-center  pr-lg-4'}>
                                    <label className={classes.labelText}>
                                        Чтобы отслеживать отправление,
                                        в личном кабинете введите номер накладной. Только после ввода номера у вас
                                        заработает трекинг отправления.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-12 mt-5 text-center'}>
                    <h3 className={classes.headerText}>
                        Остались вопросы? <br/> Позвоните нашему менеджеру.
                    </h3>
                </div>
                <div className={'col-lg-4 text-center'}>

                </div>
                <div className={'col-lg-4 text-center' + ' ' + classes.blockManager}>
                    <InfoManager/>
                </div>
                <div className={'col-lg-4 text-center'}>

                </div>
            </div>
        </div>
    </div>
}
export default OrderSent;