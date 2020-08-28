import React from 'react';
import CalculateResult from "./calculateResult";
import {connect} from "react-redux";
import {
    clickArrangeOrder,
    door_door, door_warehouse,
    updateDataCheaper,
    updateDataFaster,
    warehouse_door,
    warehouse_warehouse
} from "../../../../redux/calculateFormReducer";

class CalculateResultContainer extends React.Component {
    render() {
        if(this.props.calculate.formResultCalculate){
            return  <CalculateResult {...this.props}/>
        }
        else {
            return null
        }
    }
}

let mapStateToProps = (state) => {
    return {
        calculate: state.CalculateFormPage,
        address:state.AddressPage
    }
}
let ExportCalculateResultContainer = connect(mapStateToProps, {clickArrangeOrder, updateDataFaster, updateDataCheaper, warehouse_warehouse,warehouse_door,door_door,door_warehouse})(CalculateResultContainer);
export default ExportCalculateResultContainer;