import React from "react";
import {connect} from "react-redux";
import ConfirmationEmail from "./confirmationEmail";
import {userEmailActive} from "../../../redux/settingReducer";

class ConfirmationEmailContainer extends React.Component{
    componentDidMount() {
        this.props.userEmailActive();
    }

    render(){
        return <ConfirmationEmail {...this.props}/>
    }
}

let mapStateToProps =(state)=>{
    return{
        setting: state.Setting
    }
}
const ExportConfirmationEmailContainer = connect(mapStateToProps,{userEmailActive})(ConfirmationEmailContainer);
export default ExportConfirmationEmailContainer;