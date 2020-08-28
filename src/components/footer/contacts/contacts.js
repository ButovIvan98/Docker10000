import React from 'react';
import classes from './contacts.module.css';
import TextLvl1 from "../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import TextLvl3 from "../../common/style_text/header_text/text_lvl_3/text_lvl_3";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Typography from '@material-ui/core/Typography';
import AboutMe from '../aboutMe/aboutMe'
import FeedbackForm from '../../common/feedbackForm/feedbackForm';

const Contact = (props) => {
debugger
    return <div className={'container' + ' ' + classes.block}>
        <div className={'row' + ' ' + classes.blockRow}>
            <div className="col-lg-6 col-12">
                <div className="row">
                    <div className="col-12 mt-4">
                        <TextLvl1 text={'Адреса и контакты'} />
                        <hr />
                    </div>
                    <div className="col-12">
                        <a href="tel:+78006004044" className={classes.contactPhone}>8-800-600-40-44</a><br />
                        <a href="mailto:support@kenguruexpress.ru"
                            className={classes.contactPhone}>support@kenguruexpress.ru </a>
                    </div>
                    <div className="col-12 mt-4">
                        <TextLvl3 text={'Kenguruexpress - Барнаул'} />
                    </div>
                    <div className="col-12">
                        <a href="https://2gis.ru/barnaul/search/Баварина%202/firm/563478234528324?queryState=center%2F83.797531%2C53.357314%2Fzoom%2F12"
                            target="_blank" className={classes.contactPhone}>656056, Алтайский край, город Барнаул,
                            площадь им
                            В.Н.Баварина, дом 2, офис 900</a><br />
                        <a href="tel:+78006004044" className={classes.contactPhone}>8-800-600-40-44</a>
                    </div>
                    <div className="col-12 mt-4">
                        <TextLvl1 text={'Реквизиты для платежей'} />
                        <hr />
                    </div>
                    <div className="col-12 mt-0 mb-2">
                        <TextLvl3 text={'ООО"31"'} />
                        <span className={classes.contactsHeader}>ИНН: 2225155751</span><br />
                        <span className={classes.contactsHeader}>ОГРН: 1152225000652</span><br />
                        <span className={classes.contactsHeader}>БИК: 040173604</span><br />
                        Юридический адрес: <a
                            href="https://2gis.ru/barnaul/search/Баварина%202/firm/563478234528324?queryState=center%2F83.797531%2C53.357314%2Fzoom%2F12"
                            target="_blank" className={classes.contactPhone}>656056, Алтайский край, город Барнаул, площадь
                            им
                        В.Н.Баварина, дом 2, офис 900</a>
                    </div>
                </div>
            </div>
            <div className={'col-lg-6 col-12 align-self-center'}>
                {
                    props.feedback.statusMessageGeneral
                        ? <div className={'row'}>
                            <div className={'col-12 text-center'}>
                                <Typography>
                                    <BeenhereIcon
                                        color="secondary"
                                        fontSize='large'
                                    />
                                </Typography>
                                <h4>Обращение успешно отправлено. Дождитесь действий оператора.</h4>
                            </div>
                        </div>
                        : <FeedbackForm
                            header={'Обратная связь'}
                            changeName={props.changeNameGeneral}
                            changePhone={props.phone}
                            changeEmail={props.email}
                            changeText={props.updateTextGeneral}
                            nameValue={props.feedback.nameGeneral}
                            emailValue={props.feedback.emailGeneral}
                            textValue={props.feedback.textGenerak}
                            phoneValue={props.feedback.phoneGeneral}
                            validEmail={props.feedback.validEmailGeneral}
                            validPhone={props.feedback.validPhoneGeneral}
                            statusMessage={props.feedback.statusMessageGeneral}
                            id={'2'}
                            props={props}
                            buttonClick={props.messageShipment}
                        />
                }
            </div>
        </div>
        <AboutMe />
    </div>
}
export default Contact