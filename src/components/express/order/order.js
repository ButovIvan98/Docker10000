import React from "react";
import classes from './css/order.module.css';
import OrderData from "./orderData/orderData";
import {TextField} from "@material-ui/core";
import BlockDate from "./blockDate/blockDate";
import BlockPersonalInformation from "./blockPersonalInformation/blockPersonalInformation";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import BlockTerminal from "./blockTerminal/blockTerminal";
import {updateEmailRecipient, updateInnCompanyRecipient} from "../../../redux/orderReducer";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '6px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Order = (props) => {
    const classes2 = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    let listAddressBookSender = props.order.sender.addressBook.map(r => (
            <div onClick={() => {handleClose(); props.addChoiceAddressSender(r)}} className={'row mt-2' + ' ' + classes.rowCompanyModal}>
                <div className={'col-5'}>
                    <span>
                        {r.company}
                    </span>
                </div>
                <div className={'col-7'}>
                    <span>
                        {r.locality_type}. {r.locality_title} {r.street_type}. {r.street} {r.house_type}. {r.house} {r.flat_type}. {r.flat}
                    </span>
                </div>
            </div>
        )
    )
    let listAddressBookRecipient = props.order.recipient.addressBook.map(r => (
            <div onClick={() => {handleClose1(); props.addChoiceAddressRecipient(r)}} className={'row mt-2' + ' ' + classes.rowCompanyModal}>
                <div className={'col-5'}>
                    <span>
                        {r.company}
                    </span>
                </div>
                <div className={'col-7'}>
                    <span>
                        {r.locality_type}. {r.locality_title} {r.street_type}. {r.street} {r.house_type}. {r.house} {r.flat_type}. {r.flat}
                    </span>
                </div>
            </div>
        )
    )
    const bodySender = (
        <div style={modalStyle} className={classes2.paper}>
            <h4 id="addressBookSender">
                Адресная книга
            </h4>
            <hr/>
            {listAddressBookSender}
        </div>
    );
    const bodyRecipient = (
        <div style={modalStyle} className={classes2.paper}>
            <h4 id="addressBookRecipient">
                Адресная книга
            </h4>
            <hr/>
            {listAddressBookRecipient}
        </div>
    );
    console.log(props);
    return <div className={'container-fluid' + classes.blockMain}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12 mt-3'}>
                    <h2 className={classes.header}>Оформление заказа</h2>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-lg-9 col-12'}>
                    <div className={'row mt-3 ml-0 mr-0 ' + ' ' + classes.blockMain}>
                        <div className={'col-lg-12 self-align-center'}>
                            {(props.order.informationCompany === null || props.order.informationCompany === undefined
                                    ? ''
                                    : <OrderData
                                        company={props.order.informationCompany}
                                    />
                            )}
                        </div>
                    </div>
                    <div className={'row mt-3 ml-0 mr-0 ' + ' ' + classes.blockMain}>
                        <div className={'col-lg-6 mt-3'}>
                            <h5 className={classes.headerText}>Адрес отправителя</h5>
                        </div>
                        <div className={'col-lg-6 col-12 text-center text-lg-right mt-2'}>
                            {(props.order.informationCompany === null || props.order.informationCompany === undefined)
                                ? ''
                                : (props.order.informationCompany.pickup
                                        ? <button className={classes.buttonAddressBook} onClick={handleOpen}>Выбрать из
                                            адресной книги
                                        </button>
                                        : ''
                                )
                            }
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="addressBookSender"
                                aria-describedby="simple-modal-description"
                            >
                                {bodySender}
                            </Modal>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12'}>
                            {(props.order.informationCompany === null || props.order.informationCompany === undefined)
                                ? ''
                                : (props.order.informationCompany.pickup
                                        ? <BlockDate
                                            address={props.order.sender.addressSender}
                                            searchStreet={props.searchStreetSender}
                                            infoStreet={props.informationStreetSender}
                                            searchHouse={props.searchHouseSender}
                                            infoHouse={props.informationHouseSender}
                                            updateIndex={props.updateZipSender}
                                            updateFlat={props.updateFlatSender}
                                            statusForm={props.order.sender.choiceAddressBook}
                                            fullData={props.order.sender.address}
                                        />
                                        : <BlockTerminal clickTerminal={props.addTerminalSender} terminal={props.order.sender.terminalSender}/>
                                )
                            }
                        </div>
                        <div className={'col-lg-12 mt-3'}>
                            <h5 className={classes.headerText}>Контактная информация отправителя</h5>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12 mb-lg-3'}>
                            <BlockPersonalInformation
                                value={props.order.sender.contactPerson}
                                updateSurname={props.updateSurnameSender}
                                updateName={props.updateNameSender}
                                updateMiddleName={props.updateMiddleNameSender}
                                updatePhone={props.updatePhoneSender}
                                updateAdditionalPhone={props.updateAdditionalPhoneSender}
                                updateCompany={props.listCompanySender}
                                validSurname={props.validSurnameSender}
                                validName={props.validNameSender}
                                validPhone={props.validPhoneSender}
                                updateSeriesAndNumberPassport={props.seriesAndNumberPassport}
                                delivery={true}/*true - значит не отображать поле*/
                                updateComment={props.updateCommentSender}
                                clickCompany={props.choiceCompanySender}
                            />
                        </div>
                    </div>
                    <div className={'row mt-3 ml-0 mr-0' + ' ' + classes.blockMain}>
                        <div className={'col-lg-6 mt-3'}>
                            <h5 className={classes.headerText}>Адрес получателя</h5>
                        </div>
                        <div className={'col-lg-6 col-12 text-center text-lg-right mt-2'}>
                            {(props.order.informationCompany === null || props.order.informationCompany === undefined)
                                ? ''
                                : (props.order.informationCompany.delivery
                                        ? <button className={classes.buttonAddressBook} onClick={handleOpen1}>Выбрать из
                                            адресной
                                            книги
                                        </button>
                                        : ''
                                )
                            }
                            <Modal
                                open={open1}
                                onClose={handleClose1}
                                aria-labelledby="addressBookRecipient"
                                aria-describedby="addressBookRecipient"
                            >
                                {bodyRecipient}
                            </Modal>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12'}>
                            {(props.order.informationCompany === null || props.order.informationCompany === undefined)
                                ? ''
                                : props.order.informationCompany.delivery
                                    ? <BlockDate
                                        address={props.order.recipient.addressRecipient}
                                        searchStreet={props.searchStreetRecipient}
                                        infoStreet={props.informationStreetRecipient}
                                        searchHouse={props.searchHouseRecipient}
                                        infoHouse={props.informationHouseRecipient}
                                        updateIndex={props.updateZipRecipient}
                                        updateFlat={props.updateFlatRecipient}
                                        statusForm={props.order.recipient.choiceAddressBook}
                                        fullData={props.order.recipient.address}
                                    />
                                    : <BlockTerminal clickTerminal={props.addTerminalRecipient} terminal={props.order.recipient.terminalRecipient}/>
                            }
                        </div>
                        <div className={'col-lg-12 mt-3'}>
                            <h5>Контактная информация получателя</h5>
                        </div>
                        <div className={'col-lg-12'}>
                            <hr className={classes.line}/>
                        </div>
                        <div className={'col-lg-12 mb-lg-3'}>
                            <BlockPersonalInformation
                                value={props.order.recipient.contactPerson}
                                updateSurname={props.updateSurnameRecipient}
                                updateName={props.updateNameRecipient}
                                updateMiddleName={props.updateMiddleNameRecipient}
                                updatePhone={props.updatePhoneRecipient}
                                updateAdditionalPhone={props.updateAdditionalPhoneRecipient}
                                updateCompany={props.listCompanyRecipient}
                                validSurname={props.validSurnameRecipient}
                                validName={props.validNameRecipient}
                                validPhone={props.validPhoneRecipient}
                                delivery={props.order.informationCompany===null ? '' : props.order.informationCompany.delivery}
                                updateSeriesAndNumberPassport={props.seriesAndNumberPassport}
                                innCompany={props.updateInnCompanyRecipient}
                                emailRecipient={props.updateEmailRecipient}
                                updateComment={props.updateCommentRecipient}
                                updateLegalEntity={props.updateLegalRecipient}
                                clickCompany={props.choiceCompanyRecipient}
                                dateIssue={props.updateDateIssue}
                                issuedByPassport={props.updateIssuedByPassport}
                            />
                        </div>
                    </div>
                    {/*<div className={'row mt-3 ml-0 mr-0 mb-lg-0 mb-3' + ' ' + classes.blockMain}>*/}
                    {/*    <div className={'col-lg-6 mt-3'}>*/}
                    {/*        <h5 className={classes.headerText}>Дополнительные услуги</h5>*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-lg-12'}>*/}
                    {/*        <div className={'row align-self-center'}>*/}
                    {/*            <div className={'col-lg-6 align-self-center'}>*/}
                    {/*                <FormControlLabel*/}
                    {/*                    control={*/}
                    {/*                        <Checkbox*/}
                    {/*                            name="checkedB"*/}
                    {/*                            color="primary"*/}
                    {/*                        />*/}
                    {/*                    }*/}
                    {/*                    label="Доставка лично в руки"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className={'col-lg-6 align-self-center'}>*/}
                    {/*                <b>+ 300 ₽</b>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className={'row align-self-center'}>*/}
                    {/*            <div className={'col-lg-6 align-self-center'}>*/}
                    {/*                <FormControlLabel*/}
                    {/*                    control={*/}
                    {/*                        <Checkbox*/}
                    {/*                            name="checkedB"*/}
                    {/*                            color="primary"*/}
                    {/*                        />*/}
                    {/*                    }*/}
                    {/*                    label="Доставка лично в руки"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className={'col-lg-6 align-self-center'}>*/}
                    {/*                <b>+ 300 ₽</b>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'row mt-3 ml-0 mr-0 mb-lg-0 mb-3' + ' ' + classes.blockMain}>
                        <div className={'col-lg-12'}>
                            <div className={'row'}>
                                <div className={'col-lg-6 mt-3 mb-3'}>
                                    <TextField
                                        label="Дата забора"
                                        variant="outlined"
                                        type={'date'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.input}
                                    />
                                </div>
                                <div className={'col-lg-6 mt-3 mb-3'}>
                                    <TextField
                                        label="Дата доставки"
                                        variant="outlined"
                                        type={'date'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.input}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 mt-lg-3 col-12 '}>
                    <div className={'row' + ' ' + classes.scrollingBlock}>
                        <div className={'col-lg-12'}>
                            <div className={'row ml-0 mr-0' + ' ' + classes.blockMain}>
                                <div className={'col-6 mt-2'}>
                                    <span className={classes.text}>Стоимость</span>
                                </div>
                                <div className={'col-6 text-right mt-2'}>
                                    <span className={classes.textMoney}>{props.order.informationCompany === null ? '' :props.order.informationCompany.priceBefore} ₽</span>
                                </div>
                                <div className={'col-12 text-center mt-3 mb-3'}>
                                    <button onClick={()=>{props.orderRegister(props.order.sender, props.order.recipient,props.order.informationCompany,props.order.terminal)}} className={classes.buttonPayment}>
                                        Оформить заказ за <br/>
                                        <b>{props.order.informationCompany === null ? '' :props.order.informationCompany.priceBefore} ₽</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Order;
