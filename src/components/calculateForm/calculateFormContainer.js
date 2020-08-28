import React from 'react';
import {connect} from "react-redux";
import {
    updateStatusParameters,
    widthData,
    weightData,
    heightData,
    quantityData,
    volumeData,
    addCargo,
    statusCalculate,
    updateCityDeparture,
    ListCityDeparture,
    updateCityDestination,
    ListCityDestination,
    lengthData,
    calculateTariff,
    deleteCargoList,
    warehouse_warehouse,
    updateTypeCargo,
    autoSizeDoc,
    clearCargoData, updatePickup, updateDelivery
} from '../../redux/calculateFormReducer'
import CalculateForm from "./calculateForm";

class CalculateFormContainer extends React.Component{
    render(){
        return <CalculateForm {...this.props}/>
    }
}   

let mapStateToProps =(state)=>{
    return{
        calculate:state.CalculateFormPage
    }
}
const ExportCalculateFormContainer = connect(mapStateToProps,
    {
        updateStatusParameters,
        addCargo,
        widthData,
        weightData,
        volumeData,
        lengthData,
        heightData,
        quantityData,
        statusCalculate,
        ListCityDeparture,
        updateCityDeparture,
        updateCityDestination,
        ListCityDestination,
        calculateTariff,
        deleteCargoList,
        warehouse_warehouse,
        updateTypeCargo,
        autoSizeDoc,
        clearCargoData,
        updatePickup,
        updateDelivery
    })(CalculateFormContainer);
export default ExportCalculateFormContainer;