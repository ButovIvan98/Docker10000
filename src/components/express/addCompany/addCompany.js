import React from "react";
import classes from './addCompany.module.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InfoManager from "../../common/infoManager/infoManager";
import {NavLink, Redirect} from "react-router-dom";
import classesStyle from "../personalAccount/setting/css/setting.module.css";
import InputMask from "react-input-mask";
import {addCompanyYou, searchCompany} from "../../../redux/addCompanyReducer";

const AddCompany = (props) => {
    console.log(props);
    return <div className={'container-fluid' + ' ' + classes.mainBlock}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 mt-3'}>
                    <h2>
                        Добавление компании
                    </h2>
                </div>
                <div className={'col-9 mt-3' + ' ' + classes.block}>
                    <div className={'row'}>
                        <div className={'col-12 text-center'}>
                            <h5>
                                Информация о компании
                            </h5>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-6'}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={props.company.listCompany.map((option) => option.value + '(' + option.management_name + ')')}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="Наименование"
                                        variant="outlined"
                                        value={props.company.nameCompany}
                                        onChange={(e) => {
                                            props.searchCompany(e.target.value)
                                        }}
                                        error={!props.company.validNameCompany}
                                    />}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого названия'}
                                onChange={(event) => {
                                    props.informationYouCompany(event.target.valueOf().innerText, props.company.listCompany, 3)
                                }}
                                value={props.company.nameCompany}
                                disableClearable={true}
                            />
                        </div>
                        <div className={'col-6'}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={props.company.listCompany.map((option) => option.inn)}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="ИНН"
                                        variant="outlined"
                                        value={props.company.INN}
                                        onChange={(e) => {
                                            props.searchCompany(e.target.value, 1)
                                        }}
                                        error={!props.company.validINN}
                                    />}
                                className={classes.inputStyle}
                                noOptionsText={'Нет таких данных'}
                                onChange={(event) => {
                                    props.informationYouCompany(event.target.valueOf().innerText, props.company.listCompany, 1)
                                }}
                                value={props.company.INN}
                                disableClearable={true}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={props.company.listCompany.map((option) => option.ogrn)}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="ОГРН"
                                        variant="outlined"
                                        value={props.company.OGRN}
                                        onChange={(e) => {
                                            props.searchCompany(e.target.value)
                                        }}
                                        error={!props.company.validOGRN}
                                    />}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого ОГРН'}
                                onChange={(event) => {
                                    props.informationYouCompany(event.target.valueOf().innerText, props.company.listCompany, 2)
                                }}
                                value={props.company.OGRN}
                                disableClearable={true}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                error={!props.company.validLegalAddress}
                                label="Юридический адрес"
                                variant="outlined"
                                fullWidth={true}
                                value={props.company.legalAddress}
                                onChange={(e) => {
                                    props.legalAddress(e.target.value)
                                }}
                                onBlur={(e) => {
                                    props.validLegalAddress(e.target.value)
                                }}
                                placeholder={'Пример: г. Барнаул, ул. Баварина д.2 к.Б офис 900'}
                            />
                        </div>
                        <div className={'col-lg-6 mt-2'}>
                            <span> <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                        onChange={() => (props.coincidence(props.company.coincidence, props.company.legalAddress))}
                                    />
                                }
                                label="Юр. адрес совпадает с фактическим"
                                className={classes.labelCheckbox}
                            /></span><br/>
                            <span>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="checkedB"
                                            color="primary"
                                            onChange={() => (props.updateVat_payer(props.company.VAT_payer))}
                                        />
                                    }
                                    label="Плательщик НДС"
                                    className={classes.labelCheckbox}

                                />
                            </span>
                        </div>
                        <div className={'col-lg-6 mt-2'}>
                            <TextField
                                disabled={props.company.coincidence ? true : false}
                                label="Фактический адрес"
                                variant="outlined"
                                fullWidth={true}
                                value={props.company.coincidence ? props.company.legalAddress : props.company.actualAddress}
                                onChange={(e) => (props.actualAddress(e.target.value))}
                                onBlur={(e) => (props.validActualAddress(e.target.value))}
                                error={!props.company.validActualAddress}
                                placeholder={'Пример: г. Барнаул, ул. Баварина д.2 к.Б офис 900'}
                            />
                        </div>
                        <div className={'col-12 mt-4 text-center'}>
                            <h5>
                                Информация о банковском счете
                            </h5>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-6 mt-2'}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={props.company.listBank.map((option) => option.bic)}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="БИК"
                                        variant="outlined"
                                        value={props.company.BIC}
                                        onChange={(e) => {
                                            props.searchInfoBIC(e.target.value)
                                        }}
                                        error={!props.company.validBIC}
                                    />}
                                className={classes.inputStyle}
                                noOptionsText={'Нет такого БИК'}
                                onChange={(event) => {
                                    props.informationPayment(event.target.valueOf().innerText, props.company.listBank)
                                }}
                                value={props.company.BIC}
                                disableClearable={true}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                label="Расчетный счет"
                                variant="outlined"
                                fullWidth={true}
                                value={props.company.accountPayment}
                                onChange={(e) => {
                                    props.accountPaymentAddCompany(e.target.value)
                                }}
                                error={!props.company.validAccountPayment}
                            />
                        </div>
                        <div className={'col-12 mt-2'}>
                            <TextField
                                label="Наименование банка"
                                variant="outlined"
                                fullWidth={true}
                                value={props.company.addressBank}
                                error={!props.company.validAddressBank}
                                onChange={(e) => {
                                    props.addressBankAddCompany(e.target.value)
                                }}
                            />
                        </div>
                        <div className={'col-12 mt-4 text-center'}>
                            <h5>
                                Информация об уполномоченном лице
                            </h5>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Фамилия"
                                variant="outlined"
                                value={props.company.personalData.surname}
                                onChange={(e) => (props.surnameAddCompany(e.target.value))}
                                onBlur={(e) => {
                                    props.validSurnameAddCompany(e.target.value)
                                }}
                                error={!props.company.personalData.validSurname}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Имя"
                                variant="outlined"
                                value={props.company.personalData.name}
                                onChange={(e) => (props.nameAddCompany(e.target.value))}
                                onBlur={(e) => {
                                    props.validNameAddCompany(e.target.value)
                                }}
                                error={!props.company.personalData.validName}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Отчество"
                                variant="outlined"
                                value={props.company.personalData.middleName}
                                onChange={(e) => (props.middleNameAddCompany(e.target.value))}
                            />
                        </div>
                        <div className={'col-6 mt-2'}>
                            <TextField
                                className={classes.inputData}
                                label="Должность"
                                variant="outlined"
                                value={props.company.personalData.position}
                                onChange={(e) => (props.positionAddCompany(e.target.value))}
                                onBlur={(e) => {
                                    props.validPositionAddCompany(e.target.value)
                                }}
                                error={!props.company.personalData.validPosition}
                            />
                        </div>
                        <div className={'col-12 mt-4 text-center'}>
                            <h5>
                                Обратная связь
                            </h5>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-6'}>
                            <TextField
                                className={classes.inputData}
                                label="Электронная почта"
                                variant="outlined"
                                placeholder={'user@mail.ru'}
                                value={props.company.personalData.email}
                                onChange={(e) => (props.emailAddCompany(e.target.value))}
                                onBlur={(e) => {
                                    props.validEmailAddCompany(e.target.value)
                                }}
                                error={!props.company.personalData.validEmail}
                            />
                        </div>
                        <div className={'col-lg-6'}>
                            <InputMask mask="+7(999)999 99 99"
                                       maskChar=" "
                                       onChange={(e) => {
                                           props.phoneAddCompany(e.target.value)
                                       }}
                                       value={props.company.personalData.phone}
                                       onBlur={(e) => (props.validPhoneAddCompany(e.target.value))}
                            >
                                <TextField
                                    className={classesStyle.input}
                                    label="Номер телефона"
                                    variant="outlined"
                                    type={"tel"}
                                    disableUnderline
                                    error={!props.company.personalData.validPhone}
                                />
                            </InputMask>
                        </div>
                        <div className={'col-lg-12 mt-3 text-center self-align-center'}>
                            {
                                props.company.flags.step1
                                    ? <Redirect to={'/addCompany/loadingFile'}/>
                                    : <button
                                        onClick={() => (props.addCompanyYou(props.company))}
                                        className={classes.addAddress}>
                                        <span>Далее</span>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 mt-3'}>
                    <InfoManager/>
                </div>
            </div>
        </div>
    </div>
}
export default AddCompany;