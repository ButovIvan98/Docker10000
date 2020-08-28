import React from 'react';
import FeedbackForm from './feedbackForm';
import { connect } from 'react-redux';
import {messageShipment, updateName, updateText, phone, email} from "../../../redux/feedbackReducer";

class FeedbackFormContainer extends React.Component{

    render(){
        return <FeedbackForm {...this.props}/>
    }
}

let mapStateToProps=(state)=>{
    return{
        feedback:state.FeedbackForm
    }
}
const ExportFeedbackContainer = connect(mapStateToProps,{ messageShipment, updateName, updateText, phone, email})(FeedbackFormContainer);
export default ExportFeedbackContainer;