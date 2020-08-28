import React from 'react';
import {connect} from "react-redux";
import {
    UpdateStatusFalse,
    UpdateStatusTrue,
    updateTextCity,
    updateTextCountry, updateTextFlat, updateTextHouse, updateTextIndex, updateTextStreet
} from "../../../../../redux/addressReducer";
import InputSelect from "./input_select";

class InputText extends React.Component {

    render() {
        return <InputSelect {...this.props} address={this.props.addressPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        addressPage: state.Address
    }

}
const InputSelectContainerExport = connect(mapStateToProps, {
    UpdateStatusTrue,
    UpdateStatusFalse,
    updateTextCountry,
    updateTextCity,
    updateTextStreet,
    updateTextHouse,
    updateTextFlat,
    updateTextIndex
})(InputText);
export default InputSelectContainerExport;