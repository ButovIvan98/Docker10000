import React from 'react';
import '../../css/header.css';
import {connect} from "react-redux";
import Header from "./header";

class HeaderCont extends React.Component {
    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.auth.isAuth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        Sidebar: state.Sidebar,
        login: state.AuthPage.login,
        auth: state.AuthPage
    }
}
const HeaderContainer = connect(mapStateToProps)(HeaderCont);
export default HeaderContainer;