import React from 'react';
import classes from './invoice.module.css';

const Invoice = (props) => {
    return <div className={'container-fluid'}>
        <div className={'row'}>
            <div className={'col-lg-12 text-right'}>
                <span className={classes.text}>Типовая межотраслевая форма № 1-Т<br/>
                    Утверждена постановлением Госкомстата России от 28.11.97 №78</span>
            </div>
        </div>
        <div className={'row mt-2'}>
            <div className={'col-lg-10 text-center'}>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <h6>
                            <b>ТОВАРНО-ТРАНСПОРТНАЯ НАКЛАДНАЯ</b>
                        </h6>
                    </div>
                    <div className={'col-lg-12 mt-4'}>
                        <div className={'row'}>
                            <div className={'col-auto align-self-center'}>
                                <span>Грузоотправитель</span>
                            </div>
                            <div className={'col-9 text-center'}>
                                <div className={classes.line}>
                                    <span className={classes.textCompany}>
                                        ООО "Салюс", ИНН 4205308435, 650001, Кемеровская обл., г. Кемерово, 40 лет Октября, дом №2/24, тел. +79234888396, р/с 40702810300530003419 в банке ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО) БИК 044525411 к/с 30101810145250000411
                                    </span>
                                </div>
                                <span className={classes.littleText}>
                                    полное наименование организации, адрес, номер телефона
                                </span>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-auto align-self-center'}>
                                <span>Грузополучатель</span>
                            </div>
                            <div className={'col-9 text-center'}>
                                <div className={classes.line}>
                                    <span className={classes.textCompany}>
                                       ООО "ОДУВАНЧИК", ИНН 5406775985, 656049, Алтайский край, Барнаул г. Им. В.Н. Баварина пл, дом №2 офис 900
                                    </span>
                                </div>
                                <span className={classes.littleText}>
                                    полное наименование организации, адрес, номер телефона
                                </span>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-auto align-self-center'}>
                                <span>Плательщик</span>
                            </div>
                            <div className={'col-9 text-center'}>
                                <div className={classes.line}>
                                    <span className={classes.textCompany}>
                                    ООО "ОДУВАНЧИК", ИНН 5406775985, 656049, Алтайский край, Барнаул г. Им. В.Н. Баварина пл, дом №2 офис 900,  р/с 40702810300530003419 в банке ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО) БИК 044525411 к/с 30101810145250000411
                                    </span>
                                </div>
                                <span className={classes.littleText}>
                                    полное наименование организации, адрес, номер телефона
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-lg-2'}>
                <div className={'row mt-2'}>
                    <div className={'col-lg-6'}>

                    </div>
                    <div className={'col-lg-6 text-center' + ' ' + classes.tableDashed}>
                        <span>
                            Коды
                        </span>
                    </div>
                    <div className={'col-lg-6 text-right'}>
                        <span className={classes.text}>Форма по ОКУД</span>
                    </div>
                    <div className={'col-lg-6 text-center' + ' ' + classes.tableSolid}>
                        <span>
                            0345009
                        </span>
                    </div>
                    <div className={'col-lg-6 text-right'}>
                        <span className={classes.text}>№</span>
                    </div>
                    <div className={'col-lg-6 text-center' + ' ' + classes.tableSolid}>
                        <span>
                            208
                        </span>
                    </div>
                    <div className={'col-lg-6 text-right'}>
                        <span className={classes.text}>Дата составления</span>
                    </div>
                    <div className={'col-lg-6 text-center' + ' ' + classes.tableSolid}>
                        <span>
                            02.04.2020
                        </span>
                    </div>
                    <div className={'col-lg-6 text-right'}>
                        <span className={classes.text}>по ОКПО</span>
                    </div>
                    <div className={'col-lg-6 text-center' + ' ' + classes.tableSolid}>
                        <span>
                            74305034
                        </span>
                    </div>
                    <div className={'col-lg-6 text-right'}>
                        <span className={classes.text}>по ОКПО</span>
                    </div>
                    <div className={'col-lg-6 text-center' + ' ' + classes.tableSolid}>
                        <span>
                            33430039
                        </span>
                    </div>
                    <div className={'col-lg-6 text-right'}>
                        <span className={classes.text}>по ОКПО</span>
                    </div>
                    <div className={'col-lg-6 text-center' + ' ' + classes.tableSolid}>
                        <span>
                            33430039
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Invoice;