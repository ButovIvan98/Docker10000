const ADD_STATUS_TRUE = 'ADD_STATUS_TRUE';
const ADD_STATUS_FALSE = 'ADD_STATUS_FALSE';
const UPDATE_TEXT_INPUT_COUNTRY = 'UPDATE_TEXT_INPUT_COUNTRY';//Страна
const UPDATE_TEXT_INPUT_CITY = 'UPDATE_TEXT_INPUT_CITY';//Город
const UPDATE_TEXT_INPUT_STREET = 'UPDATE_TEXT_INPUT_STREET';//Улица
const UPDATE_TEXT_INPUT_HOUSE = 'UPDATE_TEXT_INPUT_HOUSE';//Дом, корпус
const UPDATE_TEXT_INPUT_FLAT = 'UPDATE_TEXT_INPUT_FLAT';//Квартира/Офис
const UPDATE_TEXT_INPUT_INDEX = 'UPDATE_TEXT_INPUT_INDEX';//Индекс

const initialState = {
    country: '',
    countryValid: false,
    city: 'Барнаул',
    cityValid: false,
    street: 'Баварина',
    streetValid: false,
    house: '2',
    houseValid: false,
    flat: '900',
    flatValid: false,
    index: '658666',
    indexValid: false,
};
const AddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_INPUT_COUNTRY:
            return {
                ...state,
                country: action.bodyCountry
            };
        case UPDATE_TEXT_INPUT_CITY:
            return {
                ...state,
                city: action.bodyCity
            };
        case UPDATE_TEXT_INPUT_STREET:
            return {
                ...state,
                street: action.bodyStreet
            };
        case UPDATE_TEXT_INPUT_HOUSE:
            return {
                ...state,
                house: action.bodyHouse
            };
        case UPDATE_TEXT_INPUT_FLAT:
            return {
                ...state,
                flat: action.bodyFlat
            };
        case UPDATE_TEXT_INPUT_INDEX:
            return {
                ...state,
                index: action.bodyIndex
            };
        default:
            return state;
    }
};

// export const getStatusTrue = () => ({type:ADD_STATUS_TRUE});
// export const getStatusFalse = () => ({type:ADD_STATUS_FALSE});
export const updateTextCountry = (country) => ({type: UPDATE_TEXT_INPUT_COUNTRY, bodyCountry: country});
export const updateTextCity = (city) => ({type: UPDATE_TEXT_INPUT_CITY, bodyCity: city});
export const updateTextStreet = (street) => ({type: UPDATE_TEXT_INPUT_STREET, bodyStreet: street});
export const updateTextHouse = (house) => ({type: UPDATE_TEXT_INPUT_HOUSE, bodyHouse: house});
export const updateTextFlat = (flat) => ({type: UPDATE_TEXT_INPUT_FLAT, bodyFlat: flat});
export const updateTextIndex = (index) => ({type: UPDATE_TEXT_INPUT_INDEX, bodyIndex: index});


export const ValidCountry = (text) => {

    if (initialState.country !== '') {
        return (dispatch) => {
            dispatch(updateTextCountry())
        }
    } else {

    }
}
// export const UpdateStatusTrue=()=>{
//     return(dispatch)=>{
//
//         dispatch(getStatusTrue());
//     }
// };
// export const UpdateStatusFalse=()=>{
//     return(dispatch)=>{
//         debugger
//         dispatch(getStatusFalse());
//     }
// };
export default AddressReducer;