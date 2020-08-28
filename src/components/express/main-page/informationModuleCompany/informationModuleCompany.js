import React from 'react';
import classes from './css/informationModuleCompany.module.css';
import settingIcons from './img/setting_widget.png';
import computerIcons from './img/computer_widget.png';
import cloudsIcons from './img/cloud_widget.png';
import {NavLink} from "react-router-dom";

const InformationModuleCompany = () => {
    return <div className={'container'}>
        <div className={'row'}>
            <div className={'col-12 text-center mt-4'}>
                <h2 className={classes.widgetHeader}>Кенгуру относится к вам с заботой</h2>
                <h4 className={classes.widgetHeader}>Мы разработали бесплатный модуль для вашего сайта.</h4>
                <div className={'row'}>
                    <div className={'col-lg-4 col-6 text-center mt-lg-5 mt-2 pl-lg-5 pr-lg-5'}>
                        <div className={classes.blockInfo}>
                            <img src={settingIcons}/>
                        </div>
                        <h5 className={classes.descHeader}>Скорость</h5>
                        <h6 className={classes.descHeader}>
                            Наш модуль поможет вам и вашим клиентам рассчитать стоимость доставки, не покидая вашего
                            сайта.
                        </h6>
                    </div>
                    <div className={'col-lg-4 col-6 text-center mt-lg-5 mt-2 pl-lg-5 pr-lg-5'}>
                        <div className={classes.blockInfo}>
                            <img src={computerIcons}/>
                        </div>
                        <h5 className={classes.descHeader}>Удобство</h5>
                        <h6 className={classes.descHeader}>
                            Модуль является полностью адаптивным под любые типы устройств.
                        </h6>
                    </div>
                    <div className={'col-lg-4 col-12 text-center mt-lg-5 mt-2 pl-lg-5 pr-lg-5'}>
                        <div className={classes.blockInfo}>
                            <img src={cloudsIcons}/>
                        </div>
                        <h5 className={classes.descHeader}>Простота</h5>
                        <h6 className={classes.descHeader}>
                            Модуль имеет минимальное количество полей для заполнения, что позволяет экономить ваше время
                            при
                            расчете.
                        </h6>
                    </div>
                    <div className={'col-12 text-center mt-3 mb-3'}>
                        <NavLink to="https://kenguruexpress.ru/site/page_widget" className={classes.button}>
                            Узнать подробнее
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    </div>
}
export default InformationModuleCompany;