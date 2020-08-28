import React from 'react';
import classNamees from './css/profileCompany.module.css';
import Rating from "react-rating";
import emptyStar from './img/emptySter.png';
import fullStar from './img/fullStar.png';
import {validStar, validText} from "../../../../redux/profileTransportCompanyReducer";

const ProfileCompany = (props) => {
    let comment = props.ProfileCompany.comment.map(com => (
        <div className={'row ml-0 mr-0 pl-0 pr-0 mt-2' + ' ' + classNamees.blockListComment}>
            <div className={'col-lg-auto col-12 text-center'}>
                <img src={'https://kenguruexpress.ru/images/views/user.png'} className={classNamees.imagesUser}/>
            </div>
            <div className={'col-lg-10 col-12 text-lg-left text-center pl-0'}>
                <div className={'row'}>
                    <div className={'col-12 mt-2'}>
                        <span><b>{com.sender}</b></span>

                        <span>{com.dateAndTime}</span><br/>
                    </div>
                    <div className={'col-12 text-lg-left text-center '}>
                        <Rating
                            emptySymbol={<img src={emptyStar}/>}
                            fullSymbol={<img src={fullStar}/>}
                            initialRating={com.rating}
                            readonly
                        />
                    </div>
                </div>
                <p>{com.text}</p>
            </div>
        </div>)
    )
    let updateText = (e) => {
        props.updateTextComment(e.target.value);
        props.validText(e.target.value);
    }
    let updateRating = (e) => {
        props.updateRaitingComment(e);
        props.validStar(e);
    }
    let addComment = () => {
        props.addComm();
    }
    return <div className={'container mb-2 pb-4' + ' ' + classNamees.block}>
        <div className={'row' + ' ' + classNamees.blockRow}>
            <div className={'col-lg-6 col-12 text-center'}>
                <img src={props.ProfileCompany.dpd[0].logo} className={classNamees.imgTK}/><br/>
                <hr/>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <div className={'mb-2' + ' ' + classNamees.iconsInfo}>
                            <img src={'https://kenguruexpress.ru/images/views/globus.png'}/>
                        </div>
                        <p>Россия</p>
                    </div>
                    <div className={'col-4'}>
                        <div className={'mb-2' + ' ' + classNamees.iconsInfo}>
                            <p className={classNamees.textNumber}>{props.ProfileCompany.dpd[0].rating}</p>
                        </div>
                        <p className="old-page-company-text-icons">Рейтинг</p>
                    </div>
                    <div className={'col-4'}>
                        <div className={'mb-2' + ' ' + classNamees.iconsInfo}>
                            <p className={classNamees.textNumber}>{props.ProfileCompany.dpd[0].age}</p>
                        </div>
                        <p>Лет на рынке</p>
                    </div>
                </div>
            </div>
            <div className={'col-lg-6 col-12 mb-2'}>
                <div className={'row'}>
                    <div className={'col-12 mt-2'}>
                        <p className={classNamees.textDescription}>
                            {props.ProfileCompany.dpd[0].description}
                        </p>
                        <hr/>
                    </div>
                    <div className={'col-12'}>
                        <div className={'row mr-0 ml-0' + ' ' + classNamees.blockComment}>
                            <div className={'col-12'}>
                                <Rating className={classNamees.star}
                                        style={{borderBottom: props.ProfileCompany.ratingBorder}}
                                        emptySymbol={<img src={emptyStar}/>}
                                        fullSymbol={<img src={fullStar}/>}
                                        fractions={2}
                                        initialRating={props.ProfileCompany.rating}
                                        onClick={(rate) => updateRating(rate)}
                                /><br/>
                                <textarea placeholder={'Текст комментария.'}
                                          style={{border: props.ProfileCompany.commentBorder}}
                                          className={classNamees.textareaComment}
                                          onChange={updateText}
                                          value={props.ProfileCompany.newComment}></textarea>
                                <button onClick={addComment} className={classNamees.button}>Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-12'}>
                <hr/>
            </div>

            <div className={'col-12'}>
                {comment}
                <hr/>
            </div>
        </div>
    </div>
}
export default ProfileCompany;