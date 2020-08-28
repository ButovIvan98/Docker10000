import React from "react";
import classes from './css/blockCompany.module.css';

const BlockCompany = (props)=>{
    return <div className={'col-lg-4'}>
        <div className={'row'}>
            <div className={'col-12'}>
                <div className={'row mr-0 ml-0 mb-3' + ' ' + classes.blockCompany}>
                    <div className={'col-12 pl-0 pr-0'}>
                        <img className={classes.blockFotoCompany}
                             src={props.preloader}/>
                    </div>
                    <div className={'col-12 text-center' + ' ' + classes.blockImg}>
                        <img className={classes.imgCompany}
                             src={props.logo}/>
                    </div>
                    <div className={'col-12 text-center'}>
                        <label>
                            {props.nameCompany}
                        </label><br/>
                        <label className={classes.labelDesc}>
                            {props.position}
                        </label>
                    </div>
                    <div className={'col-6 text-center mb-2' + ' ' + classes.leftDescInfo}>
                        <label>
                            {props.orderCompany}
                        </label><br/>
                        <label className={classes.labelDesc2}>
                            Заказы
                        </label>
                    </div>
                    <div className={'col-6 text-center mb-2' + ' ' + classes.rightDescInfo}>
                        <label>
                            {props.amountCompany}
                        </label><br/>
                        <label className={classes.labelDesc2}>
                            Сумма ₽
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default BlockCompany;