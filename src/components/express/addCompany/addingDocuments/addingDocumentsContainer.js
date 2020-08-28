import React from "react";
import {connect} from "react-redux";
import AddingDocuments from "./addingDocuments";
import {
    addingDocumentContract,
    addingDocumentINN,
    addingDocumentOrganizationCharter,
    addingDocumentReasonForSigning
} from "../../../../redux/addCompanyReducer";

class addingDocumentsContainer extends React.Component{
    render(){
        return <AddingDocuments {...this.props}/>
    }
}

let mapStateToProps =(state)=>{
    return{
        company: state.AddCompany
    }
}
const ExportAddingDocumentContainer = connect(mapStateToProps,{
    addingDocumentINN,
    addingDocumentOrganizationCharter,
    addingDocumentReasonForSigning,
    addingDocumentContract
})(addingDocumentsContainer);
export default ExportAddingDocumentContainer;