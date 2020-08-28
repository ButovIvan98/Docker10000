import React from 'react';
import classes from './websitePlagin.module.css';
import speedImg from './img/speed_page_widget.png';
import navigationImg from './img/navigation_page_widget.png';
import securityImg from './img/security_page_widget.png';
import ExportFeedbackContainer from '../../common/feedbackForm/feedbackFormContainer';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import Typography from '@material-ui/core/Typography';
import FeedbackForm from '../../common/feedbackForm/feedbackForm';

const WebsitePlagin = (props) => {
    return <div className={'container' + ' ' + classes.main} >
        <div className="row">
            <div className="col-12 mb-4 mt-4 text-center" >
                <h2 className={classes.headerText} > <b> Бесплатный модуль доставки со всеми транспортными <br /> компаниями на ваш сайт. </b></h2>
            </div>
            <div className="col-lg-6 col-12 mb-4" >
                <div className="row" >
                    <div className="col-12 text-center" >
                        <p className={classes.textHeader} > KenguruExpress </p>
                        <p className={classes.textHeaderLight} > Заботится о своих клиентах. </p>
                    </div>
                    <div className="col-12" >
                        <p className={classes.pageText} > Наш модуль поможет вам и вашим клиентам рассчитать стоимость доставки, не покидая вашего сайта.Модуль является полностью адаптивным под любые типы устройств и под разные блоки сайта.Модуль имеет минимальное количество полей для заполнения, что позволяет экономить ваше время при расчете. < b > Немаловажным плюсом модуля является то, что сразу после расчета стоимости вы можете заказать доставку за пару кликов через сервис < a href="https://kenguruexpress.ru/" > KenguruExpress. </a></b > </p>
                    </div>
                    <div className="col-12 text-center" >
                        <div className="row" >
                            <div className="col-4" >
                                <div className={'mb-2' + ' ' + classes.blockImg} >
                                    <img src={navigationImg} />
                                </div>
                                <p className={classes.labelTextForImg} > <b > Удобная навигация </b></p >
                            </div>
                            <div className="col-4" >
                                <div className={'mb-2' + ' ' + classes.blockImg} >
                                    <img src={speedImg} />
                                </div>
                                <p className={classes.labelTextForImg} > <b > Скорость работы </b></p >
                            </div>
                            <div className="col-4" >
                                <div className={'mb-2' + ' ' + classes.blockImg} >
                                    <img src={securityImg} />
                                </div>
                                <p className={classes.labelTextForImg} > <b > Безопасность </b></p >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 text-center" /*style="padding: 0;"*/ >
                <iframe src="https://kenguruexpress.ru/widget" width="100%" height="400" > </iframe> </div>
            <div className="col-12" >
                <hr />
            </div>
            <div className="col-lg-6 col-12" >
                <h4 className={classes.headerText} > Инструкция для добавления модуля </h4>
                <ol /*style="padding-left: 25px;"*/ >
                    <li className={classes.listPage} >
                        <p> Скопируйте код модуля, который приведен ниже. </p>
                    </li>
                    <textarea readOnly className={classes.poleCode} value={'<iframe img="https://kenguruexpress.ru/widget" width="100%" height="400" > </iframe>'}></textarea >
                    <li className={classes.listPage} >
                        <p> Определитесь где будете устанавливать на сайте, если это будет просто обычная страница, то вам самостоятельно не составит труда установить, в случае если это шаблон товара, то рекомендуем обратиться к техническому специалисту. </p>
                    </li >
                    <li className={classes.listPage} >
                        <p> Полученный код вставьте в выбранное место на сайте.(где есть поддержка html) </p>
                    </li >
                </ol>
            </div>
            <div className={'col-lg-6 col-12 mb-3 align-self-center'}>
            {
                    props.feedback.statusMessageIntagration
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
                            header={'Оставьте заявку для интеграции'}
                            changeName={props.changeNameIntagration}
                            changePhone={props.phone}
                            changeEmail={props.email}
                            changeText={props.updateTextIntagration}
                            nameValue={props.feedback.nameIntagration}
                            emailValue={props.feedback.emailIntagration}
                            textValue={props.feedback.textIntagration}
                            phoneValue={props.feedback.phoneIntagration}
                            validEmail={props.feedback.validEmailIntagration}
                            validPhone={props.feedback.validPhoneIntagration}
                            statusMessage={props.feedback.statusMessageIntagration}
                            id={'1'}
                            buttonClick={props.messageShipment}
                        />
                }
            </div>
        </div>
    </div>
}
export default WebsitePlagin;