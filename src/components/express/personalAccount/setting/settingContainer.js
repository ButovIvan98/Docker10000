import React from 'react';
import {connect} from "react-redux";
import Setting from "./setting";
import {
    activateUser, birthdayUser, codeReviewsNumber, profileInfo,
    updateClickButtonCode, updateEmailForm, updateFioUser, updateInfoUser,
    updateMiddleName,
    updateName,
    updateNumber,
    updateSurname, userEmailActive, userFullInfo
} from "../../../../redux/settingReducer";

class SettingContainer extends React.Component {
    componentDidMount() {
        this.props.profileInfo();
        this.props.userFullInfo();
    }

    render() {
        return <Setting {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        setting: state.Setting,
    }
}
let ExportSettingContainer = connect(mapStateToProps,
    {
        updateSurname,
        updateMiddleName,
        updateName,
        updateNumber,
        updateClickButtonCode,
        activateUser,
        codeReviewsNumber,
        userEmailActive,
        updateEmailForm,
        updateFioUser,
        profileInfo,
        birthdayUser,
        updateInfoUser,
        userFullInfo
    })(SettingContainer);
export default ExportSettingContainer;