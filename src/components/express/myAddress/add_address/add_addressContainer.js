import React from 'react';
import {connect} from "react-redux";
import {
    addAddressBook,
    cityInfo,
    flatInfo, fullInfoCity, fullInfoHouse, fullInfoStreet,
    houseInfo, indexInfo, listMyAddress,
    middleNameInfo,
    nameInfo,
    phoneInfo1,
    phoneInfo2, streetInfo,
    surnameInfo,
    updateComment, updateNameCompany
} from "../../../../redux/myAddressReducer";
import AddAddress from "./add_address";

class AddAddressContainer extends React.Component {
    componentWillUnmount() {
        this.props.listMyAddress();
    }
    render() {
        return <AddAddress {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        addressPage: state.AddressPage.addAddress
    }
};
const AddressContainerExport = connect(mapStateToProps, {
    surnameInfo, nameInfo,middleNameInfo,
    phoneInfo1,phoneInfo2,updateComment,
    updateNameCompany,houseInfo,fullInfoHouse,
    flatInfo,indexInfo,cityInfo,fullInfoCity,
    streetInfo,fullInfoStreet,addAddressBook,
    listMyAddress
})(AddAddressContainer);
export default AddressContainerExport;