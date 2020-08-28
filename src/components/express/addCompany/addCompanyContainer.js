import React from "react";
import {connect} from "react-redux";
import AddCompany from "./addCompany";
import {
    accountPaymentAddCompany,
    actualAddress,
    addCompanyYou, addingDocumentContract,
    addingDocumentINN,
    addingDocumentOrganizationCharter,
    addingDocumentReasonForSigning,
    addressBankAddCompany,
    coincidence,
    emailAddCompany,
    informationPayment,
    informationYouCompany,
    legalAddress,
    middleNameAddCompany,
    nameAddCompany,
    phoneAddCompany,
    positionAddCompany,
    searchCompany,
    searchInfoBIC,
    surnameAddCompany,
    updateVat_payer,
    validActualAddress,
    validEmailAddCompany,
    validLegalAddress,
    validNameAddCompany,
    validPhoneAddCompany,
    validPositionAddCompany,
    validSurnameAddCompany
} from "../../../redux/addCompanyReducer";
import {validationFormSurname} from "../../common/validationForm/validForm";

class AddCompanyContainer extends React.Component{
    componentDidMount(){

    }
    render(){
        return <AddCompany {...this.props}/>
    }
}

let mapStateToProps =(state)=>{
    return{
        company: state.AddCompany
    }
}
const ExportAddCompanyContainer = connect(mapStateToProps,{
    legalAddress,
    validLegalAddress,
    actualAddress,
    validActualAddress,
    coincidence,
    updateVat_payer,
    surnameAddCompany,
    validSurnameAddCompany,
    nameAddCompany,
    validNameAddCompany,
    middleNameAddCompany,
    positionAddCompany,
    validPositionAddCompany,
    phoneAddCompany,
    validPhoneAddCompany,
    emailAddCompany,
    validEmailAddCompany,
    searchCompany,
    informationYouCompany,
    searchInfoBIC,
    informationPayment,
    accountPaymentAddCompany,
    addCompanyYou,
    validationFormSurname,
    addressBankAddCompany,


})(AddCompanyContainer);
export default ExportAddCompanyContainer;