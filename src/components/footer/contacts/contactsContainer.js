import React from 'react';
import Contact from './contacts';
import { connect } from 'react-redux';
import { updateNameGeneral, updateTextGeneral, email, phone, messageShipment } from '../../../redux/feedbackReducer';
class ContactContainer extends React.Component {
    render() {
        return <Contact {...this.props} />
    }
};
let mapStateToProps = (state) => {
    return {
        contactData:state.ContactPage,
        feedback: state.FeedbackForm
    }
};
const ExportContactContainer = connect(mapStateToProps, {email, phone,updateNameGeneral, updateTextGeneral, messageShipment})(ContactContainer);
export default ExportContactContainer;