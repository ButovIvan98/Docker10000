import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SpeedIcon from '@material-ui/icons/Speed';
import {AttachMoney} from "@material-ui/icons";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },

    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));
const Pricing = (props) => {
    const classes = useStyles();
    console.log('props.result.cheaply');
    console.log(props.result.cheaply);
    console.log('props.result.cheaply');
    console.log('props.result.faster');
    console.log(props.result.faster);
    console.log('props.result.faster');
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {
                        <Grid item xs={12} sm={'ddd' === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={'Дешевле'}
                                    subheader={''}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={<AttachMoney
                                    color={'primary'}
                                    />}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ₽{props.result.cheaply.price}
                                        </Typography>
                                    </div>
                                    <ul>
                                        <Typography component="li" variant="h6" align="center" >
                                            {props.result.cheaply.operator}
                                        </Typography>
                                        <Typography component="li" variant="subtitle1" align="center" >
                                            {props.result.cheaply.title}
                                        </Typography>
                                        <Typography component="li" variant="subtitle1" align="center" >
                                            {props.result.cheaply.term} дней
                                        </Typography>
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={'contained'} color="primary">
                                        Оформить заказ
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    }
                    {
                        <Grid item xs={12} sm={'ddd' === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={'Наш выбор'}
                                    subheader={''}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={<StarIcon
                                        color={'primary'}
                                    />}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ₽{props.result.faster.price}
                                        </Typography>
                                    </div>
                                    <ul>
                                        <Typography component="li" variant="h6" align="center" >
                                            {props.result.faster.operator}
                                        </Typography>
                                        <Typography component="li" variant="subtitle1" align="center" >
                                            {props.result.faster.title}
                                        </Typography>
                                        <Typography component="li" variant="subtitle1" align="center" >
                                            {props.result.faster.term} дней
                                        </Typography>
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={'contained'} color="primary">
                                        Оформить заказ
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    }
                    {
                        <Grid item xs={12} sm={'ddd' === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader

                                    title={'Быстрее'}
                                    subheader={''}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={<SpeedIcon
                                        color={'primary'}
                                    />}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ₽{props.result.faster.price}
                                        </Typography>
                                    </div>
                                    <ul>
                                        <Typography component="li" variant="h6" align="center" >
                                            {props.result.faster.operator}
                                        </Typography>
                                        <Typography component="li" variant="subtitle1" align="center" >
                                            {props.result.faster.title}
                                        </Typography>
                                        <Typography component="li" variant="subtitle1" align="center" >
                                            {props.result.faster.term} дней
                                        </Typography>
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={'contained'} color="primary">
                                        Оформить заказ
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    }
                </Grid>

            </Container>
        </React.Fragment>
    );
}
export default Pricing;