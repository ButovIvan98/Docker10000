import React from 'react';
import classes from './css/blockDate.module.css';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextField} from "@material-ui/core";

const BlockDate = (props) => {
    console.log('props.fullData')
    console.log(props.fullData)
    console.log('props.fullData')
    return <div className={'row'}>
        <div className={'col-lg-4 col-12 mt-lg-3 mt-2'}>
            <TextField
                label="Страна"
                variant="outlined"
                fullWidth={'100%'}
                defaultValue={'Россия'}
                disabled={true}
            />

        </div>
        <div className={'col-lg-4 col-12 mt-lg-3 mt-2'}>
            <TextField
                label="Город"
                variant="outlined"
                fullWidth={'100%'}
                defaultValue={(props.address.city === null || props.address.city === undefined) ? '' : props.address.city.locality}
                disabled={true}
            />
        </div>
        <div className={'col-lg-4 col-12 mt-lg-3 mt-2'}>
            <Autocomplete
                id="combo-box-demo"
                options={props.address.listStreet.map((option) => option.street)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Улица"
                        variant="outlined"
                        onChange={(e) => {
                            props.searchStreet(props.address.city.locality_type, props.address.city.fias, e.target.value)
                        }}

                    />}
                onChange={(event) => {
                    props.infoStreet(event.target.valueOf().innerText, props.address.listStreet)
                }}
                noOptionsText={'Нет такой улицы'}
                value={props.address.street===null ? '' : props.address.street.street}
                //defaultValue={props.fullData === null ? '' : props.fullData.street}
            />
        </div>
        <div className={'col-lg-4 col-12 mt-lg-3 mt-2'}>
            <Autocomplete
                id="combo-box-demo"
                options={props.address.listHouse.map((option) => option.house)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Дом"
                        variant="outlined"
                        onChange={(e) => {
                            props.searchHouse(props.address.street.street_fias_id, e.target.value)
                        }}
                    />}
                onChange={(event) => {
                    props.infoHouse(props.address.street.street_fias_id, event.target.valueOf().innerText, props.address.listHouse)
                }}
                value={props.address.house===null ? '' : props.address.house.house}
                noOptionsText={'Нет такого дома'}
            />
        </div>
        <div className={'col-lg-4 col-12 mt-lg-3 mt-2'}>
            <TextField
                label="Квартира, офис"
                variant="outlined"
                className={classes.input}
                InputLabelProps={{
                    shrink: String(props.address.flat).length !== 0 ? true : false
                }}
                value={props.address.flat}
                onChange={(e) => (props.updateFlat(e.target.value))}
            />
        </div>
        <div className={'col-lg-4 col-12 mt-lg-3 mt-2'}>
            <TextField
                label="Индекс"
                variant="outlined"
                className={classes.input}
                value={props.address.zip}
                InputLabelProps={{
                    shrink: String(props.address.zip).length !== 0 ? true : false
                }}
                onChange={(e) => {
                    props.updateIndex(e.target.value)
                }}

            />
        </div>
    </div>
}
export default BlockDate