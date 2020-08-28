import React from 'react';
import classes from './index.module.css'
import { Route, Router, Switch } from "react-router-dom";
import ExportTransportCompany from "./components/footer/transportCompany/transportCompanyContainer";
import ExportProfileTransportCompany from "./components/footer/transportCompany/profileCompany/profileCompanyContainer";
import ExportMyShipmentsContainer from "./components/express/myShipments/myShipmentsContainer";
import ExportMyShipmentsInformationContainer from "./components/express/myShipments/myShipmentsInformation/myShipmentsInformationContainer";
import RegistrationContainerExport from "./components/authorization/registrationUser/registrationContainer";
import { ExportReloadPasswordContainer } from "./components/authorization/reloadPassword/reloadPasswordContainer";
import ExportContactContainer from './components/footer/contacts/contactsContainer';
import ExportWebsitePlaginContainer from './components/footer/websitePlagin/websitePlaginContainer';
import HeaderContainer from "./components/header/headerСontainer";
import AuthorizationContainerExport from "./components/authorization/authorizationUser/authorizationContainer";
import ExportMyAddressContainer from "./components/express/myAddress/myAddressContainer";
import PersonalAccountContainerExport from "./components/express/personalAccount/personalAccountContainer";
import ExportSettingContainer from "./components/express/personalAccount/setting/settingContainer";
import ExportConfirmationEmailContainer
    from "./components/authorization/confirmationEmail/confirmationEmailContainer";
import Footer from './components/footer/footer';
import AboutMe from "./components/footer/aboutMe/aboutMe";
import PolicyAndPrivacy from "./components/footer/policyAndPrivacy/policyAndPrivacy";
import PublicOffer from "./components/footer/publicOffer/publicOffer";
import PaymentMethod from "./components/footer/PaymentMethod/paymentMethod";
import AddingDocuments from "./components/express/addCompany/addingDocuments/addingDocuments";
import Done from "./components/express/addCompany/addingDocuments/done/done";
import Account from "./components/express/myPayment/account/account";
import Error404 from "./components/error404/error404";
import Order from "./components/express/order/order";
import OrderSent from "./components/express/order/orderSent/orderSent";
import Invoice from "./components/documents/invoice";
import MainPage from "./components/express/main-page/mainPage";
import AddAddress from "./components/express/myAddress/add_address/add_address";
import MyPayment from "./components/express/myPayment/myPayment";
import AddCompany from "./components/express/addCompany/addCompany";
import Plan from "./components/plan";
import { Alert } from 'bootstrap-4-react';
import ResetPasswordContainerExport from "./components/authorization/resetPassword/resetPassworsContainer";
import AddressContainerExport from "./components/express/myAddress/add_address/add_addressContainer";
import ExportAddCompanyContainer from "./components/express/addCompany/addCompanyContainer";
import ExportOrderContainer from "./components/express/order/orderContainer";
//нельзя удалять полетит бутстрап

const App = (props) => {
    return (
        <div className={'container-fluid pl-0 pr-0' + ' ' + classes.main}>
            <div className={'row mr-0 ml-0'}>
                <div className={'col-12 pr-0 pl-0'}>
                    <HeaderContainer />
                </div>
                <div className={'col-12 pl-0 pr-0'}>
                    <div className={classes.containerMain}>
                            {
                                props.auth.isAuth
                                    ?
                                    <Switch>
                                        <Route exact path='/'  render={() => <MainPage />}/>
                                        <Route exact path='/myAddress' render={() => <ExportMyAddressContainer />} />
                                        <Route exact path='/myShipments' render={() => <ExportMyShipmentsContainer />} />
                                        <Route exact path='/login' render={() => <AuthorizationContainerExport />} />
                                        <Route exact path={'/aboutMe'} render={() => <AboutMe />} />
                                        <Route exact path={'/contact'} render={() => <ExportContactContainer />} />
                                        <Route exact path={'/policy'} render={() => <PolicyAndPrivacy />} />
                                        <Route exact path={'/publicOffer'} render={() => <PublicOffer />} />
                                        <Route exact path={'/paymentMethod'} render={() => <PaymentMethod />} />
                                        <Route exact path={'/transportCompany'} render={() => <ExportTransportCompany />} />
                                        <Route exact path={'/profileCompany/'} render={() => <ExportProfileTransportCompany />} />
                                        <Route exact path={'/1'} render={() => <ExportMyShipmentsInformationContainer />} />
                                        <Route exact path={'/registration'} render={() => <RegistrationContainerExport />} />
                                        <Route exact path={'/reloadPassword'} render={() => <ExportReloadPasswordContainer />} />
                                        <Route exact path={'/websitePlagin'} render={()=> <ExportWebsitePlaginContainer />} />
                                        <Route exact path={'/addAddress'} render={()=><AddressContainerExport/>}/>
                                        <Route exact path={'/myPayment'} render={()=><MyPayment/>}/>
                                        <Route exact path={'/addCompany'} render={()=><ExportAddCompanyContainer/>}/>
                                        <Route exact path={'/plan'} render={()=><Plan/>}/>
                                        <Route exact path={'/personalAccount'} render={()=><PersonalAccountContainerExport/>}/>
                                        <Route path={'/setting'} render={()=><ExportSettingContainer/>}/>
                                        <Route exact path={'/addCompany/loadingFile'} render={()=><AddingDocuments/>} />
                                        <Route exact path={'/addCompany/loadingFile/done'} render={()=><Done/>}/>
                                        <Route exact path={'/myPayment/account'} render={()=><Account/>}/>
                                        <Route path={'/order/'} render={()=><ExportOrderContainer/>}/>
                                        <Route exact path={'/order/orderSent'} render={()=><OrderSent/>}/>
                                        <Route exact path={'/invoice'} render={()=><Invoice/>}/>
                                        <Route render={()=><Error404/>}/>
                                    </Switch>
                                    :
                                    <Switch>
                                        <Route exact path='/'  render={() => <MainPage />}/>
                                        <Route exact path='/login' render={() => <AuthorizationContainerExport />} />
                                        <Route exact path={'/aboutMe'} render={() => <AboutMe />} />
                                        <Route exact path={'/contact'} render={() => <ExportContactContainer />} />
                                        <Route exact path={'/policy'} render={() => <PolicyAndPrivacy />} />
                                        <Route exact path={'/publicOffer'} render={() => <PublicOffer />} />
                                        <Route exact path={'/paymentMethod'} render={() => <PaymentMethod />} />
                                        <Route exact path={'/1'} render={() => <ExportMyShipmentsInformationContainer />} />
                                        <Route exact path={'/registration'} render={() => <RegistrationContainerExport />} />
                                        <Route exact path={'/reloadPassword'} render={() => <ExportReloadPasswordContainer />} />
                                        <Route exact path={'/websitePlagin'} render={()=> <ExportWebsitePlaginContainer />} />
                                        <Route exact path={'/plan'} render={()=><Plan/>}/>
                                        <Route exact path={'/transportCompany'} render={() => <ExportTransportCompany />} />
                                        <Route exact path={'/profileCompany/'} render={() => <ExportProfileTransportCompany />} />
                                        <Route path={'/confirmation-email'} render={()=><ExportConfirmationEmailContainer/>}/>
                                        <Route path={'/reset-password'} render={()=><ResetPasswordContainerExport/>} />
                                        <Route render={()=><Error404/>}/>
                                    </Switch>
                            }
                    </div>
                </div>
                <div className={'col-12'}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default App;
