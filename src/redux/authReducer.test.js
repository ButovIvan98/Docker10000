import AuthorezetionReducer, {authIs, updateEmail, updatePassword, updateRememberMe} from './authReducer';
/*Изменение статуса*/
let state = {
    email: '',
    password: '122',
    isAuth: false,
    token: '',
    rememberMe: true
};
it('Изменение статуса пользователя при успешной авторизации', () => {
    let action = authIs(true);
    let newState = AuthorezetionReducer(state, action);
    expect(newState.isAuth).toBe(true);
});
it('Внесение изменений в локальный state при изменении логина', () => {
    let action = updateEmail('ButovIvan98@yandex.ru');
    let newState = AuthorezetionReducer(state, action);
    expect(newState.email).toBe('ButovIvan98@yandex.ru');
});
it('Внесение изменений в локальный state при изменении пароля', () => {
    let action = updatePassword('123456780');
    let newState = AuthorezetionReducer(state, action);
    expect(newState.password).toBe('123456780');
});
it('Изменение статуса переключателя "Запомнить меня" ', () => {
    let action = updateRememberMe(true);
    let newState = AuthorezetionReducer(state, action);
    expect(newState.rememberMe).toBe(false); 
});
