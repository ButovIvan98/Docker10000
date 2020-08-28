import Cookies from "js-cookie";
import {companyAPI, userAPI} from "../API/api";
import {checkToken} from "./authReducer";

const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_ACTIVE_COMPANY = 'UPDATE_ACTIVE_COMPANY';
const ADD_COMPANY = 'ADD_COMPANY';
let initialState = {
    Express_main: [
        {id: '/', title: 'Калькулятор', active: 'classNamees.active'},
        {id: '/myShipments', title: 'Мои отправления', active: 'classNamees.active'},
        {id: '/myPayment', title: 'Счета и оплата', active: 'classNamees.active'},
        {id: '/myAddress', title: 'Адресная книга', active: 'classNamees.active'},
    ],
    Cargo_main: [
        {id: '/car', title: 'Найти машины', active: 'classNamees.active'},
        {id: '/cargo', title: 'Найти грузы', active: 'classNamees.active'},
        {id: '/my_car', title: 'Мои машины', active: 'classNamees.active'},
        {id: '/my_cargo', title: 'Мои грузы', active: 'classNamees.active'},
        {id: '/my_contact', title: 'Адресная книга', active: 'classNamees.active'},
    ],
    statusBlockMain: false,//Открыто или закрыто меню
    listCompany: [],//Список моих компаний
    activeCompany: {
        id: null,
        companyTitle: null,//
        isLegal: null,//true если юр. лицо
        isOwnerCompany: null,//Владелец компании
        isPersonal: null,//true если физ. лицо
        photo: null,
        username: null
    }
};
const SidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return {
                ...state,
                statusBlockMain: action.statusBody
            }
        case UPDATE_ACTIVE_COMPANY:
            return {
                ...state,
                activeCompany: {
                    companyTitle: action.bodyCompanyTitle,
                    id: action.bodyId,
                    isLegal: action.bodyIsLegal,
                    isOwnerCompany: action.bodyIsOwnerCompany,
                    isPersonal: action.bodyIsPersonal,
                    photo: action.bodyPhoto,
                    username: action.bodyUsername
                }
            }
        case ADD_COMPANY:
            return {
                ...state,
                listCompany: action.bodyCompany
            }
        default:
            return state;
    }
}
const updateStatus = (status) => ({type: UPDATE_STATUS, statusBody: status});
const updateCompanyActive = (id, companyTitle, isLegal, isOwnerCompany, isPersonal, photo, username) => ({
    type: UPDATE_ACTIVE_COMPANY,
    bodyId: id,
    bodyCompanyTitle: companyTitle,
    bodyIsLegal: isLegal,
    bodyIsOwnerCompany: isOwnerCompany,
    bodyIsPersonal: isPersonal,
    bodyPhoto: photo,
    bodyUsername: username
});
const updateCompany = (company) => ({type: ADD_COMPANY, bodyCompany: company});
/*Открытие и закрытие меню*/
export const newStatus = (status) => {
    return (dispatch) => {
        if (status === true) dispatch(updateStatus(false));
        else dispatch(updateStatus(true));
    }
};
/*Отправка запроса на выход с сайта и удаление токена.*/
export const logout = () => {
    return (dispatch) => {
        userAPI.deleteToken().then(response => {
            document.cookie = 'auth_token=' + ' '
            document.cookie= 'id_company=' + ' '
            dispatch(checkToken());
        }).catch(error => {
        });
    }
}
/*Заполнение списка моих компаний*/
export const listCompany = () => {
    return (dispatch) => {
        companyAPI.listCompanyHeader().then(response => {
            dispatch(updateCompany(response.data));
            if(Cookies.get('id_company')==='' || Cookies.get('id_company')===undefined){
                Cookies.set('id_company',response.data[0].id);
            }
            response.data.map(nav => {
                if (String(nav.id) === String(Cookies.get('id_company'))) {
                    dispatch(updateCompanyActive(
                        nav.id,
                        nav.company_title,
                        nav.is_legal,
                        nav.is_owner_company,
                        nav.is_personal,
                        nav.photo,
                        nav.last_name + ' ' + nav.first_name
                    ))
                }
            })
        }).catch(error => {
        })
    }
};

export const updateCompanyActiveData = (id, companyTitle, isLegal, isOwnerCompany, isPersonal, photo, username) => {
    return (dispatch) => {
        console.log(id, companyTitle, isLegal, isOwnerCompany, isPersonal, photo, username);
        dispatch(updateCompanyActive(id, companyTitle, isLegal, isOwnerCompany, isPersonal, photo, username));
        Cookies.set('id_company', id)
    }
};

export default SidebarReducer;