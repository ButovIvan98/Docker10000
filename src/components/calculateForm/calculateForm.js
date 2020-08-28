import React from 'react';
import classes from './calculateForm.module.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import BlockDataCargo from './blockDataCargo/blockDataCargo';
import carImg from './img/deliver.png';
import boxImg from './img/box.png';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CarLittle from "../common/svgImg/carLittle";
import Car3 from "../common/svgImg/car3";
import Car5 from "../common/svgImg/car5";
import Car10 from "../common/svgImg/car10";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";

const CalculateForm = (props) => {
    const useStyles = makeStyles((theme) => ({
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes2 = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        props.updateTypeCargo(event.target.value);
        setAge(event.target.value);
    };
    let listCargo = Object.values(props.calculate.listCargo).map(option => (
        <BlockDataCargo
            deleteCargo={props}
            updateWeight={props.weightData}
            updateHeight={props.heightData}
            updateWidth={props.widthData}
            updateVolume={props.volumeData}
            updateLenght={props.lengthData}
            updateQuantity={props.quantityData}
            updateStatus={props.updateStatusParameters}
            validVolume={option.validVolume}
            validQuantity={option.validQuantity}
            validWidth={option.validWidth}
            validHeight={option.validHeight}
            validLenght={option.validLenght}
            validWeight={option.validWeight}
            weight={option.weight}
            height={option.height}
            volume={option.volume}
            lenght={option.lenght}
            status={option.status}
            width={option.width}
            quantity={option.quantity}
            id={option.id}
            props={props}/>
    ))
    return <div className={'container-fluid pl-0 pr-0' + ' ' + classes.mainBlock}>
        <div className={'container'}>
            <div className='row text-center'>
                <div className={'col-12 text-center mt-4 mb-3'}>
                    <h3 className={classes.header}>
                        Лучший способ заказать доставку<br/>
                        по самой выгодной цене
                    </h3>
                </div>
                <div className={'col-12'}>
                    <div className={classes.blockCalculate}>
                        <div className={'row '}>
                            <div className={'col-lg-4  pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.cityOfDeparture.listCity.map((option) => option.title)}
                                    fullWidth={true}
                                    renderInput={(params) => <TextField {...params}
                                                                        error={!props.calculate.cityOfDeparture.validCity}
                                                                        value={props.calculate.cityOfDeparture.city}
                                                                        onChange={(e) => {
                                                                            props.ListCityDeparture(e.target.value)
                                                                        }
                                                                        } label="Город отправки груза"
                                                                        variant="outlined"/>}
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                    onChange={(event) => {
                                        props.updateCityDeparture(event.target.valueOf().innerText, props.calculate.cityOfDeparture.listCity)
                                    }}
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={props.calculate.pickup}
                                            onChange={()=>{props.updatePickup(!props.calculate.pickup)}}
                                            color="primary"
                                        />
                                    }
                                    label={props.calculate.pickup ? 'От двери' :'От склад'}
                                />
                            </div>
                            <div className={'col-lg-4 mt-lg-0 mt-2 pr-1 pl-1'}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={props.calculate.cityOfDestination.listCity.map((option) => option.title)}
                                    renderInput={(params) => <TextField
                                        error={!props.calculate.cityOfDestination.validCity}
                                        {...params}
                                        label="Город доставки груза"
                                        variant="outlined"
                                        onChange={(e) => {
                                            props.ListCityDestination(e.target.value)
                                        }}
                                    />
                                    }
                                    className={classes.inputStyle}
                                    noOptionsText={'Нет такого города'}
                                    onChange={(event) => {
                                        props.updateCityDestination(event.target.valueOf().innerText, props.calculate.cityOfDestination.listCity)
                                    }}
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={props.calculate.delivery}
                                            onChange={()=>{props.updateDelivery(!props.calculate.delivery)}}
                                            color="primary"
                                        />
                                    }
                                    label={ props.calculate.delivery ? 'До двери' : 'До склада'}
                                />
                            </div>
                            <div className={'col-lg-4 mt-lg-0 mt-2 pr-1 pl-1'}>
                                <FormControl variant="outlined" className={classes.inputSelectCity}>
                                    <InputLabel id="demo-simple-select-outlined-label">Что отправляем?</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={age}
                                        onChange={handleChange}
                                        label="Что отправляем?"

                                    >
                                        <MenuItem value={'doc'}>Документы</MenuItem>
                                        <MenuItem onClick={() => {
                                            props.clearCargoData();
                                        }} value={'cargo'}>Мелкие грузы</MenuItem>
                                        <MenuItem value={30}>Большие грузы</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={'col-12'}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            //checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Опасный груз"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            //checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Хрупкий груз"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            //checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Мокрый груз"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            //checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Ценный груз"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {age === 'doc' ? <div className={'col-12'}>
                        <div className={classes.blockList}>
                            <div className={'row mt-3'}>
                                <div className={'col-lg-4 pl-0'}>
                                    <TextField
                                        error={props.validVolume}
                                        data-number-cargo={props.id}
                                        variant="outlined"
                                        id="standard-helperText"
                                        type={'number'}
                                        label="Вес"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">кг </InputAdornment>,
                                        }}
                                        value={props.calculate.listCargo.weight}
                                        onChange={(e) => {
                                            props.autoSizeDoc(e.target.value)
                                        }}
                                        //helperText="Some important text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                {age === 'cargo'
                    ? <div className={'col-12'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <div className={classes.blockList}>
                                    {listCargo}
                                </div>
                            </div>
                            <div className={'col-12 text-right '}>
                                <div className={classes.blockWhite}>
                                    <button className={classes.addCargo}
                                            onClick={() => (props.addCargo(props.calculate.listCargo[(props.calculate.listCargo).length - 1].id))}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="1" d="M8 0V16M16 8H0" stroke="#183C51"/>
                                        </svg>
                                        Добавить груз
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                {age === 30
                    ? <div className={'col-12'}>
                        <div className={classes.blockWhite}>
                            <div className={'row mt-3'}>
                                <div className={'col-lg-3 mt-lg-0 mt-2'}>
                                    <div className={'row text-left mr-0 ml-0' + ' ' + classes.blockCargo}>
                                        <div className={'col-12 mt-3'}>
                                            <CarLittle/>
                                        </div>
                                        <div className={'col-12 mt-1'}>
                                            <label className={classes.textBlockCargo}>
                                                <b>2 тонны, 10 кубов</b>
                                            </label>
                                        </div>
                                        <div className={'col-12 mt-0 mb-2'}>
                                            <label className={classes.textSize}>
                                                4 x 1.8 x 1.8 м
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-lg-3 mt-lg-0 mt-3'}>
                                    <div className={'row text-left mr-0 ml-0' + ' ' + classes.blockCargo}>
                                        <div className={'col-12 mt-2'}>
                                            <Car3/>
                                        </div>
                                        <div className={'col-12 mt-1'}>
                                            <label className={classes.textBlockCargo}>
                                                <b>3 тонны, 25 кубов</b>
                                            </label>
                                        </div>
                                        <div className={'col-12 mt-0 mb-2'}>
                                            <label className={classes.textSize}>
                                                5.2 x 2.2 x 2.2 м
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-lg-3 mt-lg-0 mt-3'}>
                                    <div className={'row text-left mr-0 ml-0' + ' ' + classes.blockCargo}>
                                        <div className={'col-12 mt-2'}>
                                            <Car5/>
                                        </div>
                                        <div className={'col-12 mt-1'}>
                                            <label className={classes.textBlockCargo}>
                                                <b>5 тонн, 36 кубов</b>
                                            </label>
                                        </div>
                                        <div className={'col-12 mt-0 mb-2'}>
                                            <label className={classes.textSize}>
                                                6.2 x 2.45 x 2.5 м
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-lg-3 mt-lg-0 mt-3'}>
                                    <div className={'row text-left mr-0 ml-0' + ' ' + classes.blockCargo}>
                                        <div className={'col-12 mt-2'}>
                                            <Car10/>
                                        </div>
                                        <div className={'col-12 mt-1'}>
                                            <label className={classes.textBlockCargo}>
                                                <b>10 тонн, 45 кубов</b>
                                            </label>
                                        </div>
                                        <div className={'col-12 mt-0 mb-2'}>
                                            <label className={classes.textSize}>
                                                7.2 x 2.45 x 2.6 м
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    : null}
                <div className={'col-12 mb-3'}>
                    <div className={classes.blockBottomCalculate}>
                        <button onClick={() => {
                            props.calculateTariff(props.calculate.listCargo, props.calculate.typeCargo, props.calculate.cityOfDeparture.city, props.calculate.cityOfDestination.city, props.calculate.pickup,props.calculate.delivery);
                        }} className={classes.calculation}>Рассчитать
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {
            props.calculate.statusCalculate ? <div className={classes.wrap} id={'calculate'}>
                    <img src={carImg} className={classes.imgCar + ' ' + classes.truck}/>
                    <img src={boxImg} className={classes.imgBox}/>
                    <img src={boxImg} className={classes.imgBox + ' ' + classes.imgBox2}/>
                </div>
                : <div id={'calculate'}></div>
        }
        <div className={'col-12'}>

        </div>
    </div>
}
export default CalculateForm;