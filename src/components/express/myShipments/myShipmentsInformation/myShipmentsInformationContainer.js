import React from 'react';
import {connect} from "react-redux";
import MyShipmentInformation from "./myShipmentsInformation";

class MyShipmentsInformationContainer extends React.Component {

    render() {
        return <MyShipmentInformation {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        MySpipmentsInfo: state.MyShipmentsInformationReducerPage
    }
};
let ExportMyShipmentsInformationContainer = connect(mapStateToProps)(MyShipmentsInformationContainer);
export default ExportMyShipmentsInformationContainer;
