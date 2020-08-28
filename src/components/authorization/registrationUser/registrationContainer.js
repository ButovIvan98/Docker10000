import React from 'react';
import {connect} from "react-redux";
import {
    addUser, Email, Password, updateChecked,
} from "../../../redux/registrationReducer";
import SignUp from "./registration";

class RegistrationForm extends React.Component {
    render() {
        return <SignUp {...this.props} address={this.props.addressPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        registrationPage: state.Registration
    }
};
const RegistrationContainerExport = connect(mapStateToProps, {
    Email,
    addUser,
    Password,
    updateChecked
})(RegistrationForm)
export default RegistrationContainerExport;