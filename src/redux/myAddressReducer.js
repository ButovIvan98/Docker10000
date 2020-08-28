import {addAddressAPI, cityAPI} from "../API/api";
import Cookies from "js-cookie";

const ADD_ADDRESS = 'ADD_ADDRESS';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const DELETE_ADDRESS = 'DELETE_ADDRESS';
/*Контактная информация*/
const UPDATE_SURNAME = 'UPDATE_SURNAME';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_MIDDLE_NAME = 'UPDATE_MIDDLE_NAME';
const UPDATE_PHONE = 'UPDATE_PHONE';
const UPDATE_PHONE2 = 'UPDATE_PHONE2';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_NAME_COMPANY = 'UPDATE_NAME_COMPANY';
/*Информация об адресе*/
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STREET = 'UPDATE_STREET';
const UPDATE_HOUSE = 'UPDATE_HOUSE';
const UPDATE_FLAT = 'UPDATE_FLAT';
const UPDATE_INDEX = 'UPDATE_INDEX';
/*Получаем список городов и улиц*/
const SEARCH_CITY = 'SEARCH_CITY';
const SEARCH_STREET = 'SEARCH_STREET';
const SEARCH_HOUSE = 'SEARCH_HOUSE';
/*Получаем список созданных адресов*/
const LIST_ADDRESS = 'LIST_ADDRESS'

let initialState = {
    listAddress: [],
    dataAddress: [
        {
            nameUser: 'Иван Иванов',
            nameCompany: 'ООО "Рога и Копыта"',
            addressCountry: 'Россия',
            addressCity: 'Москва',
            addressStreet: 'Ленина',
            addressNumberHouse: '46',
            addressNumberOffice: '1',
            phone: '+7(999)476-83-92',
        },
        {
            nameUser: 'Кирилл Саньков',
            nameCompany: 'ООО "Вжлинк"',
            addressCountry: 'Россия',
            addressCity: 'Москва',
            addressStreet: 'Молодежная',
            addressNumberHouse: '32',
            addressNumberOffice: '109',
            phone: '+7(999)476-83-10',
        }
    ],
    addAddress: {
        listCity: [],
        listStreet: [],
        listHouse: [],
        country: 'Россия',//Страна
        city: '',//Город
        fullInfoCity: [],//Полная информация о городе
        validCity: true,
        street: '',//Улица
        fullInfoStreet: [],
        validStreet: true,
        house: null,//Дом
        fullInfoHouse: [],
        validHouse: true,
        flat: null,//Квартира-офис
        index: '',//Индекс
        validIndex: true,
        nameCompany: null,//Наименование компании
        surname: null,//Фамилия контактного лица
        validSurname: true,
        name: null,//Имя контактного лица
        validName: true,
        middleName: null,//Отчество контактного лица
        phone1: '',//Телефон контактного лица
        validPhone: true,
        phone2: null,//Допольнительный телефон контактного лица
        comment: null,//Комментарий к контакту
        addAddressButton:false
    }
}
const MyAddressReducer = (state = initialState, action) => {
    switch (action.type) {
        /*Контактная информация*/
        case UPDATE_SURNAME:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    surname: action.bodySurnameContact,
                    validSurname: action.bodyValidSurnameContact
                }
            }
        case UPDATE_NAME:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    name: action.bodyNameContact,
                    validName: action.bodyValidNameContact
                }
            }
        case UPDATE_MIDDLE_NAME:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    middleName: action.bodyMiddleNameContact
                }
            }
        case UPDATE_PHONE:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    phone1: action.bodyPhone1,
                    validPhone: action.bodyValidPhone1
                }
            }
        case UPDATE_PHONE2:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    phone2: action.bodyPhone2
                }
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    comment: action.bodyCommentContact
                }
            }
        case UPDATE_NAME_COMPANY:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    nameCompany: action.bodyNameCompany
                }
            }
        /*Действия с адресом адресе контакта*/
        case UPDATE_CITY:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    fullInfoCity: action.bodyFullCityInfo,
                    city: action.bodyCityAddress,
                    validCity: action.bodyValidCity
                }
            }
        case UPDATE_STREET:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    street: action.bodyStreetAddress,
                    fullInfoStreet: action.bodyFullInfoStreet,
                    validStreet: action.bodyValidStreet
                }
            }
        case UPDATE_HOUSE:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    house: action.bodyHouseAddress,
                    fullInfoHouse: action.bodyFullInfoHouse,
                    validHouse: action.bodyValidHouse
                }
            }
        case UPDATE_FLAT:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    flat: action.bodyFlatAddress
                }
            }
        case UPDATE_INDEX:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    index: action.bodyIndexAddress,
                    validIndex: action.bodyValidIndex
                }
            }
        /*ЗАПОЛНЕНИЕ STATE СПИСКОМ ГОРОДОВ И УЛИЦ ПРИ ПОИСКЕ*/
        case SEARCH_CITY:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    listCity: action.bodyListCity
                }
            }
        case SEARCH_STREET:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    listStreet: action.bodyListStreet
                }
            }
        case SEARCH_HOUSE:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    listHouse: action.bodyListHouse
                }
            }
        /*ЗАПОЛНЯЕТСЯ СПИСОК СОЗДАННЫХ АДРЕСОВ*/
        case LIST_ADDRESS:
            return {
                ...state,
                listAddress: action.bodyListAddress
            }
            /*ИЗМЕНЕНИЕ СОСТОЯНИЯ КНОПКИ ДОБАВЛЕНИЯ КОНТАКТА*/
        case ADD_ADDRESS:
            return {
                ...state,
                addAddress: {
                    ...state.addAddress,
                    addAddressButton: action.bodyAddAddressButton
                }
            }
        default:
            return state
    }
}
/*Обновление состояния контактной информации*/
const updateSurname = (surname, status) => ({
    type: UPDATE_SURNAME,
    bodySurnameContact: surname,
    bodyValidSurnameContact: status
});
const updateName = (name, status) => ({type: UPDATE_NAME, bodyNameContact: name, bodyValidNameContact: status});
const updateMiddleName = (middleName) => ({type: UPDATE_MIDDLE_NAME, bodyMiddleNameContact: middleName});
const updatePhone1 = (phone, status) => ({type: UPDATE_PHONE, bodyPhone1: phone, bodyValidPhone1: status});
const updatePhone2 = (phone) => ({type: UPDATE_PHONE2, bodyPhone2: phone});
export const updateComment = (comment) => ({type: UPDATE_COMMENT, bodyCommentContact: comment});
export const updateNameCompany = (name) => ({type: UPDATE_NAME_COMPANY, bodyNameCompany: name});
const updateStatusButton=(status)=>({type:ADD_ADDRESS,bodyAddAddressButton:status});
/*Обновление состояния адреса отправки*/
const updateCity = (city, status, fullInfoCity) => ({
    type: UPDATE_CITY,
    bodyCityAddress: city,
    bodyValidCity: status,
    bodyFullCityInfo: fullInfoCity
});
const updateStreet = (street, status, fullInfoStreet) => ({
    type: UPDATE_STREET,
    bodyStreetAddress: street,
    bodyValidStreet: status,
    bodyFullInfoStreet: fullInfoStreet
});
const updateHouse = (house, status, fullInfoHouse) => ({
    type: UPDATE_HOUSE,
    bodyHouseAddress: house,
    bodyValidHouse: status,
    bodyFullInfoHouse: fullInfoHouse
});
const updateFlat = (flat) => ({type: UPDATE_FLAT, bodyFlatAddress: flat});
const updateIndex = (index, status) => ({type: UPDATE_INDEX, bodyIndexAddress: index, bodyValidIndex: status});
/*Список улиц и городов*/
const listCity = (list) => ({type: SEARCH_CITY, bodyListCity: list});
const listStreet = (list) => ({type: SEARCH_STREET, bodyListStreet: list});
const listHouse = (list) => ({type: SEARCH_HOUSE, bodyListHouse: list});
const listAddressBook = (list) => ({type: LIST_ADDRESS, bodyListAddress: list});

export const listMyAddress = () => {
    return (dispatch) => {
        addAddressAPI.listAddress().then(r => {
            dispatch(listAddressBook(r.data));
        })
    }
}
/*Валидация и обновление состояния - фамилия*/
export const surnameInfo = (surname) => {
    return (dispatch) => {
        if (surname.length > 1) {
            dispatch(updateSurname(surname, true));
        } else {
            dispatch(updateSurname(surname, false));
        }
    }
}
/*Валидация и обновление состояния - имя*/
export const nameInfo = (name) => {
    return (dispatch) => {
        if (name.length > 1) {
            dispatch(updateName(name, true));
        } else {
            dispatch(updateName(name, false));
        }
    }
}
/*Валидация и обновление состояния - отчество*/
export const middleNameInfo = (middleName) => {
    return (dispatch) => {
        dispatch(updateMiddleName(middleName));
    }
}
/*Заполнения номера телефона*/
export const phoneInfo1 = (phone) => {
    return (dispatch) => {
        let phoneUser = Number(phone.replace(/[^\d]/g, ''));
        if (String(phoneUser).length === 11) {
            dispatch(updatePhone1(phone, true));
        } else {
            dispatch(updatePhone1(phone, false));
        }
    }
}
/*Заполнения дополнительного номера телефона*/
export const phoneInfo2 = (phone) => {
    return (dispatch) => {
        dispatch(updatePhone2(phone));
    }
}
/*Валидация и обновление состояния - номер офис(квартира)*/
export const flatInfo = (flat) => {
    return (dispatch) => {
        dispatch(updateFlat(flat));
    }
}
/*Валидация и обновление состояния - индекс*/
export const indexInfo = (index) => {
    return (dispatch) => {
        if (index.length === 6) {
            dispatch(updateIndex(index, true));
        } else {
            dispatch(updateIndex(index, false));
        }
    }
}
/*Получаем список городов для выбора*/
export const cityInfo = (city) => {
    return (dispatch) => {
        if (city.length > 2) {
            cityAPI.searchCity(city).then(r => {
                console.log(r.data);
                dispatch(listCity(r.data));
            }).catch(error => {

            })
        }
    }
}
/*Получаем полную информацию о городе*/
export const fullInfoCity = (city) => {
    return (dispatch) => {
        cityAPI.cityInformation(city).then(r => {
            dispatch(updateCity(city, true, r.data));
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}
/*Получаем список улиц для выбора*/
export const streetInfo = (type, fias, street) => {
    return (dispatch) => {
        if (street.length > 2) {
            cityAPI.searchStreet(type, fias, street).then(r => {
                dispatch(listStreet(r.data));
                console.log(r.data);
            }).catch(error => {

            })
        }
    }
}
/*Получаем полную информацию по улице*/
export const fullInfoStreet = (street, data) => {
    return (dispatch) => {
        data.map(r => {
            if (r.street_with_type === street) {
                dispatch(updateStreet(street, true, r));
            }
        })
    }
}
/*Получаем список домов для выбора*/
export const houseInfo = (fias, house) => {
    return (dispatch) => {
        cityAPI.searchHouse(fias, house).then(r => {
            dispatch(listHouse(r.data));
        }).catch(error => {

        })
    }
}
/*Получаем полную информацию по дому*/
export const fullInfoHouse = (fias, house, list) => {
    return (dispatch) => {
        list.map(r => {
            let params = (r.block===null ? '' : r.house_type + ' ') + r.house  + (r.block===null ? '' : ' ' + r.block_type + ' ' + r.block );
            console.log(params);
            console.log(house)
            if (params === house) {
                cityAPI.houseInformation(fias, r.unrestricted_value).then(res => {
                    dispatch(updateHouse(house, true, res.data));
                    dispatch(indexInfo(res.data[0].zip))
                }).catch(error => {

                })
            }
        })

    }
}

/*Добавление контакта*/
export const addAddressBook = (data) => {
    return (dispatch) => {
        if(String(data.surname).length < 2) {
            dispatch(updateSurname(data.surname, false));
        }
        if (String(data.name).length < 2) {
            dispatch(updateName(data.name, false));
        }
        let phoneUser = Number((data.phone1).replace(/[^\d]/g, ''));
        if (String(phoneUser).length < 11 || String(phoneUser).length > 11) {
            dispatch(updatePhone1(data.phone1, false));
        }
        if (data.fullInfoStreet.street === undefined) {
            dispatch(updateStreet(data.street, false, []))
        }
        if (data.fullInfoHouse[0] === undefined) {
            dispatch(updateStreet(data.house, false, []))
        }
        if (data.fullInfoCity[0] === undefined) {
            dispatch(updateCity(data.city, false, []))
        }
        if ((data.fullInfoStreet.street !== undefined)
            && (data.fullInfoHouse[0] !== undefined)
            && (data.fullInfoCity[0].id !== undefined)
            && (String(phoneUser).length === 11)
            && (String(data.name).length > 2)
            && (String(data.surname).length > 2)) {
            addAddressAPI.addBookAddress(

                Cookies.get('id_company'),
                data.fullInfoCity[0].id,
                data.fullInfoStreet.street,
                data.fullInfoStreet.street_type,
                data.fullInfoHouse[0].house,
                data.fullInfoHouse[0].house_type,
                data.fullInfoHouse[0].block,
                data.fullInfoHouse[0].block_type,
                data.flat,
                'кв',
                data.index,
                data.nameCompany,
                data.surname,
                data.name,
                data.middleName,
                data.phone1,
                '',
                data.phone2,
                '',
                data.comment,
                data.fullInfoHouse[0].latitude,
                data.fullInfoHouse[0].longitude,
                data.fullInfoHouse[0].house_fias_id
            ).then(r => {
                dispatch(updateStatusButton(true));
                dispatch(updateCity('', true, []));
                dispatch(updateStreet('', true, []));
                dispatch(updateHouse('', true, []));
                dispatch(updateFlat(''));
                dispatch(updateIndex('', true));
                dispatch(updateSurname('', true));
                dispatch(updateName('', true));
                dispatch(updateMiddleName(''));
                dispatch(updatePhone1('', true));
                dispatch(updatePhone2(''));
                dispatch(updateComment(''));
                dispatch(updateNameCompany(''));
                dispatch(updateStatusButton(false));
            })
        }
    }
}
/*Удаление адреса*/
export const deleteAddress = (id)=>{
    return(dispatch)=>{
        addAddressAPI.deleteAddress(id).then(r=>{
            dispatch(listMyAddress());
        })
    }
}
/*Изменение адреса*/
export const updateAddressBook = (data,id) => {
    return (dispatch) => {
        console.log(data);
        if(String(data.surname).length < 2) {
            dispatch(updateSurname(data.surname, false));
        }
        if (String(data.name).length < 2) {
            dispatch(updateName(data.name, false));
        }
        let phoneUser = Number((data.phone1).replace(/[^\d]/g, ''));
        if (String(phoneUser).length < 11 || String(phoneUser).length > 11) {
            dispatch(updatePhone1(data.phone1, false));
        }
        if (data.fullInfoStreet.street === undefined) {
            dispatch(updateStreet(data.street, false, []))
        }
        if (data.fullInfoHouse[0] === undefined) {
            dispatch(updateStreet(data.house, false, []))
        }
        if (data.fullInfoCity[0] === undefined) {
            dispatch(updateCity(data.city, false, []))
        }
        if ((data.fullInfoStreet.street !== undefined)
            && (data.fullInfoHouse[0] !== undefined)
            && (data.fullInfoCity[0].id !== undefined)
            && (String(phoneUser).length === 11)
            && (String(data.name).length > 2)
            && (String(data.surname).length > 2)) {
            addAddressAPI.addBookAddress(
                id,
                Cookies.get('id_company'),
                data.fullInfoCity[0].id,
                data.fullInfoStreet.street,
                data.fullInfoStreet.street_type,
                data.fullInfoHouse[0].house,
                data.fullInfoHouse[0].house_type,
                data.fullInfoHouse[0].block,
                data.fullInfoHouse[0].block_type,
                data.flat,
                'кв',
                data.index,
                data.nameCompany,
                data.surname,
                data.name,
                data.middleName,
                data.phone1,
                '',
                data.phone2,
                '',
                data.comment,
                data.fullInfoHouse[0].latitude,
                data.fullInfoHouse[0].longitude
            ).then(r => {
                dispatch(updateStatusButton(true));
                dispatch(updateCity('', true, []));
                dispatch(updateStreet('', true, []));
                dispatch(updateHouse('', true, []));
                dispatch(updateFlat(''));
                dispatch(updateIndex('', true));
                dispatch(updateSurname('', true));
                dispatch(updateName('', true));
                dispatch(updateMiddleName(''));
                dispatch(updatePhone1('', true));
                dispatch(updatePhone2(''));
                dispatch(updateComment(''));
                dispatch(updateNameCompany(''));
                dispatch(updateStatusButton(false));
            })
        }
    }
}
export default MyAddressReducer;