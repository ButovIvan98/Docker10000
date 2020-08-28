import React from "react";
import classes from './addingDocuments.module.css';
import {DropzoneArea, DropzoneDialog} from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import {AttachFile, Description, PictureAsPdf, Theaters} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import img from './img/1.png';

const AddingDocuments =(props)=> {
    const handlePreviewIcon = (fileObject, classes) => {
        const {type} = fileObject.file
        const iconProps = {
            className : classes.image,
        }
        if (type.startsWith("video/")) return <Theaters {...iconProps} />

        switch (type) {
            case "application/msword":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                return <Description {...iconProps} />
            case "application/pdf":
                return <PictureAsPdf {...iconProps} />
            default:
                return <AttachFile {...iconProps} />
        }
    }
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row mt-3' + ' ' + classes.block}>
                <div className={'col-lg-12'}>
                    <h2>
                        Работа с документами
                    </h2>
                </div>
                <div className={'col-lg-12 mt-3 text-center'}>
                    <a href={img} className={classes.buttonLoad} download>
                        <span>
                            Скачать договор
                        </span>
                    </a>
                </div>
                <div className={'col-lg-12 mt-3 text-center'}>
                    <h5>Скачайте, ознакомьтесь и подпишите договор.<br/>Затем прикрепите перечень документов и нажмите "Отправить."</h5>
                </div>
                <div className={'col-lg-6 mt-3 mb-3'}>
                    <DropzoneArea
                        dropzoneText={"Перенесите или добавьте ИНН"}
                        dropzoneClass={classes.dropzoneContainer}
                        dropzoneParagraphClass={classes.dropzoneParagraph}
                        maxFileSize={10000000}
                        filesLimit={1}
                        acceptedFiles={['application/doc','application/docx','application/pdf']}
                        showFileNames={true}
                        uploadIconSize={classes.dropzoneSvg}
                        onChange={(files) => console.log('Files:', files)}
                    />
                </div>
                <div className={'col-lg-6 mt-3 mb-3'}>
                    <DropzoneArea
                        dropzoneText={"Перенесите или добавьте Устав организации."}
                        dropzoneClass={classes.dropzoneContainer}
                        dropzoneParagraphClass={classes.dropzoneParagraph}
                        maxFileSize={10000000}
                        filesLimit={1}
                        acceptedFiles={['application/doc','application/pdf']}

                    />
                </div>
                <div className={'col-lg-6 mt-3 mb-3'}>
                    <DropzoneArea
                        //acceptedFiles={'/doc,/pdf'}
                        dropzoneText={"Перетащите или добавьте Основание для подписания"}
                        dropzoneClass={classes.dropzoneContainer}
                        dropzoneParagraphClass={classes.dropzoneParagraph}
                        maxFileSize={10000000}
                        filesLimit={1}
                        acceptedFiles={['application/doc','application/pdf']}
                    />
                </div>
                <div className={'col-lg-6 mt-3 mb-3'}>
                    <DropzoneArea
                        //acceptedFiles={'/doc,/pdf'}
                        dropzoneText={"Перетащите или добавьте подписанный договор"}
                        dropzoneClass={classes.dropzoneContainer}
                        dropzoneParagraphClass={classes.dropzoneParagraph}
                        maxFileSize={10000000}
                        filesLimit={1}
                        acceptedFiles={['application/doc','application/pdf']}
                    />
                </div>
                <div className={'col-lg-12 mt-3 mb-3 text-center self-align-center'}>
                    <NavLink to={'/addCompany/loadingFile/done'} className={classes.addAddress}>
                        <span>Отправить документы</span>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
}
export default  AddingDocuments;