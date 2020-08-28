/*Форма для волидации полей - телефон*/
export const validationFormPhone = (phone) => {
    let phoneClean = Number(phone.replace(/[^\d]/g, ''));
    console.log(String(phoneClean).length);
    if (String(phoneClean).length === 11) {
        return true
    } else {
        return false
    }
}
/*Форма для валидации полей - емаил*/
export const validationFormEmail = (email) => {
    if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
        return false;
    } else {
        return true
    }
}
/*Форма для валидации полей - ИНН*/
export const validationFormINN = (inn) => {
    if (String(inn).length === 10 || String(inn).length === 12) {
        return true
    } else return false
}
/*Форма для валидации полей - ОГРН*/
export const validationFormOGRN = (ogrn) => {
    if (String(ogrn).length === 13 || String(ogrn).length === 15) {
        return true
    } else return false
}
/*Форма для валидации полей - БИК*/
export const validationFormBIC = (bic) => {
    if (String(bic).length === 9) {
        return true
    } else return false
}
/*Форма проверка полей - наименование компании*/
export const validationFormNameCompany = (name) => {
    if (String(name).length > 2) {
        return true
    } else return false
}
/*Форма проверка полей - расчетный счет*/
export const validationFormAccountPayment = (value) => {
    if (String(value).length === 20) return true
    else return false
}
/*Форма проверка полей - наименование банка*/
export const validationFormNameBank = (name) => {
    if (String(name).length > 3) return true
    else return false
}
/*Форма валидации полей - Юридический адрес*/
export const validationFormLegalAddress = (address) => {
    if (String(address).length > 5) return true
    else return false
}
/*Форма валидации полей - фамилия*/
export const validationFormSurname = (surname) => {
    if (String(surname).length > 2) return true
    else return false
}
/*Форма валидации полей - имя*/
export const validationFormName = (name) => {
    if (String(name).length > 1) return true
    else return false
}
/*Форма валидации полей - должность*/
export const validationFormPosition = (value) => {
    if (String(value).length > 2) return true
    else return false
}
/*Форма валидации полей - улица*/
export const validationFormStreet = (street) => {
    if (String(street).length > 1) return true
    else return false
}
/*Форма валидации полей - дом*/
export const validationFormHouse = (house) => {
    if (String(house).length > 1) return true
    else return false
}
