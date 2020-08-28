import React from 'react';
import {connect} from "react-redux";

import ResetPassword from "./resetPassword";
import {resetPassword, resetPasswordClick} from "../../../redux/authReducer";

class ResetPasswordContainer extends React.Component {

    render() {
        return <ResetPassword {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        auth: state.AuthPage
    }
};
const ResetPasswordContainerExport = connect(mapStateToProps, {resetPassword,resetPasswordClick})(ResetPasswordContainer);
export default ResetPasswordContainerExport