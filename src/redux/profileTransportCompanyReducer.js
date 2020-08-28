let UPDATE_COMMENT_TEXT = 'UPDATE_COMMENT_TEXT';
let UPDATE_RAITING = 'UPDATE_RAITING';
let ADD_COMMENT = 'ADD_COMMENT';
let VALID_TEXT = 'VALID_TEXT';
let VALID_RATING = 'VALI_RATING';
let initialState = {
    dpd: [
        {
            id: '1',
            name: 'dpd',
            logo: 'https://kenguruexpress.ru/images/services/dpd.png',
            description: 'DPD в России является признанным лидером российского рынка экспресс-доставки посылок и грузов и предлагает сервис на уровне современных мировых стандартов. DPD в России оказывает тысячам клиентам полный комплекс транспортно-логистических услуг и доставляет по всей территории России.',
            rating: '5',
            age: '22',
        }
    ],
    cdek: [
        {
            id: '2',
            name: 'dpd',
            logo: 'https://kenguruexpress.ru/images/services/dpd.png',
            description: 'DPD в России является признанным лидером российского рынка экспресс-доставки посылок и грузов и предлагает сервис на уровне современных мировых стандартов. DPD в России оказывает тысячам клиентам полный комплекс транспортно-логистических услуг и доставляет по всей территории России.',
            rating: '5',
            age: '22',
        }
    ],
    pecom: [
        {
            id: '13',
            name: 'dpd',
            logo: 'https://kenguruexpress.ru/images/services/dpd.png',
            description: 'DPD в России является признанным лидером российского рынка экспресс-доставки посылок и грузов и предлагает сервис на уровне современных мировых стандартов. DPD в России оказывает тысячам клиентам полный комплекс транспортно-логистических услуг и доставляет по всей территории России.',
            rating: '5',
            age: '22',
        }
    ],
    comment: [
        {
            id: '1',
            sender: 'Максим В.',
            rating: '5',
            dateAndTime: '28.01.2019 18:47',
            text: 'Супер.Все быстро и сервис классный.'
        },
        {
            id: '2',
            sender: 'Кирилл С.',
            rating: '5',
            dateAndTime: '28.01.2019 19:47',
            text: 'Все супер!'
        }
    ],
    newComment: '',
    nameUser: '',
    idUser: '',
    rating: '',
    validComment: null,
    validRating: null,
    commentBorder: '1px solid #E3E3E3',
    ratingBorder: '0'
};

const ProfileTransportCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT_TEXT:
            return {
                ...state,
                newComment: action.textBody
            };
        case UPDATE_RAITING:
            return {
                ...state,
                rating: action.bodyRating
            };
        case ADD_COMMENT:

            return {
                ...state,
                comment: [...state.comment, {
                    id: 4,
                    sender: 'Иван Б.',
                    dateAndTime: action.bodyDate,
                    rating: state.rating,
                    text: state.newComment
                }]
            };
        case VALID_TEXT:
            return {
                ...state,
                validComment: action.bodyValidComment,
                commentBorder: action.bodyValidCommentColor
            }
        case VALID_RATING:
            return {
                ...state,
                validRating: action.bodyValidRating,
                ratingBorder: action.bodyValidRatingColor
            }
        default:
            return {
                ...state
            }
    }
};

export const updateTextComment = (text) => ({type: UPDATE_COMMENT_TEXT, textBody: text});
export const updateRaitingComment = (rating) => ({type: UPDATE_RAITING, bodyRating: rating});
export const addComment = (date) => ({type: ADD_COMMENT, bodyDate: date});
export const validComment = (color, value) => ({
    type: VALID_TEXT,
    bodyValidCommentColor: color,
    bodyValidComment: value
});
export const validRating = (color, value) => ({
    type: VALID_RATING,
    bodyValidRatingColor: color,
    bodyValidRating: value
});


export const validText = (validText) => {
    return (dispatch) => {
        if (validText.length <= 20) {
            dispatch(validComment('1px solid red', 'false'));
        } else {
            dispatch(validComment('1px solid #E3E3E3', 'true'))
        }
    }
}
export const validStar = (validStar) => {
    return (dispatch) => {
        if (validStar <= 0) {
            dispatch(validRating('1px solid red', 'false'));
        } else {
            dispatch(validRating('0', 'true'))
        }
    }
}
export const addComments = (rating, text, validText, validRatingStar) => {
    return (dispatch) => {
        if (text.length < 20) {
            dispatch(validComment('1px solid red', 'false'))
        } else if (rating <= 0 || rating === '') {
            dispatch(validRating('1px solid red', 'false'))
        } else if (validRatingStar && validText) {

            let data = new Date();

            // let Year = Data.getFullYear();
            // let Month = (Data.getMonth() + 1);
            // let DateToday = Data.getDate();
            let Hour = data.getHours();
            let Minutes = data.getMinutes();
            // let Seconds = data.getSeconds();
            let date = (' ' + data.toLocaleDateString() + ' ' + Hour + ':' + Minutes)
            dispatch(addComment(date));
        }
    }
}

export default ProfileTransportCompanyReducer;