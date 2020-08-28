import React from 'react';
import classes from './css/resetPassword.module.css'
import TextField from "@material-ui/core/TextField";
import {Redirect} from "react-router-dom";

const ResetPassword = (props) => {
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 text-center mt-lg-5'}>
                    <label className={classes.headerText}>
                        Восстановление пароля
                    </label>
                </div>
                <div className={'col-12 text-center mt-lg-2'}>
                    <label className={classes.text}>
                        Пожалуйста, введите новый пароль, который вы будете<br/>
                        использовать для входа на сайт. <br/>
                    </label>
                </div>
                <div className={'col-12 text-center mt-3'}>
                    <TextField
                        className={classes.inpPassword}
                        variant="outlined"
                        margin="normal"
                        name="password"
                        label="Новый пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={props.auth.passwordReset}
                        onChange={(e) => (props.resetPassword(e.target.value))}
                        error={props.auth.validPasswordReset ? false : true}
                        helperText={props.auth.validPasswordReset ? '' : 'Введите сложный пароль'}
                    />
                </div>
                <div className={'col-12 text-center mt-3'}>
                    {
                        props.auth.passwordRestored
                            ? <Redirect to={'/login'}/>
                            : <button onClick={()=>{props.resetPasswordClick(props.auth.passwordReset)}} className={classes.buttonSave}>
                                Сохранить пароль
                            </button>
                    }
                </div>
            </div>
        </div>
    </div>
}
export default ResetPassword;