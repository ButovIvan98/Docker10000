import React from 'react';
import {connect} from "react-redux";

import PersonalAccount from "./personalAccount";
import {statusAmount, statusCount, statusDebt} from "../../../redux/personalAccountReducer";

class PersonalAccountContainer extends React.Component {
    render() {
        return <PersonalAccount {...this.props}/>
    }
}
let mapStateToProps = (state) => {
    return {
        PersonalAccountData: state.PersonalAccount
    }
}
const PersonalAccountContainerExport = connect(mapStateToProps, {statusDebt,statusCount, statusAmount})(PersonalAccountContainer);
export default PersonalAccountContainerExport;