import {ProfileAPI, userAPI} from "../API/api";
import {acceptFollow, setInFollowing} from "./userReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
let initialState = {
    postData: [
        {id: 1, message: 'Hi Lerill', like: 10},
        {id: 1, message: 'sdlfkkhfshlkj', like: 5}
    ],
    profile: null,
    newPostText: '511',
    status: ''
};
const ContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: 6, message: state.newPostText, like: 5}],
                profile: null
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.body
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};
export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateNewPostActionCreator = (newPostText) => {
    return {type: UPDATE_NEW_POST_TEXT, body: newPostText}
};
export const setProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
};
// thunk функция
export const addProfileData = (userID) => {
    return (dispatch) => {
        if (!userID) {
            userID = 2;
        }
        userAPI.getProfileData(userID).then(response => {
            dispatch(setProfile(response.data));
        });
    }
};
export const getStatus = (userID) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userID).then(response => {
            dispatch(setStatus(response.data));
        });
    }
};
export const putStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.putStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
};
export default ContentReducer;