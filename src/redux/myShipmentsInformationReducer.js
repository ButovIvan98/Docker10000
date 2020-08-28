let initialState = {
    price: '247',
    status: 'Рассматривается',
    colorStatus: 'orange',
    invoiceNumber: '65445545654',
    volume: '10',
    weight: '3',
    photo: 'https://kenguruexpress.ru/images/services/dpd.png',
    dateOrder: '2019-03-20',
    dateShipment: '2019-05-21',
    companyShipment: 'ООО"СК-Первый"',
    contactPersonShipment: 'Иван Юрьевич Б.',
    phoneShipment: '89994768392',
    addressShipment: 'г. Новосибирск, ул.Горморг 213, кв./оф. 213',
    commentShipment: '----------',
    dateRecipient: '2019-04-02',
    companyRecipient: 'ООО"Газпром"',
    contactPersonRecipient: 'Кирилл Евгеньевич Саньков',
    phoneRecipient: '8-999-476-83-92',
    addressRecipient: 'г.Барнаул ул.Некрасова 41',
    commentRecipient: '----------',
    tracking:[
        {id:'0',date:'24 июля 2019, 14:37',title:'Заказ принят. Идет обработка заказа', status:''},
        {id:'1',date:'26 июля 2019, 14:37',title:'Заказ на погрузке. Идет регистрация товара.'},
        {id:'2',date:'28 июля 2019, 14:37',title:'Заказ пересек границу с Алтайским краем.'},
        {id:'3',date:'30 июля 2019, 14:37',title:'Доставлено в Барнаул.'},
    ]
};
const MyShipmentsInformationReducer = (state = initialState, action) => {
    return state;
}
export default MyShipmentsInformationReducer;