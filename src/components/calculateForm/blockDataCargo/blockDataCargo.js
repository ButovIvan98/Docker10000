import React from 'react';
import classes from './blockDataCargo.module.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';

const BlockDataCargo = (props) => {
    return <div className={classes.blockCalculate}>
        {props.status
            ? <div className={'row mt-3'}>
                <div className={'col-lg-7 col-12'}>
                    <div className={'row'}>
                        <div className={'col-lg-4 col-6 pl-1 pr-1'}>
                            <TextField
                                error={!props.validWeight}
                                data-number-cargo={props.id}
                                variant="outlined"
                                type={'number'}
                                id="standard-helperText"
                                label="Вес"
                                value={props.weight}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Кг</InputAdornment>,
                                }}
                                onChange={(e) => (props.updateWeight(e.target.value, props.id))}
                                //helperText="Some important text"
                            />
                        </div>
                        <div className={'col-lg-4 col-6 pl-1 pr-1'}>
                            <TextField
                                error={!props.validVolume}
                                data-number-cargo={props.id}
                                variant="outlined"
                                id="standard-helperText"
                                type={'number'}
                                label="Объем"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">м³ </InputAdornment>,
                                }}
                                value={props.volume}
                                onChange={(e) => (props.updateVolume(e.target.value, props.id))}
                                //helperText="Some important text"
                            />
                        </div>
                        <div className={'col-lg-4 mt-lg-0 mt-2 col-12  pl-1 pr-1 '}>
                            <TextField
                                error={!props.validQuantity}
                                data-number-cargo={props.id}
                                variant="outlined"
                                id="standard-helperText"
                                type={'number'}
                                label="Количество"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Шт</InputAdornment>,
                                }}

                                value={props.quantity}
                                onChange={(e) => (props.updateQuantity(e.target.value, props.id))}
                                //helperText="Some important text"
                            />
                        </div>
                    </div>
                </div>
                <div className={'col-lg-5 col-12 text-lg-right text-center align-self-center'}>
                    <span onClick={() => {
                        props.updateStatus(props.status, props.id)
                    }} className={classes.buttonAddParametr}>Подробные параметры</span>
                </div>
            </div>
            : <div className={'row mt-3'}>
                <div className={'col-lg-2 col-4 pl-1 pr-1'}>
                    <TextField
                        error={!props.validLenght}
                        data-number-cargo={props.id}
                        variant="outlined"
                        id="standard-helperText"
                        type={'number'}
                        label="Длина"
                        value={props.lenght}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">См</InputAdornment>,
                        }}
                        onChange={(e) => (props.updateLenght(e.target.value, props.id,props.width,props.height))}
                        //helperText="Some important text"
                    />
                </div>
                <div className={'col-lg-2 col-4 pl-1 pr-1'}>
                    <TextField
                        error={!props.validHeight}
                        data-number-cargo={props.id}
                        variant="outlined"
                        id="standard-helperText"
                        type={'number'}
                        label="Высота"
                        value={props.height}
                        onChange={(e) => (props.updateHeight(e.target.value, props.id,props.lenght,props.width))}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">См</InputAdornment>,
                        }}
                        //helperText="Some important text"
                    />
                </div>
                <div className={'col-lg-2 col-4 pl-1 pr-1'}>
                    <TextField
                        error={!props.validWidth}
                        data-number-cargo={props.id}
                        variant="outlined"
                        id="standard-helperText"
                        type={'number'}
                        label="Ширина"
                        value={props.width}
                        onChange={(e) => (props.updateWidth(e.target.value, props.id,props.height,props.lenght))}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">См</InputAdornment>,
                        }}
                        //helperText="Some important text"
                    />
                </div>
                <div className={'col-lg-2 mt-lg-0 mt-2 col-4 pl-1 pr-1'}>
                    <TextField
                        error={!props.validWeight}
                        data-number-cargo={props.id}
                        variant="outlined"
                        id="standard-helperText"
                        type={'number'}
                        label="Вес"
                        value={props.weight}
                        onChange={(e) => (props.updateWeight(e.target.value, props.id))}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Кг</InputAdornment>,
                        }}
                        //helperText="Some important text"
                    />
                </div>
                <div className={'col-lg-2 mt-lg-0 mt-2  col-4 pl-1 pr-1'}>
                    <TextField
                        error={!props.validVolume}
                        data-number-cargo={props.id}
                        variant="outlined"
                        id="standard-helperText"
                        type={'number'}
                        label="Объем"
                        value={props.volume}
                        onChange={(e) => (props.updateVolume(e.target.value, props.id))}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">м³</InputAdornment>,
                        }}
                        //helperText="Some important text"
                    />
                </div>
                <div className={'col-lg-2 mt-lg-0 mt-2 col-4 pl-1 pr-1'}>
                    <TextField
                        error={!props.validQuantity}
                        data-number-cargo={props.id}
                        variant="outlined"
                        id="standard-helperText"
                        type={'number'}
                        label="Количество"
                        value={props.quantity}
                        onChange={(e) => (props.updateQuantity(e.target.value, props.id))}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Шт</InputAdornment>,
                        }}
                        //helperText="Some important text"
                    />
                </div>
            </div>
        }
        {
            (props.props.calculate.listCargo).length>1
                ? <div className={'col-12 mt-2 text-right'}>
                    <button className={classes.deleteCargo} onClick={() => {
                        props.deleteCargo.deleteCargoList(props.props.calculate.listCargo, props.id)
                    }}>
                        <svg width="16" height="2" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M8 1V0M16 0.5H0" stroke="black"/>
                        </svg>
                        Удалить груз
                    </button>
                </div>
                : null
        }

        <div className={'col-12'}>
            <hr className={classes.hrDashed}/>
        </div>
    </div>
}
export default BlockDataCargo;