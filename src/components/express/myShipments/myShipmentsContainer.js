import React from 'react';
import MySpipments from "./myShipments";
import {connect} from "react-redux";

class MyShipmentsContainer extends React.Component {

    render() {
        return <MySpipments {...this.props} MySpipments={this.props.MySpipments}/>
    }
}

let mapStateToProps = (state) => {
    return {
        MySpipments: state.MyShipmentsPage.list
    }
};
let ExportMyShipmentsContainer = connect(mapStateToProps)(MyShipmentsContainer);
export default ExportMyShipmentsContainer;
