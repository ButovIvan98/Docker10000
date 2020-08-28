const ADD_SMS = 'ADD-SMS';
const UPDATE_NEW_SMS_TEXT = 'UPDATE-NEW-SMS-TEXT';
let initialState = {
    dialogsData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Gromik'}
    ],
    messagesData: [
        {id: 1, message: 'Hello, Ivan!!'},
        {id: 2, message: 'My name Kirill!!!'},
        {id: 3, message: 'Idi naxyi'}
    ],
    newMessagePost: 'grom'
};
const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SMS:
            return {
                ...state,
                newMessagePost: '',
                messagesData: [...state.messagesData, {id: 4, message: state.newMessagePost}]
            };
        case UPDATE_NEW_SMS_TEXT:
            return {
                ...state,
                newMessagePost: action.body
            };
        // let stateCopy={...state};
        // stateCopy.newMessagePost = action.body;
        // return stateCopy;

        default:
            return state;
    }
}
export const addSmsActionCreator = () => {
    return {type: ADD_SMS}
}
export const updateNewSmsActionCreator = (newText) => {
    return {type: UPDATE_NEW_SMS_TEXT, body: newText}
}
export default DialogsReducer;