import {userAPI} from "../API/api";
import {auth} from "./authReducer";

const INPUT_TEXT_EMAIL = 'INPUT_TEXT_EMAIL';//Емаил
const INPUT_TEXT_PASSWORD = 'INPUT_TEXT_PASSWORD';//Пароль
const NOTIFICATION = 'NOTIFICATION';//уведомление

const VALID_EMAIL = 'VALID_EMAIL';//Валидация емаил
const VALID_PASSWORD = 'VALID_PASSWORD';//Валидация пароля

const HELPER_TEXT_EMAIL='HELPER_TEXT_EMAIL';//Текст сообщение об ошибке по Email
const HELPER_TEXT_PASSWORD='HELPER_TEXT_PASSWORD';//Текст сообщение об ошибке по паролю

const ADD_USER = 'ADD_USER';//Добавление юзера
const RELOAD_PASSWORD = 'RELOAD_PASSWORD';//Отправика запроса на восстановление

const UPDATE_RELOAD_EMAIL = 'UPDATE_RELOAD_EMAIL';//Емаил для восстановления пароля

let initialState = {
    email: '',
    validEmail: false,
    helperTextEmail:'Введите Email',
    password: '',
    validPassword: false,
    helperTextPassword:'Введите пароль',
    addUser: false,
    notifications: false,
    reloadPasswordEmail: '',
    statusSendingRecovery:true
};
const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_TEXT_EMAIL:
            return {
                ...state,
                email: action.bodyEmail
            };
        case INPUT_TEXT_PASSWORD:
            return {
                ...state,
                password: action.bodyPassword
            };
        case VALID_EMAIL:
            return {
                ...state,
                validEmail: action.emailStatus
            };
        case VALID_PASSWORD:
            return {
                ...state,
                validPassword: action.passwordStatus
            };
        case ADD_USER:
            return {
                ...state,
                addUser: action.bodyStatusUser
            };
        case NOTIFICATION:
            return {
                ...state,
                notifications: action.bodyStatusNotification
            };
        case UPDATE_RELOAD_EMAIL:
            return {
                ...state,
                reloadPasswordEmail: action.bodyReloadPassword
            };
        case RELOAD_PASSWORD:
            return {
                ...state,
                statusSendingRecovery:action.bodyStatusSendingRecovery
            };
        case HELPER_TEXT_EMAIL:
            return {
                ...state,
                helperTextEmail: action.bodyHelperTextEmail
            }
        case HELPER_TEXT_PASSWORD:
            return {
                ...state,
                helperTextPassword: action.bodyHelperTextPassword
            }
        default:
            return {...state}
    }
};
/*Заполнение данными поля*/
const updateTextEmail = (email) => ({type: INPUT_TEXT_EMAIL, bodyEmail: email});
const updateTextPassword = (password) => ({type: INPUT_TEXT_PASSWORD, bodyPassword: password});
const updateCheckedNotification = (status) => ({type: NOTIFICATION, bodyStatusNotification: status});

/*Изменение статуса валидациии полей*/
const checkValidEmail = (status) => ({type: VALID_EMAIL, emailStatus: status});
const checkValidPassword = (status) => ({type: VALID_PASSWORD, passwordStatus: status});

/*Изменение текста ошибке*/
const updateHelperTextEmail=(helperText)=>({type:HELPER_TEXT_EMAIL, bodyHelperTextEmail:helperText});
const updateHelperTextPassword=(helperText)=>({type:HELPER_TEXT_PASSWORD, bodyHelperTextPassword:helperText});

/*Изменение статуса, если отправка данных на сервер прошла успешно.*/
const addUserStatus = (status) => ({type: ADD_USER, bodyStatusUser: status});
const reloadPasswordUser = (status)=>({type:RELOAD_PASSWORD,bodyStatusSendingRecovery:status});

/*Поле для обновление пароля по емаилу*/
export const updateEmailReloadPassword = (value) => ({type: UPDATE_RELOAD_EMAIL, bodyReloadPassword: value});

/*Отправка запроса на восстановление пароля*/
export const reloadPasswordServerData =(value)=>{
    return(dispatch)=>{
        dispatch(reloadPasswordUser(!value));
    }
};

/*Проверка согласия получать уведомления по Email*/
export const updateChecked = (value) => {
    return (dispatch) => {
        dispatch(updateCheckedNotification(!value))
    }
};

/*Добавление User-а*/
export const addUser = (password, email) => {
    return (dispatch) => {

        userAPI.getUsers(email,password).then(response=>{
            dispatch(addUserStatus(true));
            //dispatch(auth(password,email));
        }).catch(error=>{
            if(error.response.data.email===undefined){
                dispatch(updateHelperTextPassword(error.response.data.password[0]));
                dispatch(checkValidPassword(false));
            }
            else{
                dispatch(updateHelperTextEmail(error.response.data.email[0]));
                dispatch(checkValidEmail(false))
            }
            })

    }
};

/*Проверка email на волидацию и внесение изменений в state*/
export const Email = (email) => {
    return (dispatch) => {
        dispatch(updateTextEmail(email));
        if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
            dispatch(checkValidEmail(false));
        } else {
            dispatch(checkValidEmail(true));
        }
    }
};

/*Проверка password на волидацию и внесение изменений в state*/
export const Password = (password) => {
    return (dispatch) => {
        dispatch(updateTextPassword(password));
        if (!/[a-zA-Z0-9]/.test(password) || password.length < 8) {
            dispatch(checkValidPassword(false, '1px solid red'));
        } else {
            dispatch(checkValidPassword(true, '1px solid #c0e4f9'));
        }
    }
};

export default RegistrationReducer;

