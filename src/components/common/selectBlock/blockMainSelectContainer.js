import React from 'react';
import {connect} from "react-redux";
import BlockMainSelect from "./blockMainSelect";
import {listCompany, logout, newStatus, updateCompanyActiveData} from "../../../redux/headerReducer";

class BlockMainSelectContainer extends React.Component {
    componentWillMount() {
        this.props.listCompany();
    }
    render() {
        return <BlockMainSelect {...this.props}/>
    }
}
let mapStateToProps = (state) => {
    return {
        listInfoCompany:state.Sidebar,
        auth:state.AuthPage
    }
}
const BlockMainSelectContainerExport = connect(mapStateToProps, {listCompany, newStatus, logout,updateCompanyActiveData})(BlockMainSelectContainer);
export default BlockMainSelectContainerExport;