import React from "react";
import MyAddress from "./myAddress";
import {connect} from "react-redux";
import {deleteAddress, listMyAddress} from "../../../redux/myAddressReducer";

class MyAddressContainer extends React.Component{
    componentDidMount(){
        this.props.listMyAddress();
    }
    render(){
        return <MyAddress {...this.props}/>
    }
}

let mapStateToProps =(state)=>{
    return{
        myAddress: state.AddressPage
    }
}
const ExportMyAddressContainer = connect(mapStateToProps,{listMyAddress,deleteAddress})(MyAddressContainer);
export default ExportMyAddressContainer;