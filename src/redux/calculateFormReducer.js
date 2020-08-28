import {calculateAPI, cityAPI} from "../API/api";
import {updateObjectInArray} from "../components/utils/updateElementMassive";
import {
    addAddressBookRecipient,
    addAddressBookSender,
    addTerminal,
    updateCityRecipient,
    updateCitySender,
    updateInformationCompany, updateLegalRecipient
} from "./orderReducer";

let UPDATE_WIDTH = 'UPDATE_WIDTH';
let UPDATE_HEIGHT = 'UPDATE_HEIGHT';
let UPDATE_LENGHT = 'UPDATE_LENGHT';
let UPDATE_WEIGHT = 'UPDATE_WEIGHT';
let UPDATE_QUANTITY = 'UPDATE_QUANTITY';
let UPDATE_COMMENT = 'UPDATE_COMMENT';
let UPDATE_VOLUME = 'UPDATE_VOLUME';
let UPDATE_PICKUP = 'UPDATE_PICKUP';
let UPDATE_DELIVERY = 'UPDATE_DELIVERY';
let STATUS_CALCULATE = 'STATUS_CALCULATE';

let SEARCH_CHEAPLY = 'SEARCH_CHEAPLY'//Поиск самого дешевого варианта доставки
let SEARCH_FASTER = 'SEARCH_FASTER'//Поиск самого быстрого варианта доставки

let STATUS_DETAILED_PARAMETERS = 'STATUS_DETAILED_PARAMETERS';//Статус подробные параметры
let ADD_CARGO = 'ADD_CARGO';//Добавить поля
let DELETE_CARGO = 'DELETE_CARGO';//Удаление груза

const SEARCH_CITY_DEPARTURE = 'SEARCH_CITY_DEPARTURE';//Поиск города отправки
const SEARCH_CITY_DESTINATION = 'SEARCH_CITY_DESTINATION';//Поиск города доставки

let UPDATE_DATA = 'UPDATE_DATA';//Обновление данных
let UPDATE_TEXT_SENDING = 'UPDATE_TEXT_SENDING';//Город отправления
let UPDATE_TEXT_DESTINATION = 'UPDATE_TEXT_DESTINATION';//Город прибытия
let UPDATE_TYPE_CARGO = 'UPDATE_TYPE_CARGO';//Изменение типа груза

const ADD_LIST_RESULT = 'ADD_LIST_RESULT';//Результат расчета
const ADD_FILTER_CALCULATE = 'ADD_FILTER_CALCULATE';//Добавляется отсортированный массив (Дверь-Дверь). Когда пользователь нажал рассчитать ему предлагается сразу такой вариант
const CLEAR_LIST_RESULT = 'CLEAR_LIST_RESULT';//Очистка результатов поиска тк

const FILTER_LIST = 'FILTER_LIST'//Фильтрация результата рассчета.
const STATUS_FILTER = 'STATUS_FILTER'//Состояние статуса фильтра

const CLEAR_CARGO = 'CLEAR_CARGO';//Очистка списка грузов

const ARRANGE_ORDER = 'ARRANGE_ORDER'//Выбор тарифа и тк для перехода к оформлению заказа

let initialState = {
    cityOfDeparture: {
        listCity: [],
        city: {},
        validCity: true
    },
    cityOfDestination: {
        listCity: [],
        city: [],
        validCity: true
    },
    statusDetailedParameters: true,
    destinationCityList: [],
    statusCalculate: false,//статус калькуляции(идет расчет или нет)
    listCargo: [
        {
            id: 1,
            weight: null,
            volume: null,
            height: null,
            lenght: null,
            width: null,
            quantity: null,
            status: true,
            validWeight: null,
            validVolume: null,
            validHeight: null,
            validLenght: null,
            validWidth: null,
            validQuantity: null
        }
    ],
    typeCargo: null,
    resultCalculate: [],
    fullListCalculateResult: [],
    filterDeliveryOption: {
        filterWW: false,
        filterWD: false,
        filterDD: true,
        filterDW: false,
    },
    pickup: false,//Место отправки от двери или от терминала
    delivery: false,//Место доставки до двери или до терминала
    formResultCalculate: false,
    CharacteristicsCargo: {//Категории груза
        dangerous: false,//Опасный груз
        fragile: false,//Хрупкий груз
        wet: false,//Мокрый груз
        valuable: false//Ценный груз
    },
    card: {//Информация о предложениях по самым дешевым и самым быстрым перевозкам
        cheaply: [],//Быстрее
        faster: [],//Дешевле
        showForm: false,//Показывать карточки или нет
    },
    arrangeOrder: false,
}
const CalculateFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_CHEAPLY:
            return {
                ...state,
                card: {
                    ...state.card,
                    cheaply: action.bodyCheaply
                }
            }
        case SEARCH_FASTER:
            return {
                ...state,
                card: {
                    ...state.card,
                    faster: action.bodyFaster,
                    showForm: action.bodyShowForm
                }
            }
        case UPDATE_PICKUP:
            return {
                ...state,
                pickup: action.bodyPickupCargo
            }
        case UPDATE_DELIVERY:
            return {
                ...state,
                delivery: action.bodyDeliveryCargo
            }
        case STATUS_CALCULATE:
            return {
                ...state,
                statusCalculate: action.bodyStatusCalculation,
                formResultCalculate: action.bodyStatusForm
            }
        case UPDATE_WIDTH:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdWidth, "id", {
                    width: action.bodyWidth,
                    validWidth: action.bodyValidWidth
                })
            };
        case STATUS_DETAILED_PARAMETERS:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdStatus, "id", {status: action.bodyStatusParameters})
            }
        case UPDATE_HEIGHT:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdHeight, "id", {
                    height: action.bodyHeight,
                    validHeight: action.bodyValidHeight
                })
            };
        case UPDATE_LENGHT:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdLenght, "id", {
                    lenght: action.bodyLength,
                    validLenght: action.bodyValidLenght
                })
            }
        case UPDATE_WEIGHT:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdWeight, "id", {
                    weight: action.bodyWeight,
                    validWeight: action.bodyValidWeight
                })
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdQuantity, "id", {
                    quantity: action.bodyQuantity,
                    validQuantity: action.bodyValidQuantity
                })
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                comment: action.bodyComment
            };
        case ADD_CARGO:
            return {
                ...state,
                listCargo: [
                    ...state.listCargo, {
                        id: action.bodyIdCargo,
                        weight: null,
                        volume: null,
                        height: null,
                        lenght: null,
                        width: null,
                        quantity: null,
                        status: true,
                        validWeight: null,
                        validVolume: null,
                        validHeight: null,
                        validLenght: null,
                        validWidth: null,
                        validQuantity: null
                    }
                ]
            }
        case DELETE_CARGO:
            return {
                ...state,
                listCargo: action.bodyResultCalculate
            }
        case CLEAR_CARGO:
            return {
                ...state,
                listCargo: action.bodyClearCargo
            }
        case UPDATE_TEXT_SENDING:
            return {
                ...state,
                cityOfDeparture: {
                    listCity: action.bodyListCityDeparture,
                    city: action.bodyCityDeparture,
                    validCity: action.bodyValidCityDeparture
                }
            }
        case UPDATE_TEXT_DESTINATION:
            return {
                ...state,
                cityOfDestination: {
                    listCity: action.bodyListCityDestination,
                    city: action.bodyCityDestination,
                    validCity: action.bodyValidCityDestination
                }
            }
        case UPDATE_VOLUME:
            return {
                ...state,
                listCargo: updateObjectInArray(state.listCargo, action.bodyIdVolume, "id", {
                    volume: action.bodyVolume,
                    validVolume: action.bodyValidVolume
                })
            }
        case UPDATE_DATA:
            return {
                ...state,
                resultCalculate: action.dataBody
            }
        case SEARCH_CITY_DEPARTURE:
            return {
                ...state,
                cityOfDeparture: {
                    listCity: action.bodyListCityDeparture
                }
            }
        case SEARCH_CITY_DESTINATION:
            return {
                ...state,
                cityOfDestination: {
                    listCity: action.bodyListCityDestination
                }
            }
        case ADD_LIST_RESULT:
            return {
                ...state,
                fullListCalculateResult: [
                    ...state.fullListCalculateResult, {
                        id: action.bodyIdResult,
                        imgCompany: action.bodyImgCompany,
                        company: action.bodyCompanyName,
                        tariff: action.bodyTariffName,
                        rating: action.bodyRatingCompany,
                        deliveryTime: action.bodyDeliveryTime,
                        priceBefore: action.bodyPriceBefore,
                        priceAfter: action.bodyPriceAfter,
                        pickup: action.bodyPickup,
                        delivery: action.bodyDelivery
                    }
                ]
            }
        case ADD_FILTER_CALCULATE:
            return {
                ...state,
                resultCalculate: [
                    ...state.resultCalculate, {
                        id: action.bodyIdResult,
                        imgCompany: action.bodyImgCompany,
                        company: action.bodyCompanyName,
                        tariff: action.bodyTariffName,
                        rating: action.bodyRatingCompany,
                        deliveryTime: action.bodyDeliveryTime,
                        priceBefore: action.bodyPriceBefore,
                        priceAfter: action.bodyPriceAfter,
                        pickup: action.bodyPickup,
                        delivery: action.bodyDelivery
                    }
                ]
            }
        case CLEAR_LIST_RESULT:
            return {
                ...state,
                resultCalculate: [],
                fullListCalculateResult: []
            }
        case FILTER_LIST:
            return {
                ...state,
                resultCalculate: action.bodyResultFilter
            }
        case STATUS_FILTER:
            return {
                ...state,
                filterDeliveryOption: {
                    filterWW: action.bodyFilterWW,
                    filterWD: action.bodyFilterWD,
                    filterDD: action.bodyFilterDD,
                    filterDW: action.bodyFilterDW,
                }
            }
        case UPDATE_TYPE_CARGO:
            return {
                ...state,
                typeCargo: action.bodyTypeCargo
            }
        case ARRANGE_ORDER:
            return {
                ...state,
                arrangeOrder: action.bodyArrangeOrder
            }
        default:
            return {...state}
    }
    return state;
};

export const updatePickup = (status) => ({type: UPDATE_PICKUP, bodyPickupCargo: status})
export const updateDelivery = (status) => ({type: UPDATE_DELIVERY, bodyDeliveryCargo: status})
const updateCheaply = (data) => ({type: SEARCH_CHEAPLY, bodyCheaply: data})
const updateFaster = (data, status) => ({type: SEARCH_FASTER, bodyFaster: data, bodyShowForm: status})
const updateWidth = (width, id, valid) => ({
    type: UPDATE_WIDTH,
    bodyWidth: width,
    bodyIdWidth: id,
    bodyValidWidth: valid
});
const updateVolume = (volume, id, valid) => ({
    type: UPDATE_VOLUME,
    bodyVolume: volume,
    bodyIdVolume: id,
    bodyValidVolume: valid
})
const updateHeight = (height, id, valid) => ({
    type: UPDATE_HEIGHT,
    bodyHeight: height,
    bodyIdHeight: id,
    bodyValidHeight: valid
});
const updateLength = (length, id, valid) => ({
    type: UPDATE_LENGHT,
    bodyLength: length,
    bodyIdLenght: id,
    bodyValidLenght: valid
});
const updateWeight = (weight, id, valid) => ({
    type: UPDATE_WEIGHT,
    bodyWeight: weight,
    bodyIdWeight: id,
    bodyValidWeight: valid
});
const updateQuantity = (quantity, id, valid) => ({
    type: UPDATE_QUANTITY,
    bodyQuantity: quantity,
    bodyIdQuantity: id,
    bodyValidQuantity: valid
});
export const updateTypeCargo = (typeCargo) => ({type: UPDATE_TYPE_CARGO, bodyTypeCargo: typeCargo});
const addCargoData = (value) => ({type: ADD_CARGO, bodyIdCargo: value});
const deleteCargo = (value) => ({type: DELETE_CARGO, bodyResultCalculate: value})
export const clearCargo = (value) => ({type: CLEAR_CARGO, bodyClearCargo: value});
const updateStatusCalculation = (status, valueForm) => ({
    type: STATUS_CALCULATE,
    bodyStatusCalculation: status,
    bodyStatusForm: valueForm
});//Изменение статуса идет в данный момент расчет или нет
const addListCalculateResult = (id, img, company, tariff, rating, time, priceBefore, priceAfter, pickup, delivery) => ({
    type: ADD_LIST_RESULT,
    bodyIdResult: id,
    bodyImgCompany: img,
    bodyCompanyName: company,
    bodyTariffName: tariff,
    bodyRatingCompany: rating,
    bodyDeliveryTime: time,
    bodyPriceBefore: priceBefore,
    bodyPriceAfter: priceAfter,
    bodyPickup: pickup,
    bodyDelivery: delivery
});
const addListFilterResult = (id, img, company, tariff, rating, time, priceBefore, priceAfter, pickup, delivery) => ({
    type: ADD_FILTER_CALCULATE,
    bodyIdResult: id,
    bodyImgCompany: img,
    bodyCompanyName: company,
    bodyTariffName: tariff,
    bodyRatingCompany: rating,
    bodyDeliveryTime: time,
    bodyPriceBefore: priceBefore,
    bodyPriceAfter: priceAfter,
    bodyPickup: pickup,
    bodyDelivery: delivery
});
const clearListResult = () => ({type: CLEAR_LIST_RESULT});
const updateCityDepartureInformation = (city, listCity, status) => ({
    type: UPDATE_TEXT_SENDING,
    bodyCityDeparture: city,
    bodyListCityDeparture: listCity,
    bodyValidCityDeparture: status
});//Добавление полной информации о городе отправления груза
const updateCityDestinationInformation = (city, listCity, status) => ({
    type: UPDATE_TEXT_DESTINATION,
    bodyCityDestination: city,
    bodyListCityDestination: listCity,
    bodyValidCityDestination: status
});//Добавление полной информации о городе доставки
const updateListCityDeparture = (list) => ({type: SEARCH_CITY_DEPARTURE, bodyListCityDeparture: list});//Добавление списка поиска городов отправки груза
const updateListCityDestination = (list) => ({type: SEARCH_CITY_DESTINATION, bodyListCityDestination: list});//Добавление списка поиска городов доставки груза
const sortListCalculate = (list) => ({type: FILTER_LIST, bodyResultFilter: list});
const updateArrangeOrder = (status) => ({type: ARRANGE_ORDER, bodyArrangeOrder: status})
/*
Переменные для фильтра по типу доставки:
-WW(склад-склад)
-WD(склад-дверь)
-DD(дверь-дверь)
-DW (дверь-склад)
*/
const statusFilterCalculate = (WW, WD, DD, DW) => ({
    type: STATUS_FILTER,
    bodyFilterWW: WW,
    bodyFilterWD: WD,
    bodyFilterDD: DD,
    bodyFilterDW: DW
})
/*Изменение статуса калькуляции*/
export const statusCalculate = (status) => {
    return (dispatch) => {
        dispatch(updateStatusCalculation(true, true));
        window.location.href = '#calculate'
        setTimeout(() => {
            dispatch(updateStatusCalculation(false, true))
        }, 10000)
    }
}
export const updateStatusParameters = (status, id) => ({
    type: STATUS_DETAILED_PARAMETERS,
    bodyStatusParameters: !status,
    bodyIdStatus: id
});
const updateData = (data) => ({type: UPDATE_DATA, dataBody: data});
/*Добавление груза*/
export const addCargo = (value) => {
    return (dispatch) => {
        dispatch(addCargoData(value + 1));
    }
}
/*Удаление груза*/
export const deleteCargoList = (listCargo, id) => {
    return (dispatch) => {
        for (let i = 0; i < listCargo.length; i++) {
            if (String(listCargo[i].id) === String(id)) {
                listCargo.splice(i, 1)
                dispatch(deleteCargo(listCargo))
            }
        }
    }
}
/*Заполнение поля - ширина*/
export const widthData = (value, id, height, length) => {
    let NewValue = String(value).replace(',', '.');//Заменяет запятую на точку, если пользователь ошибся при заполнении
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(NewValue)) {
        } else {
            if (NewValue.length > 0) {
                dispatch(updateWidth(NewValue, id, true))
                if (height > 0 && length > 0) {
                    let volume = (height * length * NewValue / 1000000).toFixed(3);
                    dispatch(updateVolume(volume, id, true));
                }
            } else {
                dispatch(updateWidth(NewValue, id, false))
            }
        }
    }
};
/*Заполнение поля - вес*/
export const weightData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateWeight(value, id, true))
                : dispatch(updateWeight(value, id, false))
        }
    }
};
/*Заполнение поля - высота*/
export const heightData = (value, id, length, width) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            if (value.length > 0) {
                dispatch(updateHeight(value, id, true))
                if (width > 0 && length > 0) {
                    let volume = (width * length * value / 1000000).toFixed(3);
                    dispatch(updateVolume(volume, id, true));
                }
            } else {
                dispatch(updateHeight(value, id, false))
            }
        }
    }
};
/*Заполнение поля - длина*/
export const lengthData = (value, id, width, height) => {
    let NewValue = String(value).replace(',', '.');
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(NewValue)) {
        } else {
            if (NewValue.length > 0) {
                dispatch(updateLength(NewValue, id, true))
                if (width > 0 && height > 0) {
                    let volume = (width * height * NewValue / 1000000).toFixed(3);
                    dispatch(updateVolume(volume, id, true));
                }
            } else {
                dispatch(updateLength(NewValue, id, false))
            }
        }
    }
};
/*Заполнение поля - количество*/
export const quantityData = (value, id) => {
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            value.length > 0
                ? dispatch(updateQuantity(value, id, true))
                : dispatch(updateQuantity(value, id, false))
        }
    }
};
/*Получение полной информации о городе отправки*/
export const updateCityDeparture = (city, listCity) => {
    return (dispatch) => {
        cityAPI.cityInformation(city).then(response => {
            dispatch(updateCityDepartureInformation(response.data[0], listCity, true));
        }).catch(error => {

        })
    }
}
/*Автокомплит города отправки*/
export const ListCityDeparture = (city) => {
    return (dispatch) => {
        if (city.length >= 3) {
            cityAPI.searchCity(city).then(response => {
                dispatch(updateListCityDeparture(response.data));
            }).catch(error => {
            });
        }
    }
}
/*Получение полной информации о городе отправки*/
export const updateCityDestination = (city, listCity) => {
    return (dispatch) => {
        cityAPI.cityInformation(city).then(response => {
            dispatch(updateCityDestinationInformation(response.data[0], listCity, true));
        }).catch(error => {

        })
    }
}
/*Автокомплит города отправки*/
export const ListCityDestination = (city) => {
    return (dispatch) => {
        if (city.length >= 3) {
            cityAPI.searchCity(city).then(response => {
                dispatch(updateListCityDestination(response.data));
            }).catch(error => {
            });
        }
    }
}
/*Изменения объема груза*/
export const volumeData = (value, id) => {
    let params = (Math.cbrt(value * 1000000, 3));
    return (dispatch) => {
        if (!/^[\d,.]*$/.test(value)) {
        } else {
            if (value.length > 0) {
                dispatch(updateVolume(value, id, true));
                dispatch(updateHeight(params, id, true));
                dispatch(updateWidth(params, id, true));
                dispatch(updateLength(params, id, true));
            } else {
                dispatch(updateVolume(value, id, false));
            }
        }
    }
};
/*Сортировка массива по цене*/
export const updateDataCheaper = (data) => {
    function compareNumbersCheaper(a, b) {
        return a.priceAfter - b.priceAfter;
    }

    return (dispatch) => {
        dispatch(updateData(data.sort(compareNumbersCheaper)));
    }
};
/*Очистка локального state от заполненных грузов*/
export const clearCargoData = () => {
    return (dispatch) => {
        let massCargo = [
            {
                id: 1, weight: null, volume: null,
                height: null, lenght: null, width: null,
                quantity: null, status: true, validWeight: null,
                validVolume: null, validHeight: null, validLenght: null,
                validWidth: null, validQuantity: null
            }
        ]
        dispatch(clearCargo(massCargo));
    }
}
/*Заполнение стандартных габаритов при отправке документов*/
export const autoSizeDoc = (weight) => {
    weight = weight.replace(',', '.');//Заменяет запятую на точку, если пользователь ошибся при заполнении
    return (dispatch) => {
        dispatch(clearCargoData());
        dispatch(lengthData(30, 1, 1, 40));
        dispatch(weightData(weight, 1));
        dispatch(heightData(40, 1, 30, 1));
        dispatch(widthData(1, 1, 40, 30));
        dispatch(quantityData(1, 1));
        dispatch(volumeData(0.001, 1));
    }
}
/*Сортировка Склад-Склад*/
export const warehouse_warehouse = (listTariff) => {
    let sortList = [];
    for (let i = 0; i < listTariff.length; i++) {
        if (String(listTariff[i].pickup) === String(0) && String(listTariff[i].delivery) === String(0)) {
            sortList.push(listTariff[i]);
        }
    }
    return (dispatch) => {
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(true, false, false, false));
    }
}
/*Сортировка Склад-Дверь*/
export const warehouse_door = (listTariff) => {
    let sortList = [];
    for (let i = 0; i < listTariff.length; i++) {
        if (String(listTariff[i].pickup) === String(0) && String(listTariff[i].delivery) === String(1)) {
            sortList.push(listTariff[i]);
        }
    }
    return (dispatch) => {
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(false, true, false, false));
    }
}
/*Сортировка Дверь-Дверь*/
export const door_door = (listTariff) => {
    let sortList = [];
    for (let i = 0; i < listTariff.length; i++) {
        if (String(listTariff[i].pickup) === String(1) && String(listTariff[i].delivery) === String(1)) {
            sortList.push(listTariff[i]);
        }
    }
    return (dispatch) => {
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(false, false, true, false));
    }
}
/*Сортировка дверь-склад*/
export const door_warehouse = (listTariff) => {
    let sortList = [];
    for (let i = 0; i < listTariff.length; i++) {
        if (String(listTariff[i].pickup) === String(1) && String(listTariff[i].delivery) === String(0)) {
            sortList.push(listTariff[i]);
        }
    }
    return (dispatch) => {
        dispatch(sortListCalculate(sortList));
        dispatch(statusFilterCalculate(false, false, false, true));
    }
}
/*Стандартные габариты у документов*/
export const defaultParams = () => {
    return (dispatch) => {
        dispatch();
        dispatch(updateLength(25));
        dispatch();
        dispatch();
    }
}
/*Отпарвка грузов и расчет тарифов*/
export const calculateTariff = (cargo, type, idCityDeparture, idCityDestination, pickup, delivery) => {
    return (dispatch) => {
        for (let i = 0; i < cargo.length; i++) {
            if (cargo[i].validHeight && cargo[i].validWidth && cargo[i].validLenght && cargo[i].validQuantity && cargo[i].validVolume && cargo[i].validWeight && idCityDestination.length !== 0 && idCityDeparture.id !== undefined) {
                if (i === cargo.length - 1) {
                    dispatch(statusCalculate(true));
                    let idCargo = [];
                    for (let i = 0; i < cargo.length; i++) {
                        calculateAPI.addCargo(null,
                            type,
                            cargo[i].height, cargo[i].lenght,
                            cargo[i].width, cargo[i].weight,
                            cargo[i].volume, '',
                            cargo[i].quantity).then(response => {
                            if ((cargo.length - 1) === i) {
                                idCargo.push(response.data.id);
                                calculateAPI.calculate(idCargo, idCityDeparture.id, idCityDestination.id, pickup, delivery).then(response => {
                                    dispatch(clearListResult());
                                    dispatch(statusFilterCalculate(false, false, true, false));
                                    let newArr = [];
                                    let chatSocket = new WebSocket(
                                        'ws://67.205.165.172:8002/ws/calculation/?key=' + response.data.id);
                                    chatSocket.onmessage = function (e) {
                                        let data = JSON.parse(e.data);
                                        let message = JSON.parse(data['message']);
                                        newArr.push(message);
                                        dispatch(updateCheaply([]))
                                        dispatch(updateFaster([], false))
                                        if (message.calculation === true) {
                                            dispatch(cheaplyAndFaster(newArr));
                                        } else {
                                            dispatch(addListFilterResult(
                                                message.id,
                                                'https://kenguruexpress.ru/images/services/dimex.png',
                                                message.operator,
                                                message.title,
                                                message.rating,
                                                message.term,
                                                message.common_price,
                                                message.price,
                                                message.pickup,
                                                message.delivery
                                            ))
                                        }
                                        // if (String(message.pickup) === String(1) && String(message.delivery) === String(1)) {
                                        //     dispatch(addListFilterResult(
                                        //         message.id,
                                        //         'https://kenguruexpress.ru/images/services/dimex.png',
                                        //         message.operator,
                                        //         message.title,
                                        //         message.rating,
                                        //         message.term,
                                        //         message.common_price,
                                        //         message.price,
                                        //         message.pickup,
                                        //         message.delivery
                                        //     ))
                                        // }
                                        // dispatch(addListCalculateResult(
                                        //     message.id,
                                        //     'https://kenguruexpress.ru/images/services/dimex.png',
                                        //     message.operator,
                                        //     message.title,
                                        //     message.rating,
                                        //     message.term,
                                        //     message.common_price,
                                        //     message.price,
                                        //     message.pickup,
                                        //     message.delivery
                                        // ))
                                    };
                                    chatSocket.onclose = function (e) {
                                        console.error('Chat socket closed unexpectedly');
                                    };
                                }).catch(error => {
                                })
                            } else idCargo.push(response.data.id);
                        }).catch(error => {
                        });
                    }
                }
            }
            if (!cargo[i].validWeight) {
                dispatch(updateWeight('', cargo[i].id, false));
            }
            if (!cargo[i].validHeight) {
                dispatch(updateHeight('', cargo[i].id, false));
            }
            if (!cargo[i].validVolume) {
                dispatch(updateVolume('', cargo[i].id, false));
            }
            if (!cargo[i].validWidth) {
                dispatch(updateWidth('', cargo[i].id, false));
            }
            if (!cargo[i].validLenght) {
                dispatch(updateLength('', cargo[i].id, false));
            }
            if (!cargo[i].validQuantity) {
                dispatch(updateQuantity('', cargo[i].id, false));
            }
            if (idCityDeparture.id === undefined) {
                dispatch(updateCityDepartureInformation('', [], false));
            }
            if (idCityDestination.length === 0) {
                dispatch(updateCityDestinationInformation('', [], false));
            }
        }
    }
}
/*Сортировка массива по времени доставки*/
export const updateDataFaster = (data) => {
    function compareNumbersFaster(a, b) {
        return a.deliveryTime - b.deliveryTime;
    }

    return (dispatch) => {
        dispatch(updateData(data.sort(compareNumbersFaster)));
    }
};
/*Поиск самой дешевой и самой быстрой доставки*/
const cheaplyAndFaster = (listResultCalculate) => {
    function compareCheaply(a, b) {
        return a.price - b.price;
    }

    function compareFaster(a, b) {
        return a.term - b.term;
    }

    return (dispatch) => {
        dispatch(updateCheaply(listResultCalculate.sort(compareCheaply)[0]))
        dispatch(updateFaster(listResultCalculate.sort(compareFaster)[0], true))
    }
}
/*Обработка нажатия заказать*/
export const clickArrangeOrder = (infoCitySender, infoCityRecipient, infoTK) => {
    return (dispatch) => {
        dispatch(updateLegalRecipient(false));
        dispatch(addAddressBookSender(infoCitySender.locality));
        dispatch(addAddressBookRecipient(infoCityRecipient.locality));
        dispatch(addTerminal(infoCitySender.id, infoCityRecipient.id, infoTK));
        dispatch(updateCitySender(infoCitySender));//Добавляет информацию о городе отправки в orderReducer
        dispatch(updateCityRecipient(infoCityRecipient));//Добавляет информацию о городе доставки в orderReducer
        dispatch(updateInformationCompany(infoTK));//Добавляет информацию о транспортной компании в orderReducer
        setTimeout(() => {
            dispatch(updateArrangeOrder(true))
        }, 1000)
        setTimeout(() => {
            dispatch(updateArrangeOrder(false))
        }, 4000)

    }
}
export default CalculateFormReducer;