const NAME_ENTRY = 'NAME_ENTRY';
const PHONE_ENTRY = 'PHONE_ENTRY';
const EMAIL_ENTRY = 'EMAIL_ENTRY';
const MESSAGE_ENTRY = 'MESSAGE_ENTRY';

const VALID_PHONE = 'VALID_PHONE';
const VALID_EMAIL = 'VALID_EMAIL';

const ADD_MESSAGE = 'ADD_MESSAGE';//Отправка сообщения на сервер

let initialState = {
    name: null,
    phone: null,
    email: null,
    textMessage: null,
    statusShipment: false,
    validPhone: false,
    validEmail: false
}

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_ENTRY:
            return {
                ...state,
                name: action.bodyName
            };
        case PHONE_ENTRY:
            return {
                ...state,
                phone: action.bodyPhone
            };
        case EMAIL_ENTRY:
            return {
                ...state,
                email: action.bodyEmail
            };
        case MESSAGE_ENTRY:
            return {
                ...state,
                textMessage: action.bodyMessage
            };
        case ADD_MESSAGE:
            return {
                ...state,
                statusShipment: action.bodyStatus
            };
        case VALID_PHONE:
            return {
                ...state,
                validPhone: action.bodyValidPhone
            }
        case VALID_EMAIL:
            return {
                ...state,
                validEmail: action.bodyValidEmail
            }
        default:
            return state
    }
}
/*Изменение статуса валидации полей*/
const updateValidPhone = (phoneValid) => ({ type: VALID_PHONE, bodyValidPhone: phoneValid });
const updateValidEmail = (emailValid) => ({ type: VALID_EMAIL, bodyValidEmail: emailValid });

/*Обновление данных в локальном state*/
export const updateName = (name) => ({ type: NAME_ENTRY, bodyName: name });
const updatePhone = (phone) => ({ type: PHONE_ENTRY, bodyPhone: phone });
const updateEmail = (email) => ({ type: EMAIL_ENTRY, bodyEmail: email });
export const updateMessage = (message) => ({ type: MESSAGE_ENTRY, bodyMessage: message });

/*Обновление данных статуса*/
const addMessage = (status) => ({ type: ADD_MESSAGE, bodyStatus: status });

/*Отправка сообщения на сервер*/
export const messageShipment = (status,/*message*/validEmail, validPhone) => {
    return (dispatch) => {
        validEmail ? dispatch(addMessage(!status)) : (validPhone ? dispatch(addMessage(!status)) : dispatch(addMessage(false)))   
    }
}

/*Обновление данных и проверка валидации поля phone*/
export const phone = (valuePhone) => {
    return (dispatch) => {
        dispatch(updatePhone(valuePhone));
        console.log(valuePhone.length);
        valuePhone.length === 11 ? dispatch(updateValidPhone(true)) : (valuePhone.length === 12 ? dispatch(updateValidPhone(true)) : dispatch(updateValidPhone(false)));
    }
}

/*Обновление данных и проверка валидации поля email*/
export const email = (valueEmail) => {
    return (dispatch) => {
        dispatch(updateEmail(valueEmail));
        if (!/.+@.+\.[A-Za-z]+$/.test(valueEmail)) {
            dispatch(updateValidEmail(false));
        } else {
            dispatch(updateValidEmail(true));
        }
    }
}
export default ContactReducer;