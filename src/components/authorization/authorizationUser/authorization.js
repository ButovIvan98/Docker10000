
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink, Redirect} from "react-router-dom";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = (props) => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => (props.Email(e.target.value))}
                        value={props.authorization.email}
                        error={props.authorization.validEmail ? false:true}
                        helperText={props.authorization.validEmail ? '' : props.authorization.helperText}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={props.authorization.password}
                        onChange={(e) => (props.updatePassword(e.target.value))}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={props.authorization.rememberMe} value="remember" color="primary"/>}
                        label="Запомнить меня?"
                        onChange={()=>(props.updateRememberMe(props.authorization.rememberMe))}
                    />
                    {
                        props.authorization.isAuth
                            ? <Redirect from={'/login'} to={'/'}></Redirect>
                            : <Button   
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={()=>(props.auth(props.authorization.email, props.authorization.password))}
                            >
                                Авторизация
                            </Button>
                    }
                    <Grid container>
                        <Grid item xs>
                            <NavLink to={props.authorization.validEmail ? '/reloadPassword' : '/login'} onClick={props.authorization.validEmail ? ()=>{props.reloadPasswordUser(props.authorization.email)}: null} variant="body2">
                                Забыли пароль?
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/registration" variant="body2">
                                {"Нет аккаунта? Создайте."}
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default SignIn;