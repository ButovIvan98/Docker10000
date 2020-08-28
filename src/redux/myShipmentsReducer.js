let initialState = {
    list: [
        {
            id: '1',
            color: 'green',
            sender: 'Сергей Петрович.',
            sendingCity: 'Новосибирск',
            status: 'Доставлено',
            recipient: 'Константин Михайлович',
            recipientCity: 'Барнаул',
            dateOrder: '2020-04-16',
            numberInvoice: '9849849852',
            price: '890',
            transportCompany: 'CDEK',
            tariff: 'Online Express'
        },

    ],
}
const MyShipmentsReducer = (state = initialState, action) => {
    return state;
}
export default MyShipmentsReducer;