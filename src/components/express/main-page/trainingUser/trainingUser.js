import React from "react";
import classes from './css/trainingUser.module.css';
import fonImg from './img/1.png'
import video1 from './media/ddd-1.ogv'
const TrainingUser = (props) => {
    return <div className={'container-fluid' + ' ' + classes.main}>
        <div className={'row'}>
            <div className={'col-12 pt-3 pb-4 text-center'}>
                <h2 className={classes.headerText}>
                    Не знаете как пользоваться? <br/>Мы научим
                </h2>
            </div>
            <div className={'col-12'}>
                <div className={classes.blockScreen}>
                <video src={video1} autoplay controls className={classes.img}>

                </video>
                </div>
            </div>
            <div className={'col-12 mt-2'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className={classes.switchStroke}>
                                <div className={'row mb-3'}>
                                    <div className={'col-4 text-center' + ' ' + classes.blockSelectLeft}>
                                        <button className={classes.button}>

                                        </button>
                                    </div>
                                    <div className={'col-4 text-center' + ' ' + classes.blockSelect}>
                                        <button className={classes.button}>

                                        </button>
                                    </div>
                                    <div className={'col-4 text-center' + ' ' + classes.blockSelectRight}>
                                        <button className={classes.button}>

                                        </button>
                                    </div>
                                    <div className={'col-4 mt-2 text-center'}>
                                        <h6 className={classes.textDesc}>
                                            Создание компании
                                        </h6>
                                    </div>
                                    <div className={'col-4 mt-2 text-center'}>
                                        <h6 className={classes.textDesc}>
                                            Расчет тарифов
                                        </h6>
                                    </div>
                                    <div className={'col-4 mt-2 text-center'}>
                                        <h6 className={classes.textDesc}>
                                            Оформление заказа
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default TrainingUser;