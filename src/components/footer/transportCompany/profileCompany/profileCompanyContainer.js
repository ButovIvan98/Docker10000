import React from 'react';
import ProfileCompany from "./profileCompany";
import {connect} from "react-redux";
import {
    addComments,
    updateRaitingComment,
    updateTextComment, validStar,
    validText
} from "../../../../redux/profileTransportCompanyReducer";

class ProfileCompanyContainer extends React.Component {

    addCommentUser() {
        this.props.addComments(this.props.ProfileCompany.rating, this.props.ProfileCompany.newComment, this.props.ProfileCompany.validComment, this.props.ProfileCompany.validRating);
    }

    render() {
        return <ProfileCompany {...this.props} addComm={this.addCommentUser.bind(this)}/>
    }
}

let mapStateToProps = (state) => {
    return {
        ProfileCompany: state.ProfileCompanyPage
    }
}
let ExportProfileTransportCompany = connect(mapStateToProps, {
    updateTextComment,
    updateRaitingComment,
    addComments,
    validText,
    validStar,
})(ProfileCompanyContainer);
export default ExportProfileTransportCompany;