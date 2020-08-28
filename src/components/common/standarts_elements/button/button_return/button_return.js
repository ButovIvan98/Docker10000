import React from 'react';
import classes from './css/button_return.module.css';
import {NavLink} from "react-router-dom";

const Button_return = (props) => {
    return <div className={classes.main_block}>
        <NavLink className={classes.button} to={props.path}>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M20 6H1M1 6L6 1M1 6L6 11" stroke="#0B202C"/>
            </svg>
            <span>Вернуться назад</span>
        </NavLink>
    </div>
}
export default Button_return;