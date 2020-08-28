import React from 'react';
import classes from './css/add_address.module.css';
import TextField from '@material-ui/core/TextField';
import searchImg from '../../../common/searchAndFilter/img/search.png';
import {NavLink, Redirect} from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InfoManager from "../../../common/infoManager/infoManager";
import Button_return from "../../../common/standarts_elements/button/button_return/button_return";
import classesStyle from "../../personalAccount/setting/css/setting.module.css";
import InputMask from "react-input-mask";

const AddAddress = (props) => {
console.log(props)
    return <div className={'container-fluid' + ' ' + classes.styleBlock}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12'}>
                    <Button_return path={'/myAddress'}/>
                </div>
                <div className={'col-12 mt-2'}>
                    <h3 className={classes.headerText}>
                        Добавить адрес
                    </h3>
                </div>
            </div>
            <div className={'row mt-lg-4 mt-2'}>
                <div className={'col-lg-9 col-12' + ' ' + classes.block}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <h5>
                                Заполните адрес
                            </h5>
                        </div>
                        <div className={'col-lg-4 mt-2 col-12'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Страна"
                                variant="outlined"
                                value={'Россия'}
                                disabled={true}
                            />
                        </div>
                        <div className={'col-lg-4 col-12 mt-2'}>
                            <Autocomplete
                                clearText={'Очистить'}
                                id="combo-box-demo"
                                options={props.addressPage.listCity.map((option) => option.title)}
                                renderInput={(params) => <TextField
                                    error={!(props.addressPage.validCity)}
                                    {...params} label="Город" value={props.addressPage.city} onChange={(e)=>{props.cityInfo(e.target.value)}} variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого города'}
                                onChange={(event)=>{ props.fullInfoCity(event.target.valueOf().innerText)}}
                            />
                        </div>
                        <div className={'col-lg-4 col-12 mt-2'}>
                            <Autocomplete
                                disabled={props.addressPage.city==='' ? true : false}
                                id="combo-box-demo"
                                options={props.addressPage.listStreet.map((option) => option.street_with_type)}
                                renderInput={(params) => <TextField
                                    disabled={props.addressPage.city==='' ? true : false}
                                    {...params} label="Улица" value={props.addressPage.street} onChange={(e)=>{props.streetInfo(props.addressPage.fullInfoCity[0].locality_type,props.addressPage.fullInfoCity[0].fias,e.target.value)}} variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такой улицы'}
                                onChange={(event)=>{ props.fullInfoStreet(event.target.valueOf().innerText, props.addressPage.listStreet)}}
                            />
                        </div>
                        <div className={'col-lg-4 col-12 mt-3'}>
                            <Autocomplete
                                disabled={props.addressPage.city ==='' || props.addressPage.street ===''}
                                id="combo-box-demo"
                                options={props.addressPage.listHouse.map((option) =>
                                {
                                    if(option.block!==null){
                                       return option.house_type + ' ' + option.house + ' ' + option.block_type + ' ' + option.block
                                    }
                                    else return option.house
                                })}
                                renderInput={(params) => <TextField
                                    disabled={(props.addressPage.city ==='' || props.addressPage.street ==='') ? true : false}
                                    {...params} label="Дом" value={props.addressPage.house} onChange={(e)=>{props.houseInfo(props.addressPage.fullInfoStreet.street_fias_id,e.target.value)}} variant="outlined"/>}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого дома'}
                                onChange={(event)=>{props.fullInfoHouse(props.addressPage.fullInfoStreet.street_fias_id,event.target.valueOf().innerText,props.addressPage.listHouse)}}
                            />
                        </div>
                        <div className={'col-lg-4 col-12 mt-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Квартира(Офис)"
                                variant="outlined"
                                value={props.addressPage.flat}
                                onChange={(e)=>{props.flatInfo(e.target.value)}}

                            />
                        </div>
                        <div className={'col-lg-4 col-12 mt-3'}>
                            <TextField
                                className={classes.input}
                                label="Индекс"
                                variant="outlined"
                                autoComplete={props.addressPage.index}
                                value={props.addressPage.index}
                                InputLabelProps={{
                                    shrink: String(props.addressPage.index).length!==0 ? true :false
                                }}
                                onChange={(e)=>{props.indexInfo(e.target.value)}}
                                error={!(props.addressPage.validIndex)}
                                helperText={props.addressPage.validIndex ? '' : 'Заполните индекс'}
                            />
                        </div>
                        <div className={'col-12 mt-3'}>
                            <h6>
                                Информация о контактном лице
                            </h6>
                        </div>
                        <div className={'col-lg-4 col-12 mt-lg-0'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Фамилия"
                                variant="outlined"
                                value={props.addressPage.surname}
                                onChange={(e)=>{props.surnameInfo(e.target.value)}}
                                error={!(props.addressPage.validSurname)}
                                helperText={props.addressPage.validSurname ? '' : 'Заполните фамилию'}
                            />
                        </div>
                        <div className={'col-lg-4 col-12 mt-lg-0 mt-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Имя"
                                variant="outlined"
                                value={props.addressPage.name}
                                onChange={(e)=>{props.nameInfo(e.target.value)}}
                                error={!(props.addressPage.validName)}
                                helperText={props.addressPage.validName ? '' : 'Заполните фамилию'}

                            />
                        </div>
                        <div className={'col-lg-4 col-12 mt-lg-0 mt-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Отчество"
                                variant="outlined"
                                value={props.addressPage.middleName}
                                onChange={(e)=>{props.middleNameInfo(e.target.value)}}
                            />
                        </div>
                        <div className={'col-lg-12 col-12 mt-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Компания"
                                variant="outlined"
                                value={props.addressPage.nameCompany}
                                onChange={(e)=>{props.updateNameCompany(e.target.value)}}
                            />
                        </div>
                        <div className={'col-lg-6 col-12 mt-3'}>
                            <InputMask mask="+7(999)999 99 99"
                                       maskChar=" "
                                onChange={(e) => {
                                    props.phoneInfo1(e.target.value)
                                }}
                                value={props.addressPage.phone1}
                            >
                                <TextField
                                    className={classes.input}
                                    label="Телефон"
                                    variant="outlined"
                                    type={"tel"}
                                    disableUnderline
                                    error={!(props.addressPage.validPhone)}
                                    helperText={props.addressPage.validPhone ? '' : 'Заполните телефон'}
                                />
                            </InputMask>
                        </div>
                        <div className={'col-lg-6 col-12 mt-3'}>
                            <InputMask mask="+7(999)999 99 99"
                                       maskChar=" "
                                       onChange={(e) => {
                                           props.phoneInfo2(e.target.value)
                                       }}
                                       value={props.addressPage.phone2}
                            >
                                <TextField
                                    className={classes.input}
                                    label="Доп. телефон"
                                    variant="outlined"
                                    type={"tel"}
                                    disableUnderline
                                    //error={props.setting.validNumber ? false : true}
                                />
                            </InputMask>
                        </div>
                        <div className={'col-lg-12  col-12 mt-3'}>
                            <TextField
                                className={classes.input}
                                id="outlined-required"
                                label="Комментарий"
                                variant="outlined"
                                value={props.addressPage.comment}
                                onChange={(e)=>{props.updateComment(e.target.value)}}
                            />
                        </div>
                        <div className={'col-lg-12 mt-3 text-center'}>
                            {props.addressPage.addAddressButton
                                ? <Redirect to='/myAddress'/>
                                : <button onClick={()=>(props.addAddressBook(props.addressPage))} className={classes.addAddress}>
                                    Добавить адрес
                                </button>
                            }
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 mt-lg-0 mt-4 col-12'}>
                    <InfoManager/>
                </div>
            </div>
        </div>
    </div>
};
export default AddAddress;