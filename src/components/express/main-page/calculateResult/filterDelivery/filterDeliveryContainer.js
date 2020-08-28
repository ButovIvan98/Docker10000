import React from 'react';
import {connect} from "react-redux";
import FilterDelivery from "./filterDelivery";
import {
    door_door,
    door_warehouse,
    warehouse_door,
    warehouse_warehouse
} from "../../../../../redux/calculateFormReducer";

class FilterDeliveryContainer extends React.Component {
    render() {
        if(Object.keys(this.props).length===0){
            return null
        }
        else return  <FilterDelivery {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        calculate: state.CalculateFormPage.filterDeliveryOption,
        listResult:state.CalculateFormPage.fullListCalculateResult
    }
}
let ExportFilterDeliveryContainer = connect(mapStateToProps, {  warehouse_warehouse, warehouse_door, door_door, door_warehouse})(FilterDeliveryContainer);
export default ExportFilterDeliveryContainer;