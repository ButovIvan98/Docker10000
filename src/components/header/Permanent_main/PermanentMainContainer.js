import React from 'react';
import {connect} from "react-redux";
import Permanent_main from "./PermanentMain";
import {listCompany, logout, newStatus, updateCompanyActiveData} from "../../../redux/headerReducer";

class PermanentMainContainer extends React.Component {
    componentDidMount() {
        this.props.listCompany();
    }

    render() {
        return <Permanent_main {...this.props} status={this.props.StatusBlock}/>
    }
}
let mapStateToProps = (state) => {
    return {
        activeCompany:state.Sidebar.activeCompany,
        StatusBlock: state.Sidebar.statusBlockMain,
        DataCompany:state.Sidebar.listCompany,
        auth:state.AuthPage
    }
}
const PermanentContainerMain = connect(mapStateToProps, {newStatus, updateCompanyActiveData,logout, listCompany})(PermanentMainContainer);
export default PermanentContainerMain;