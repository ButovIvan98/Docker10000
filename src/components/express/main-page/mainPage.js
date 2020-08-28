import React from 'react'
import InformationCompany from "./informationCompany/informationCompany";
import ExportCalculateFormContainer from "../../calculateForm/calculateFormContainer";
import classes from '../../calculateForm/calculateForm.module.css'
import InformationModuleCompany from "./informationModuleCompany/informationModuleCompany";
import ExportCalculateResultContainer from "./calculateResult/calculateResultContainer";
import TrainingUser from "./trainingUser/trainingUser";
import NewsFeed from "./newsFeed/newsFeed";

const MainPage = (props)=>{
    return <div className={'container-fluid pl-0 pr-0' + ' ' + classes.main }>
        <ExportCalculateFormContainer/>
        <ExportCalculateResultContainer props={props}/>
        <InformationCompany/>
        <TrainingUser/>
        <InformationModuleCompany/>
        <NewsFeed/>
    </div>
}
export default MainPage;