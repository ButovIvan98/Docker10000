import React from 'react';
import classes from './Variable_main.module.css';
import {NavLink} from "react-router-dom";

const Variable_main = (props) => {
    let navigationElement = props.Express_main.map(nav => (
        <div className={'col-auto d-none d-lg-block mt-2' + ' ' + classes.indexBlockMain}>
            <NavLink to={nav.id} activeclassName={classes.active}>
                <p className={classes.textHeader}>
                    {nav.title}
                </p></NavLink>
        </div>))
    return <div className={'container-fluid'}>
        <div className={'row' + ' ' + classes.blockMain}>
            {navigationElement}
        </div>
    </div>
};
export default Variable_main;