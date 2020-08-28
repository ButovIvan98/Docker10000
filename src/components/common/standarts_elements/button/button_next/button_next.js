import React from 'react';
import classNamees from './css/button_next.module.css';

const Button_next = (props) => {
    return <div>
        <button className={classNamees.button}>Отправить</button>
        {/*получаем данные через props*/}
    </div>
};
export default Button_next;