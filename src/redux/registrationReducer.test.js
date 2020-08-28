import RegistrationReducer, {Email, updateChecked, Password, addUser} from './registrationReducer';
/*Изменение статуса*/
let state = {
    email: '',
    validEmail: false,
    password: '',
    validPassword: false,
    addUser: false,
    notifications: false,
    reloadPasswordEmail: '',
    statusSendingRecovery:true
};
/*Вот тут я хочу отследить изменения state и по аналогии сделать для валидности емайла, но немного не понимаю как это реализовать.*/
it('Внесение изменений в локальный state при изменении логина', () => {
    let action = Email('test@test.ru');
    let newState = RegistrationReducer(state, action);
    expect(newState.email).toBe('test@test.ru');
});

it('Изменение статуса кнопки на согласие о получении уведомлений', () => {
    let action = updateChecked(true);
    let newState = RegistrationReducer(state, action);
    expect(newState.notifications).toBe(false);
});

