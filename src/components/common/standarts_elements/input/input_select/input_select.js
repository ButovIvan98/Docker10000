import React from 'react';
import classNamees from './css/input_select.module.css';
import standartclassNamees from './css/input_text.css';

const InputSelect = (props) => {
    return <div className={classNamees.block}>
        {/*<input name={props.name} type='text' value={props.addressPage.country} className={classNamees.input}/>*/}
        {/*<label className={props.addressPage.classNameLabel}>{props.label_text}</label>*/}
    </div>
};
export default InputSelect;