import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink, Redirect} from "react-router-dom";
import {updateTextEmail} from "../../../redux/registrationReducer";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import confirmations from './img/fon1.png';
import classesStyle from './css/registration.module.css';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const SignUp = (props) => {
    const classes = useStyles();
    return <div className={'container'}>
        {
            props.registrationPage.addUser
                ? <div className={'row mt-lg-5 mt-2'}>
                    <div className={'col-12 mt-lg-5 mt-2 text-center'}>
                        <Typography>
                            <BeenhereIcon
                                color="secondary"
                                fontSize='large'
                            />
                        </Typography>
                        <h4 className={'mt-2' + ' ' + classesStyle.headerText}>Подзравляем<br/> Вы успешно зарегистрировались.
                            <br/>Для дальнейшей работы необходимо подтвердить почту.
                            <br/>И приступайте к первому оформлению заказа.
                        </h4>
                    </div>
                    <div className={'col-12 text-center'}>
                        <img className={classesStyle.img} src="https://img.icons8.com/fluent/48/000000/down.png"/>
                    </div>
                    <div className={'col-12 mt-2 text-center'}>
                        <img className={classesStyle.imgScreen} src={confirmations}/>
                    </div>
                    <div className={'col-12 mt-2 text-center'}>
                        <img className={classesStyle.img} src="https://img.icons8.com/fluent/48/000000/down.png"/>
                    </div>
                    <div className={'col-12 text-center mt-2'}>
                        <NavLink to={'https://mail.yandex.ru/?uid=1130000044764829#inbox'}>
                            <img className={classesStyle.imgEmail}
                             src={'https://avatars.mds.yandex.net/get-pdb/1708639/e4bb2149-39fd-447e-8246-f1f30dad352b/s1200?webp=false'}/>
                        </NavLink>
                        <NavLink to={'https://e.mail.ru/inbox/'}>
                        <img className={classesStyle.imgEmail}
                             src={'https://www.journeyrva.com/wp-content/uploads/2015/03/s-icons_social-media-icons_basic_round_set_gradient-color_512x512_0033_mail.ru_.png'}/>
                        </NavLink>
                        <NavLink to={'https://mail.google.com/mail/u/0/#inbox'}>
                        <img className={classesStyle.imgEmail}
                             src={'https://i.ya-webdesign.com/images/gmail-logo-png-transparent-background-8.png'}/>
                        </NavLink>
                    </div>

                </div>
                : <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Регистрация
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        error={props.registrationPage.validEmail ? false : true}
                                        variant="outlined"
                                        required
                                        color="primary"
                                        fullWidth
                                        id="mail"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        value={props.registrationPage.email}
                                        onChange={(e) => (props.Email(e.target.value))}
                                        helperText={props.registrationPage.validEmail ? '' : props.registrationPage.helperTextEmail}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={props.registrationPage.validPassword ? false : true}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={props.registrationPage.password}
                                        onChange={(e) => (props.Password(e.target.value))}
                                        helperText={props.registrationPage.validPassword ? '' : props.registrationPage.helperTextPassword}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox checked={props.registrationPage.notifications}
                                                           value="allowExtraEmails" color="primary"/>}
                                        label="Я хочу получать уведомления на email."
                                        onChange={() => (props.updateChecked(props.registrationPage.notifications))}
                                    />
                                </Grid>
                            </Grid>
                            {props.registrationPage.addUser
                                ? <Redirect from={'/registration'} to={'/login'}></Redirect>
                                : <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => (props.registrationPage.validEmail ? (props.registrationPage.validPassword ? props.addUser(props.registrationPage.email, props.registrationPage.password) : null) : null)}
                                >
                                    Регистрация
                                </Button>}
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <NavLink to={'/login'} variant="body2">
                                        Уже есть аккаунт? Войдите
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
        }
    </div>
}
export default SignUp;
