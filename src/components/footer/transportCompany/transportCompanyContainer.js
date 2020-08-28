import React from 'react';
import TransportCompany from "./transportCompany";
import {connect} from "react-redux";
import {updateInputCommnent} from "../../../redux/transportCompanyReducer";

class TransportCompanyContainer extends React.Component {

    render() {
        return <TransportCompany {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        transportCompany: state.TransportCompany
    }
}
const ExportTransportCompany = connect(mapStateToProps, {updateInputCommnent})(TransportCompanyContainer);

export default ExportTransportCompany;