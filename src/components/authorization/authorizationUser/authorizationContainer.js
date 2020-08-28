import React from 'react';
import SignIn from "./authorization";
import {connect} from "react-redux";
import {
    auth,
    Email,
    updatePassword, updateRememberMe,reloadPasswordUser

} from "../../../redux/authReducer";

class AuthorizationContainer extends React.Component {

    render() {
        return <SignIn {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        authorization: state.AuthPage
    }
};
const AuthorizationContainerExport = connect(mapStateToProps, {
    Email,
    updatePassword,
    auth,
    updateRememberMe,reloadPasswordUser
})(AuthorizationContainer);
export default AuthorizationContainerExport