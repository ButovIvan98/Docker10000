let UPDATE_INPUT_COMMENT = 'UPDATE_INPUT_COMMENT';
let OPEN

let initialState = {
    listTK: [
        {id: '1', img: 'https://kenguruexpress.ru/images/services/dpd.png'},
        {id: '2', img: 'https://kenguruexpress.ru/images/services/cdek.png', to: '/footer/transportCompany/cdek'},
        {id: '3', img: 'https://kenguruexpress.ru/images/services/pecom.jpg', to: '/footer/transportCompany/pecom'},
        {id: '4', img: 'https://kenguruexpress.ru/images/services/energy.jpg', to: '/footer/transportCompany/energy'},
        {id: '5', img: 'https://kenguruexpress.ru/images/services/jde.png', to: '/footer/transportCompany/jde'}
    ]
};

const TransportCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT_COMMENT:
            return {
                ...state,
                newComment: action.bodyComment
            }
        default:
            return {...state}
    }
};

export const updateInputCommnent = (textComment) => ({type: UPDATE_INPUT_COMMENT, bodyComment: textComment});

export default TransportCompanyReducer;