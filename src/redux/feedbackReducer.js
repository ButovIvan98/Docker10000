/*Обратная связь для интеграции модуля*/
const INTEGRATION_NAME = 'INTEGRATION_NAME';
const INTEGRATION_PHONE = 'INTEGRATION_PHONE';
const INTEGRATION_EMAIL = 'INTEGRATION_EMAIL';
const INTEGRATION_TEXT = 'INTEGRATION_TEXT';

const INTEGRATION_PHONE_VALID = 'INTEGRATION_PHONE_VALID';
const INTEGRATION_EMAIL_VALID = 'INTEGRATION_EMAIL_VALID';

const ADD_SERVER_MESSAGE = 'ADD_SERVER_MESSAGE';

/*Обратная связь для общих вопросов клиентов*/
const GENERAL_NAME_ENTRY = 'NAME_ENTRY';
const GENERAL_PHONE_ENTRY = 'PHONE_ENTRY';
const GENERAL_EMAIL_ENTRY = 'EMAIL_ENTRY';
const GENERAL_MESSAGE_ENTRY = 'MESSAGE_ENTRY';

const GENERAL_VALID_PHONE = 'VALID_PHONE';
const GENERAL_VALID_EMAIL = 'VALID_EMAIL';

const GENERAL_ADD_MESSAGE = 'ADD_MESSAGE';//Отправка сообщения на сервер

let initialState = {
    nameIntagration: null,
    phoneIntagration: null,
    emailIntagration: null,
    textIntagration: null,
    validPhoneIntagration: false,
    validEmailIntagration: false,
    statusMessageIntagration: false,
    nameGeneral: null,
    phoneGeneral: null,
    emailGeneral: null,
    textGenetal: null,
    validPhoneGeneral: false,
    validEmailGeneral: false,
    statusMessageGeneral: false
}

const FeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case INTEGRATION_EMAIL:
            return {
                ...state,
                nameIntagration: action.bodyName
            }
        case INTEGRATION_PHONE:
            return {
                ...state,
                phoneIntagration: action.bodyPhone
            }
        case INTEGRATION_EMAIL:
            return {
                ...state,
                emailIntagration: action.bodyEmail
            }
        case INTEGRATION_PHONE_VALID:
            return {
                ...state,
                validPhoneIntagration: action.bodyValidPhone
            }
        case INTEGRATION_EMAIL_VALID:
            return {
                ...state,
                validEmailIntagration: action.bodyValidEmail
            }
        case INTEGRATION_TEXT:
            return {
                ...state,
                textIntagration: action.bodyText
            }
        case ADD_SERVER_MESSAGE:
            return {
                ...state,
                statusMessageIntagration: action.bodyStatus
            }
        case GENERAL_NAME_ENTRY:
            return {
                ...state,
                nameGeneral: action.bodyNameGeneral
            };
        case GENERAL_PHONE_ENTRY:
            return {
                ...state,
                phoneGeneral: action.bodyPhoneGeneral
            };
        case GENERAL_EMAIL_ENTRY:
            return {
                ...state,
                emailGeneral: action.bodyEmailGeneral
            };
        case GENERAL_MESSAGE_ENTRY:
            return {
                ...state,
                textGenetal: action.bodyTextGeneral
            }
        case GENERAL_VALID_PHONE:
            return {
                ...state,
                validPhoneGeneral: action.bodyValidPhoneGeneral
            }
        case GENERAL_VALID_EMAIL:
            return {
                ...state,
                validEmailGeneral: action.bodyValidEmailGeneral
            }
        case GENERAL_ADD_MESSAGE:
            return {
                ...state,
                statusMessageGeneral: action.bodyStatusGeneral
            }

        default:
            return {
                ...state
            }
    }
}

/*Обновление данных полей в локальном state*/
export const updateName = (name) => ({ type: INTEGRATION_NAME, bodyName: name });
const updatePhone = (phone) => ({ type: INTEGRATION_PHONE, bodyPhone: phone });
const updateEmail = (email) => ({ type: INTEGRATION_EMAIL, bodyEmail: email });
export const updateText = (text) => ({ type: INTEGRATION_TEXT, bodyText: text });

export const updateNameGeneral = (name) => ({ type: GENERAL_NAME_ENTRY, bodyNameGeneral: name });
const updatePhoneGeneral = (phone) => ({ type: GENERAL_PHONE_ENTRY, bodyPhoneGeneral: phone });
const updateEmailGeneral = (email) => ({ type: GENERAL_VALID_EMAIL, bodyEmailGeneral: email });
export const updateTextGeneral = (text) => ({ type: GENERAL_MESSAGE_ENTRY, bodyTextGeneral: text });
/*Обновление статуса валидации и отправки данных на сервер*/
const updateStatusMessage = (status) => ({ type: ADD_SERVER_MESSAGE, bodyStatus: status });
const updateValidPhone = (statusPhone) => ({ type: INTEGRATION_PHONE_VALID, bodyValidPhone: statusPhone });
const updateValidEmail = (statusEmail) => ({ type: INTEGRATION_EMAIL_VALID, bodyValidEmail: statusEmail });

const updateStatusMessageGeneral = (status)=>({type:GENERAL_ADD_MESSAGE,bodyStatusGeneral:status});
const updateValidPhoneGeneral = (statusPhone) =>({type:GENERAL_VALID_PHONE, bodyValidPhoneGeneral:statusPhone});
const updateValidEmailGeneral = (statusEmail) => ({type:GENERAL_VALID_EMAIL, bodyValidEmailGeneral:statusEmail});

/*Обновление данных и проверка валидации поля phone*/
export const phone = (valuePhone, id) => {
    return (dispatch) => {
        if (id === '1') {
            dispatch(updatePhone(valuePhone));
            console.log(valuePhone.length);
            valuePhone.length === 11 ? dispatch(updateValidPhone(true)) : (valuePhone.length === 12 ? dispatch(updateValidPhone(true)) : dispatch(updateValidPhone(false)));
        }
        else if (id === '2') {
            dispatch(updatePhoneGeneral(valuePhone));
            console.log(valuePhone.length);
            valuePhone.length === 11 ? dispatch(updateValidPhoneGeneral(true)) : (valuePhone.length === 12 ? dispatch(updateValidPhoneGeneral(true)) : dispatch(updateValidPhoneGeneral(false)));
        }
    }
}

/*Обновление данных и проверка валидации поля email*/
export const email = (valueEmail, id) => {
    return (dispatch) => {
        if (id === '1') {
            dispatch(updateEmail(valueEmail));
            if (!/.+@.+\.[A-Za-z]+$/.test(valueEmail)) {
                dispatch(updateValidEmail(false));
            } else {
                dispatch(updateValidEmail(true));
            }
        }
        else if(id==='2'){
            dispatch(updateEmailGeneral(valueEmail));
            if (!/.+@.+\.[A-Za-z]+$/.test(valueEmail)) {
                dispatch(updateValidEmailGeneral(false));
            } else {
                dispatch(updateValidEmailGeneral(true));
            }
        }
    }
}

/*Отправка сообщения на сервер*/
export const messageShipment = (status,/*message*/validEmail, validPhone, id) => {
    return (dispatch) => {
        if(id === '1'){
            validEmail ? dispatch(updateStatusMessage(!status)) : (validPhone ? dispatch(updateStatusMessage(!status)) : dispatch(updateStatusMessage(false)));
        }
        else if(id === '2'){
            validEmail ? dispatch(updateStatusMessageGeneral(!status)) : (validPhone ? dispatch(updateStatusMessageGeneral(!status)) : dispatch(updateStatusMessageGeneral(false)))
        }
    }
}
export default FeedbackReducer;