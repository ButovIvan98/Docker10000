const UPDATE_SURNAME = 'UPDATE_SURNAME';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_MIDDLE_NAME = 'UPDATE_MIDDLE_NAME';
const UPDATE_PHONE = 'UPDATE_PHONE';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_NEW_PASSWORD = 'UPDATE_NEW_PASSWORD';

let initialState = {
    surnameUser: '',
    nameUser: '',
    middleName: '',
    phoneUser: '',
    emailUser: '',
    passwordUser: '',
    newPasswordUser: '',

};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SURNAME:
            return {
                ...state,
                surnameUser: action.surnameBody
            }
        case UPDATE_NAME:
            return {
                ...state,
                nameUser: action.nameBody
            };
        case UPDATE_MIDDLE_NAME:
            return {
                ...state,
                middleName: action.middleNameBody
            };
        case UPDATE_PHONE:
            return {
                ...state,
                phoneUser: action.phoneBody
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                emailUser: action.emailBody
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                passwordUser: action.passwordBody
            };
        case UPDATE_NEW_PASSWORD:
            return {
                ...state,
                newPasswordUser: action.newPasswordBody
            };
        default:
            return {...state}


    }
}
export default UserReducer