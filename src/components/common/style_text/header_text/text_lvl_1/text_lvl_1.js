import React from 'react';
import classNamees from './css/text_lvl_1.module.css';

const TextLvl1 = (props) => {
    return <div>
        <div>
            <h1 className={classNamees.style_text}>{props.text}</h1>
            <p className={classNamees.style_text}>{props.text2}</p>
        </div>
    </div>
}
export default TextLvl1;