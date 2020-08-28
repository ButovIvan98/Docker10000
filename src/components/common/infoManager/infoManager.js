import React from "react";
import classes from './css/infoManager.module.css';

const InfoManager = (props) => {
    return <div className={'row mr-lg-3 ml-lg-3' + ' ' + classes.blockManager}>
        <div className="col-12 mt-4 text-center">
            <img src={'https://yt3.ggpht.com/a/AGF-l7-sQKULI3LnRjfwoh2wM3Ea5W3mkqxtaJZWyw=s900-c-k-c0xffffffff-no-rj-mo'}
                 className={classes.imgManager}/>
        </div>
        <div className={'col-12 mt-2 text-center'}>
            <span className={classes.nameManager}>
                Кирилл Евгеньевич
            </span>
        </div>
        <div className={'col-12  text-center'}>
            <span className={classes.textDescription}>
                Ваш персональный менеджер
                </span>
        </div>
        <div className={'col-12  text-center'}>
                            <span className={classes.nameManager}>
                                8-800-600-40-44
                            </span>
        </div>
        <div className={'col-12 mb-2 text-center'}>
                            <span className={classes.textDescription}>
                                Контактный номер телефона
                            </span>
        </div>
    </div>
}
export default InfoManager;