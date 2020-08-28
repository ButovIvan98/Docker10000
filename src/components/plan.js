import React from "react";
import classes from './plan.module.css';

const Plan =()=>{
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 mt-4'}>
                    <p className={classes.text}>
                        1. Личный кабинет пользователя.
                    </p>
                    <p className={classes.text}>
                        2. Добавление документов компании.
                    </p>
                    <p className={classes.text}>
                        3. Создание интерфайса для отслеживания груза.
                    </p>
                    <p className={classes.text}>
                        4. Создание личного кабинета для мелких транспортных компаний.
                    </p>
                    <p className={classes.text}>
                        5. Адаптив(телефон и планшет).
                    </p>
                    <p className={classes.text}>
                        6. Создание Redux для всех созданных форм.
                    </p>
                    <p className={classes.text}>
                        7. Интеграция с API сервисом.
                    </p>
                    <p className={classes.text}>
                        8. Составление документации(Выполняется параллельно)
                    </p>
                    <p className={classes.text}>
                        9. Тестирование кода(Выполняется параллельно)
                    </p>
                    <p className={classes.text}>
                        Приблизительный срок запуска приложения - середина июня.
                    </p>
                </div>
            </div>
        </div>
    </div>
}
export default Plan;