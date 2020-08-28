import {applyMiddleware, combineReducers, createStore} from "redux";
import ContentReducer from "./content-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./headerReducer";
import UserReducer from "./userReducer";
import AuthorezetionReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import AddressReducer from "./addressReducer";
import RegistrationReducer from "./registrationReducer";
import TransportCompanyReducer from "./transportCompanyReducer";
import ProfileTransportCompanyReducer from "./profileTransportCompanyReducer";
import MyShipmentsReducer from "./myShipmentsReducer";
import MyShipmentsInformationReducer from "./myShipmentsInformationReducer";
import CalculateFormReducer from "./calculateFormReducer";
import ContactReducer from "./contactReducer";
import FeedbackReducer from "./feedbackReducer";
import MyAddressReducer from "./myAddressReducer";
import PersonalAccountReducer from "./personalAccountReducer";
import SettingReducer from "./settingReducer";
import AddCompanyReducer from "./addCompanyReducer";
import OrderReducer from "./orderReducer";

let reducers = combineReducers({
    ProfilePage: ContentReducer,
    messagePage: DialogsReducer,
    Sidebar: SidebarReducer,
    UsersPage: UserReducer,
    AuthPage: AuthorezetionReducer,
    Address: AddressReducer,
    Registration: RegistrationReducer,
    TransportCompany: TransportCompanyReducer,
    ProfileCompanyPage: ProfileTransportCompanyReducer,
    MyShipmentsPage: MyShipmentsReducer,
    MyShipmentsInformationReducerPage: MyShipmentsInformationReducer,
    CalculateFormPage: CalculateFormReducer,
    ContactPage: ContactReducer,
    FeedbackForm: FeedbackReducer,
    AddressPage: MyAddressReducer,
    PersonalAccount:PersonalAccountReducer,
    Setting:SettingReducer,
    AddCompany:AddCompanyReducer,//Редюсер добавления компании в личный кабинет
    Order:OrderReducer,//Редюсер для работы с формой заказа
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;