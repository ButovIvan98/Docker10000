import React from 'react';
import classNamees from './css/transportCompany.module.css';
import TextLvl1 from "../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import {NavLink} from "react-router-dom";

const TransportCompany = (props) => {

    let elementTk = props.transportCompany.listTK.map(nav => (<div className={'col-lg-3 mt-2'}>
        <div className={classNamees.blockTK}><NavLink to={'/profileCompany/' + nav.id}><img
            src={nav.img} className={classNamees.imgTK}/></NavLink>
        </div>
    </div>))
    return <div className={'container pb-4' + ' ' + classNamees.block}>
        <div className={'row ' + ' ' + classNamees.blockRow}>
            <div className="col-12">
                <TextLvl1 text={'Транспортные компании'}/>
                <hr/>
            </div>
            {elementTk}
        </div>
    </div>
}
export default TransportCompany;