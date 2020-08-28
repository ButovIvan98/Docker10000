import React from 'react';
import classes from './css/informationCompany.module.css'
import kenguIcons from './img/icons_kenguru.png';

const InformationCompany = (props) => {
    return <div className="row mr-0 ml-0">
        <div className="col-12  mb-0 mt-4  text-center">
            <img src={kenguIcons} className={classes.iconsLogo}/>
        </div>
        <div className={'col-12 text-center' + ' ' + classes.headerText}>
            <span
                className="index-text-description text-center">Кенгуру - агрегатор транспортных компаний в России.<br/>
					Мы не продаем услуги <br className={'d-block d-lg-none d-md-none d-ms-none d-xl-none'}/>
                    транспортных компаний,<br/>
                    а помогаем найти самые<br className="d-block d-md-none d-ms-none d-lg-none d-xl-none"/>
                    выгодные из них.<br/>
                    Это бесплатно.
				</span>
        </div>
        <div className={'col-lg-12 text-center mt-5'}>
            <span className={classes.headerDesc}>
                Мы сравниваем все доступные варианты <br/>
                транспортных компаний по нашему запросу, а вы оставляете заявку на перевозку на нашем сайте.
            </span>
        </div>
        <div className={'col-lg-12 mt-4 text-center'}>
            <span className={classes.headerDesc}>
                Стоимость перевозки которую мы вам показываем может измениться в зависимости от веса<br/>
                и габаритов. Но вы все равно узнаете самый дешевый вариант отправки посылки.
            </span>
        </div>
        <div className={'col-lg-12 mt-5'}>
            <div className={'container'}>
                <div className={'row text-center'}>
                    <div className={'col-lg-3 col-6'}>
                        <div className={'text-lg-center mb-3' + ' ' + classes.blockInformationCompany}>
                            <div className={classes.indexEllipses}>
                            </div>
                            <span className={classes.ellipsesText}>3</span>
                            <p className={classes.ellipsesDesc}>
                                Столько лет<br/>
                                нам исполнилось<br/>
                                в 2019 году.
                            </p>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-6'}>
                        <div className={'text-lg-center mb-3' + ' ' + classes.blockInformationCompany}>
                            <div className={classes.indexEllipses}>
                            </div>
                            <span className={classes.ellipsesText}>26</span>
                            <p className={classes.ellipsesDesc}>
                                Компаний<br/>
                                партнеров.
                            </p>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-6'}>
                        <div className={'text-lg-center mb-3' + ' ' + classes.blockInformationCompany}>
                            <div className={classes.indexEllipses}>
                            </div>
                            <span className={classes.ellipsesText}>10 000</span>
                            <p className={classes.ellipsesDesc}>
                                Клиентов<br/>
                                каждый месяц.
                            </p>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-6'}>
                        <div className={'text-lg-center mb-3' + ' ' + classes.blockInformationCompany}>
                            <div className={classes.indexEllipses}>
                            </div>
                            <span className={classes.ellipsesText}>40 000</span>
                            <p className={classes.ellipsesDesc}>
                                Поисков<br/>
                                перевозок в день.
                            </p>
                        </div>
                    </div>
                    <div className={'col-12'}>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default InformationCompany;