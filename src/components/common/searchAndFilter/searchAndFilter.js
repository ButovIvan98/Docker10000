import React from "react";
import classes from './css/searchAndFilter.module.css';
import TextField from "@material-ui/core/TextField";
import searchImg from "./img/search.png";
import {NavLink} from "react-router-dom";


const SearchAndFilter = (props) => {
    return <div className={'row'}>
        <div className={'col-lg-6 col-12'}>
            <TextField
                id="standard-basic"
                label="Введите адрес"
                className={classes.inputSearch}
            />
            <img className={classes.searchImg} src={searchImg}/>
        </div>
        <div className={'text-center align-self-center col-lg-3 col-12'}>

        </div>
        <div className={' mt-lg-0 mt-2 text-lg-right text-center align-self-center col-lg-3 col-12'}>
            <NavLink className={classes.noneDecoration} to={'/addAddress'}>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0V14M14 7H0" stroke="url(#paint0_linear)" stroke-width="2"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="10.5" y1="1.22426e-06" x2="-3.4987" y2="6.84921"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#34A5E5"/>
                            <stop offset="1" stop-color="#00A2FF"/>
                        </linearGradient>
                    </defs>
                </svg>
                <span className={classes.addAddress}>Добавить адрес</span>
            </NavLink >
        </div>
        <div className={'col-12'}>
            <hr/>
        </div>
    </div>
}
export default SearchAndFilter;