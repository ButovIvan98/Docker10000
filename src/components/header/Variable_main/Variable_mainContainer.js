import React from 'react';
import Variable_main from "./Variable_main";
import {connect} from "react-redux";

class VariableContainer extends React.Component {
    render() {
        return <Variable_main {...this.props} Express_main={this.props.Express_main}
                              Cargo_main={this.props.Cargo_main}/>
    }
}

let mapStateToProps = (state) => {
    return {
        Express_main: state.Sidebar.Express_main,
        Cargo_main: state.Sidebar.Cargo_main
    }
}
const VariableContainerMain = connect(mapStateToProps)(VariableContainer);
export default VariableContainerMain;