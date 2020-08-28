import React from 'react';
import ReloadPassword from "./reloadPassword";
import {connect} from "react-redux";

class ReloadPasswordContainer extends React.Component {
    render() {
        return <ReloadPassword {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        reloadPassword: state.Registration
    }
};
export const ExportReloadPasswordContainer = connect(mapStateToProps, {})(ReloadPasswordContainer);
