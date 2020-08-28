import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect=(state)=>{
    return {isAuth:state.Auth.isAuth};
}
export const AuthRedirectWith = (Component)=>{
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth){return <Redirect to={"/login"}/>}
            return <Component {...this.props}/>
        }
    }
    let ConnentRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnentRedirectComponent
}