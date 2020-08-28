import classNamees from "../components/header/header.module.css";
import ContentReducer from "./content-reducer";
import DialogsReducer from "./dialogs-reducer";
import SaidbarReducer from "./headerReducer";

let rerenderEntireTree = () => {
    console.log('ffffff');
}
let store =
    {
        _state: {
            sidebar: {
                friends: {
                    friend: [
                        {id: 1, name: 'Marina'},
                        {id: 2, name: 'Sveta'},
                        {id: 3, name: 'Pasha'}
                    ]
                },
                navigations: {
                    navigation: [
                        {id: 'profile', name: 'Profile', active: classNamees.active},
                        {id: 'dialog', name: 'Dialog', active: classNamees.active},
                        {id: 'news', name: 'News', active: classNamees.active},
                        {id: 'music', name: 'Music', active: classNamees.active},
                        {id: 'setting', name: 'Setting', active: classNamees.active},
                    ]
                }
            },
            profilePage: {
                postData: [
                    {id: 1, message: 'Hi Lerill', like: 10},
                    {id: 1, message: 'sdlfkkhfshlkj', like: 5}
                ],
                newPostText: '511'
            },
            messagePage: {
                dialogsData: [
                    {id: 1, name: 'Ivan'},
                    {id: 2, name: 'Dima'},
                    {id: 3, name: 'Gromik'}
                ],
                newMessagePost: 'grom',
                messagesData: [
                    {id: 1, message: 'Hello, Ivan!!'},
                    {id: 2, message: 'My name Kirill!!!'},
                    {id: 3, message: 'Idi naxyi'}
                ]
            }
        },
        getState() {
            return this._state;
        },
        rerenderEntireTree() {
            console.log('ffffff');
        },
        subscribe(observer) {
            this.rerenderEntireTree = observer;
        },
        dispatch(action) {

            this._state.profilePage = ContentReducer(this._state.profilePage, action);
            this._state.messagePage = DialogsReducer(this._state.messagePage, action);
            this._state.sidedbar = SaidbarReducer(this._state.sidebar, action);
            this.rerenderEntireTree(this._state);

        }
    };


export default store;
window.store = store;