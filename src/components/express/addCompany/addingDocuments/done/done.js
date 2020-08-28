import React from 'react';
import classes from './done.module.css';
import oneImg from './img/1.png';
import twoImg from './img/2.png';
import threeImg from './img/3.png';
import kenguImg from './img/kengu.png';
import InfoManager from "../../../../common/infoManager/infoManager";

const Done = (props) => {
    return <div className={'container-fluid' + classes.blockContainer}>
        <div className={'container'}>
            <div className={'row mt-lg-4' + ' ' + classes.block}>
                <div className={'col-lg-12 mt-lg-5 text-center'}>
                    <img src={kenguImg}/>
                </div>
                <div className={'col-lg-12 text-center'}>
                    <h3 className={classes.headerText}>
                        Ваша компания успешно создана. <br/> Что дальше?
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
                                        Ваши документы будут<br/>
                                        проверены.
                                    </h4>
                                </div>
                                <div className={'col-lg-12 pl-lg-4 mt-3 text-center  pr-lg-4'}>
                                    <label className={classes.labelText}>
                                        Наши специалисты проверят ваши документы на подлинность.
                                        А также сделают заключение о благонадежности вашей компании.
                                    </label>
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
                                        Вы получите email<br/>
                                        уведомление.
                                    </h4>
                                </div>
                                <div className={'col-lg-12 pl-lg-4 mt-3 text-center  pr-lg-4'}>
                                    <label className={classes.labelText}>
                                        После проверки у вашей компании изменится статус. Мы отправим на вашу почту email оповещение об окончании проверки.
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
                                        Вам позвонит наш<br/>
                                        менеджер.
                                    </h4>
                                </div>
                                <div className={'col-lg-12 pl-lg-4 mt-3 text-center  pr-lg-4'}>
                                    <label className={classes.labelText}>
                                        По окончанию проверки наш менеджер позвонит и проинформирует вас об ее результатах. После этого для вашей компании будет доступно отправление грузов и посылок.
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
                    <InfoManager />
                </div>
                <div className={'col-lg-4 text-center'}>

                </div>
            </div>
        </div>
    </div>
}
export default Done;