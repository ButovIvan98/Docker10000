const CLICK_DEBT = 'CLICK_DEBT';
const CLICK_AMOUNT = 'CLICK_AMOUNT';
const CLICK_COUNT = 'CLICK_COUNT';

let initialState = {
    order:180,
    amount:10000,
    debt:19000,
    listDebt:[
        {id:1, nameScore:'11.04.2019', nameCompany:'ООО"Рога и копыта"', dateStart:'21.01.2020', dateEnd:'21.02.2020', order:'58', amount:'478244'},
        {id:2, nameScore:'11.04.2019', nameCompany:'ООО"Рога и копыта"', dateStart:'21.01.2020', dateEnd:'21.02.2020', order:'58', amount:'478244'},
        {id:3, nameScore:'11.04.2019', nameCompany:'ООО"Рога и копыта"', dateStart:'21.01.2020', dateEnd:'21.02.2020', order:'58', amount:'478244'},
    ],/*Список задолжников*/
    deliveryStatus:[
        {id:0, name:'В обработке', count:180},
        {id:1, name:'В пути', count:368},
        {id:2, name:'Доставлено', count:1846},
    ],
    countOrder:[
        {id:0, month:'Январь', count: 47},
        {id:1, month: 'Февраль', count: 179},
        {id:2, month: 'Март', count: 98},
        {id:3, month: 'Апрель', count: 108},
        {id:4, month: 'Май', count: 718},
        {id:5, month: 'Июнь', count: 135},
        {id:6, month: 'Июль', count: 69},
        {id:7, month: 'Август', count: 58},
        {id:8, month: 'Сентябрь', count: 879},
        {id:9, month: 'Октябрь', count: 156},
        {id:10, month: 'Ноябрь', count: 368},
        {id:11, month: 'Декабрь', count: 542},
    ],
    amountOrder:[
        {id:0, month:'Январь', sum: 47000},
        {id:1, month: 'Февраль', sum: 179000},
        {id:2, month: 'Март', sum: 98000},
        {id:3, month: 'Апрель', sum: 108000},
        {id:4, month: 'Май', sum: 718000},
        {id:5, month: 'Июнь', sum: 135000},
        {id:6, month: 'Июль', sum: 69000},
        {id:7, month: 'Август', sum: 58000},
        {id:8, month: 'Сентябрь', sum: 879000},
        {id:9, month: 'Октябрь', sum: 156000},
        {id:10, month: 'Ноябрь', sum: 368000},
        {id:11, month: 'Декабрь', sum: 542000},
    ],
    nameUser:'Butov Ivan',
    fotoUser:'http://fzadmin-angular.fzthemes.site/assets/images/user-profile.webp',
    myCompany:[
        {id:0, preloader:'https://loremflickr.com/g/320/240/city', logo:'https://loremflickr.com/g/320/240/company',nameCompany:'Convoy Trans', position:'Директор', orderCompany:1000, amountCompany:36000},
        {id:1, preloader:'https://loremflickr.com/g/320/240/city', logo:'https://loremflickr.com/g/320/240/company',nameCompany:'Convoy Trans', position:'Директор', orderCompany:1000, amountCompany:36000},
        {id:2, preloader:'https://loremflickr.com/g/320/240/city', logo:'https://loremflickr.com/g/320/240/company',nameCompany:'Convoy Trans', position:'Директор', orderCompany:1000, amountCompany:36000},
        ],
    statusDebt:false,
    statusAmount:false,
    statusCount:false,

};
const PersonalAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_AMOUNT:
            return {
                ...state,
                statusAmount: action.bodyStatusAmount,
                statusCount: false,
                statusDebt: false
            }
        case CLICK_COUNT:
            return{
                ...state,
                statusCount: action.bodyStatusCount,
                statusDebt: false,
                statusAmount: false
            }
        case CLICK_DEBT:
            return {
                ...state,
                statusDebt: action.bodyStatusDebt,
                statusCount: false,
                statusAmount: false
            }
        default:
            return state;
    }
}

export const statusAmount = (status) => ({type: CLICK_AMOUNT, bodyStatusAmount: !status});
export const statusCount = (status) => ({type: CLICK_COUNT, bodyStatusCount: !status});
export const statusDebt = (status) => ({type: CLICK_DEBT, bodyStatusDebt: !status});

export default PersonalAccountReducer;