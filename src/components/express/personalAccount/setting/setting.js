import React from "react";
import classesStyle from './css/setting.module.css';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {TextField} from "@material-ui/core";
import InputMask from 'react-input-mask';
import BeenhereIcon from "@material-ui/icons/Beenhere";
import {DropzoneArea} from "material-ui-dropzone";
import settingStyle from './css/setting.css';

const Setting = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    }));

    function getSteps() {
        return ['Подтвердите Email', 'Заполните ФИО', 'Подтвердите телефон'];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                if (props.setting.activationEmail === true) {
                    handleNext();
                }
                console.log(props.setting.activationEmail);
                return <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <h3>
                            Перейдите по ссылке для подтверждения аккаунта
                        </h3>
                    </div>
                </div>
            case 1:
                return <div className={'row'}>
                    <div className={'col-lg-4'}>
                        <TextField
                            className={classesStyle.input}
                            id="outlined-required"
                            label="Фамилия"
                            variant="outlined"
                            onChange={(e) => {
                                props.updateSurname(e.target.value)
                            }}
                            value={props.setting.surname}
                            error={props.setting.validSurname ? false : true}
                        />
                    </div>
                    <div className={'col-lg-4'}>
                        <TextField
                            className={classesStyle.input}
                            id="outlined-required"
                            label="Имя"
                            variant="outlined"
                            onChange={(e) => {
                                props.updateName(e.target.value)
                            }}
                            value={props.setting.name}
                            error={props.setting.validName ? false : true}
                        />
                    </div>
                    <div className={'col-lg-4'}>
                        <TextField
                            className={classesStyle.input}
                            label="Отчество"
                            variant="outlined"
                            onChange={(e) => {
                                props.updateMiddleName(e.target.value)
                            }}
                            value={props.setting.middleName}
                            error={props.setting.validMiddleName ? false : true}
                        />
                    </div>
                </div>;
            case 2:
                return <div className={'row'}>
                    <div className={'col-lg-4 align-self-center'}>
                        <InputMask mask="+7(999)999 99 99"
                                   maskChar=" "
                                   onChange={(e) => {
                                       props.updateNumber(e.target.value)
                                   }}
                                   value={props.setting.number}
                        >
                            <TextField
                                className={classesStyle.input}
                                label="Номер телефона"
                                variant="outlined"
                                type={"tel"}
                                disableUnderline
                                error={props.setting.validNumber ? false : true}
                            />
                        </InputMask>
                    </div>
                    <div className={'col-lg-8'}>
                        {props.setting.validButtonCode
                            ? <button onClick={() => {
                                props.updateClickButtonCode(props.setting.number)
                            }} className={classesStyle.buttonCode}>
                                Выслать код
                            </button>
                            : ''}
                        {props.setting.validTimer
                            ? <div>
                                <h5>Тут будет таймер</h5>
                            </div>
                            : ''
                        }
                    </div>
                    {
                        props.setting.validCodeActivate
                            ? null
                            : (props.setting.validInputCode
                            ? <div className={'col-lg-4 mt-3'}>
                                <InputMask mask="9-9-9-9"
                                           maskChar=" "
                                           value={props.setting.confirmationCode}
                                           onChange={(e) => {
                                               props.codeReviewsNumber(e.target.value, props.setting.number)
                                           }}
                                >
                                    <TextField
                                        className={classesStyle.input}
                                        label="Код подтверждения"
                                        variant="outlined"
                                        disableUnderline
                                        error={props.setting.validCodeActivate ? false : true}
                                    />
                                </InputMask>
                            </div>
                            : '')
                    }
                </div>;
            default:
                return null;
        }
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(props.setting.validFormEmail ? (props.setting.validFormFIO ? (props.setting.validFormPhone ? 3 : 2) : 1) : 0);
    const steps = getSteps();
    const handleNext = () => {
        if (activeStep === 0) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        if (activeStep === 1) {
            if (props.setting.validSurname  && props.setting.validName) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        }
        if (activeStep === 2) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return <div className={'container-fluid' + ' ' + classesStyle.blockContainer}>
        <div className={'container'}>
            {props.setting.activeUser
                ? <div className={'row' + ' ' + classesStyle.blockSetting}>
                    <div className={'col-lg-12 mt-3 mb-3 text-center'}>
                        <h2>Активация профиля</h2>
                    </div>
                    <div className={'col-12'}>
                        <div className={classes.root}>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                {steps.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        <StepContent>
                                            <Typography>{getStepContent(index)}</Typography>
                                            <div className={classes.actionsContainer}>
                                                <div>
                                                    <Button
                                                        disabled={activeStep === 0 || activeStep === 1}
                                                        onClick={handleBack}
                                                        className={classes.button}
                                                    >
                                                        Назад
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => {
                                                            handleNext();
                                                            if (activeStep === steps.length - 2) {
                                                                if (props.setting.validSurname && props.setting.validName) {

                                                                }
                                                            }
                                                        }
                                                        }
                                                        className={classes.button}
                                                        disabled={activeStep === steps.length - 1 ? true : false}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Готово' : 'Далее'}
                                                    </Button>
                                                </div>
                                            </div>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length && (
                                <Paper square elevation={0} className={classes.resetContainer}>
                                    <div className={'row'}>
                                        <div className={'col-lg-12 text-center'}>
                                            <Typography>
                                                <BeenhereIcon
                                                    color="secondary"
                                                    fontSize='large'
                                                />
                                            </Typography>
                                            <Typography>Вы успешно активировали свой аккаунт.<br/> Сделайте свой первый
                                                заказ.</Typography>
                                        </div>
                                    </div>
                                </Paper>
                            )}
                        </div>
                    </div>
                </div>
                : <div className={'row' + ' ' + classesStyle.blockSetting}>
                    <div className={'col-lg-12 mt-3 mb-3 text-center'}>
                        <h2>Настройки профиля</h2>
                    </div>
                    <div className={'col-lg-12'}>
                        <div className={'row'}>
                            <div className={'col-lg-4'}>
                                <div className={'row'}>
                                    <div className={'col-lg-12'}>
                                        <img className={classesStyle.imgProfile}
                                             src={'https://i0.wp.com/salesforce-developer.ru/wp-content/uploads/avatars/no-avatar.jpg?ssl=1'}/>
                                    </div>
                                    <div className={'col-lg-12 mb-lg-3 ' + ' ' + classesStyle.dropzona} >
                                        <DropzoneArea
                                            className={settingStyle.zona}
                                            dropzoneParagraphClass={settingStyle.DropzoneAreaDropZone6}
                                            //onChange={this.handleChange.bind(this)}
                                            filesLimit={1}
                                            dropzoneText={''}
                                            previewGridClasses={settingStyle.DropzoneAreaDropZone6}
                                            classes={settingStyle.DropzoneAreaDropZone6}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={'col-lg-8'}>
                                <div className={'row'}>
                                    <div className={'col-lg-6'}>
                                        <TextField
                                            className={classesStyle.input}
                                            label="Фамилия"
                                            variant="outlined"
                                            onChange={(e) => {
                                                props.updateSurname(e.target.value)
                                            }}
                                            value={props.setting.surname}
                                            error={props.setting.validSurname ? false : true}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <TextField
                                            className={classesStyle.input}
                                            label="Имя"
                                            variant="outlined"
                                            onChange={(e) => {
                                                props.updateMiddleName(e.target.value)
                                            }}
                                            value={props.setting.middleName}
                                            error={props.setting.validMiddleName ? false : true}
                                        />
                                    </div>
                                    <div className={'col-lg-6 mt-lg-3'}>
                                        <TextField
                                            className={classesStyle.input}
                                            label="Отчество"
                                            variant="outlined"
                                            onChange={(e) => {
                                                props.updateName(e.target.value)
                                            }}
                                            value={props.setting.name}
                                            error={props.setting.validName ? false : true}
                                        />
                                    </div>
                                    <div className={'col-lg-6 mt-lg-3'}>
                                        <TextField
                                            className={classesStyle.input}
                                            label="День рождения"
                                            placeholder={'дд/мм/гг'}
                                            variant="outlined"
                                            type={'date'}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                             onChange={(e) => {
                                                 props.birthdayUser(e.target.value)
                                             }}
                                             value={props.setting.birthday}
                                             //error={props.setting.validSurname ? false : true}
                                        />
                                    </div>
                                    <div className={'col-lg-6 mt-lg-3 '}>
                                        <TextField
                                            className={classesStyle.input}
                                            label="Email"
                                            disabled={true}
                                            variant="outlined"
                                            // onChange={(e) => {
                                            //     props.birthdayUser(e.target.value)
                                            // }}
                                              value={props.setting.email}
                                            //  error={props.setting.validMiddleName ? false : true}
                                        />
                                    </div>
                                    <div className={'col-lg-6 mt-lg-3 mb-lg-3'}>
                                        <InputMask mask="+7(999)999 99 99"
                                                   maskChar=" "
                                                   onChange={(e) => {
                                                       props.updateNumber(e.target.value)
                                                   }}
                                                   value={props.setting.number}
                                        >
                                            <TextField
                                                className={classesStyle.input}
                                                label="Номер телефона"
                                                variant="outlined"
                                                type={"tel"}
                                                disableUnderline
                                                //error={props.setting.validNumber ? false : true}
                                            />
                                        </InputMask>
                                    </div>
                                    <div className={'col-lg-6'}>
                                    </div>
                                    <div className={'col-lg-6 mb-3'}>
                                        {props.setting.validButtonCode
                                            ? <button onClick={() => {
                                                props.updateClickButtonCode(props.setting.number)
                                            }} className={classesStyle.buttonCode}>
                                                Выслать код
                                            </button>
                                            : ''}
                                        {props.setting.validTimer
                                            ? <div>
                                                <h5>Тут будет таймер</h5>
                                            </div>
                                            : ''
                                        }
                                    </div>
                                    <div className={'col-lg-6'}>

                                    </div>
                                    {props.setting.validInputCode
                                        ? <div className={'col-lg-6 mt-3 mb-3'}>
                                            <InputMask mask="9-9-9-9"
                                                       maskChar=" "
                                                       value={props.setting.confirmationCode}
                                                       onChange={(e) => {
                                                           props.codeReviewsNumber(e.target.value,props.setting.number)
                                                       }}
                                            >
                                                <TextField
                                                    className={classesStyle.input}
                                                    label="Код подтверждения"
                                                    variant="outlined"
                                                    type={"tel"}
                                                    disableUnderline
                                                    //error={props.setting.validNumber ? false : true}
                                                />
                                            </InputMask>
                                        </div>
                                        : ''
                                    }
                                    <div className={'col-lg-12 text-center mb-3'}>
                                        <button onClick={()=>{props.updateInfoUser(props.setting.surname, props.setting.name,props.setting.middleName,props.setting.birthday)}} className={classesStyle.buttonCode}>
                                            Сохранить изменения
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
}
export default Setting;