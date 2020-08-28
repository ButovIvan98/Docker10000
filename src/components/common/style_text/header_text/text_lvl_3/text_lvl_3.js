import React from 'react';
import classNamees from './css/text_lvl_3.module.css';

const TextLvl3 = (props) => {
    return <div className={classNamees.block}>
        <h3 className={classNamees.text}>
            {
                props.text
            }
        </h3>
        <p className={classNamees.text}>{props.text2}</p>
    </div>
}
export default TextLvl3;