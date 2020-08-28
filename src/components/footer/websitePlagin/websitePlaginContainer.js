import React from 'react';
import { connect } from 'react-redux';
import { updateName, updateText, email, phone, messageShipment } from '../../../redux/feedbackReducer';
import WebsitePlagin from './websitePlagin';
class WebsitePlaginContainer extends React.Component {
    render() {
        return <WebsitePlagin {...this.props} />
    }
};
let mapStateToProps = (state) => {
    return {
        feedback: state.FeedbackForm
    }
};
const ExportWebsitePlaginContainer = connect(mapStateToProps, {email, phone,updateName, updateText, messageShipment})(WebsitePlaginContainer);
export default ExportWebsitePlaginContainer;