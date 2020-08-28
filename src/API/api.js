import * as axios from "axios";
import Cookies from 'js-cookie';


export const instance = () => {
    return axios.create({
            baseURL: 'https://api.ke22.ru',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + Cookies.get('auth_token'),
                'Accept': 'application/json',
            }
        }
    )
}
/*Запрос с типом formData*/
export const instanceHeaders = () => {
    return axios.create({
            baseURL: 'https://api.ke22.ru',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + Cookies.get('auth_token'),
                'Accept': 'application/json',
            }
        }
    )
}

const auth = axios.create({
    baseURL: 'https://api.ke22.ru',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
/*Запросы при калькуляции тарифов и добавлении грузов*/
export const calculateAPI = {
    calculate(cargo, idCityDeparture, idCityDestination,pickup,delivery) {
        return auth.post('/rates/create/', {
            sender_city: idCityDeparture,
            receiver_city: idCityDestination,
            cargoes: cargo,
            pickup:pickup,
            delivery:delivery
        })
    },
    addCargo(type, delivery_type, height, length, width, weight, volume, volumetric_weight, quantity, comment) {
        return auth.post('/product/', {
            type,
            delivery_type,
            height,
            length,
            width,
            weight,
            volume,
            volumetric_weight,
            quantity,
            comment
        })
    }
}

export const addCompanyAPI = {
    searchDetail(query) {
        return auth.post('/suggest/legal/party', {query: query, count: 10})
    },
    searchBank(query) {
        return auth.post('/suggest/legal/bank', {query: query, count: 10})
    },
    addCompanyInfo(
        full_title, short_title, type, inn, ogrn, kpp,
        opf_code, opf_full, opf_short, address_legal, address_real,
        contact_last_name, contact_first_name, contact_patronymic,
        contact_position, contact_reason, is_nds, bank_title,
        payment_account, bik
    ) {
        return instance().post('/company/', {
            full_title: full_title, short_title: short_title,
            type: type, inn: inn, ogrn: ogrn, kpp: kpp, opf_code: opf_code,
            opf_full: opf_full, opf_short: opf_short, address_legal: address_legal,
            address_real: address_real, contact_last_name: contact_last_name,
            contact_first_name: contact_first_name, contact_patronymic: contact_patronymic,
            contact_position: contact_position, contact_reason: contact_reason, is_nds: is_nds,
            bank_title: bank_title, payment_account: payment_account, bik: bik
        })
    },
    addPhoneAndEmailCompany(id, formData) {
        return instanceHeaders().patch(`/profile/${id}/`, {email: formData.get('email'), phone:formData.get('phone')})
    }
}
export const companyAPI = {
    listCompanyHeader() {
        return instance().get('/profile/')
    }
}
export const cityAPI = {
    searchHouse(street_fias, house) {
        return auth.post('/geo/suggest/house/', {street_fias: street_fias, house: house, count: 10})
    },
    houseInformation(street_fias, unrestricted_value) {
        return auth.post('/geo/suggest/house/', {street_fias: street_fias, house: unrestricted_value, count: 1})
    },
    searchStreet(locality_type, locality_fias, street) {
        return auth.post('/geo/suggest/street/', {
            locality_type: locality_type,
            locality_fias: locality_fias,
            street,
            count: 10
        })
    },
    cityInformation(city) {
        return auth.post('/geo/locality/', {locality: city, count: 1})
    },
    searchCity(city) {
        return auth.post('/geo/locality/', {locality: city, count: 10})
    }
}
export const addAddressAPI = {
    deleteAddress(id) {
        return instance().delete(`/profile/contact/${id}/`)
    },
    listAddress() {
        return instance().get('/profile/contact/')
    },
    retrieveAddress(id) {
        return instance().get(`/profile/contact/${id}/`)
    },
    updateAddress(id, userID, locality, street, street_type, house, house_type, block, block_type, flat, flat_type, zip, company, surname, name, patronymic, phone, phone_extension, phone2, phone2_extension, comment, latitude, longitude) {
        return instance().update(`/profile/contact/${id}/`, {
            user: userID,
            locality: locality,
            street: street,
            street_type: street_type,
            house: house,
            house_type: house_type,
            block: block,
            block_type: block_type,
            flat: flat,
            flat_type: flat_type,
            zip: zip,
            company: company,
            surname: surname,
            name: name,
            patronymic: patronymic,
            phone: phone,
            phone_extension: phone_extension,
            phone2: phone2,
            phone2_extension: phone2_extension,
            comment: comment,
            latitude: latitude,
            longitude: longitude
        })
    },
    addBookAddress(userID, locality, street, street_type, house, house_type, block, block_type, flat, flat_type, zip, company, surname, name, patronymic, phone, phone_extension, phone2, phone2_extension, comment, latitude, longitude,fias_house) {
        return instance().post('/profile/contact/', {
            user: userID,
            locality: locality,
            street: street,
            street_type: street_type,
            house: house,
            house_type: house_type,
            block: block,
            block_type: block_type,
            flat: flat,
            flat_type: flat_type,
            index_number: zip,
            company: company,
            surname: surname,
            name: name,
            patronymic: patronymic,
            phone: phone,
            phone_extension: phone_extension,
            phone2: phone2,
            phone2_extension: phone2_extension,
            comment: comment,
            latitude: latitude,
            longitude: longitude,
            house_fias:fias_house
        })
    }
}
export const orderAPI={
    addTerminal(idTariff, type_user, code_tk, is_legal,
                company_title,company_inn,company_leader_fio,
                company_address,provider,surname,name,patronymic,
                phone,passport_series,passport_number,
                passport_issued_by,passport_date,send_poa_email){
      return instance().post('/rates/terminal/create/',{rate:idTariff,direction:type_user,
          external_code:code_tk, is_legal:is_legal,
          company_title:company_title,company_inn:company_inn,
          company_leader_fio:company_leader_fio, company_address:company_address,provider:provider,
          surname:surname,name:name,patronymic:patronymic,phone:phone,
          passport_series:passport_series,passport_number:passport_number,
          passport_issued_by:passport_issued_by,passport_date:passport_date,
          send_poa_email:send_poa_email
      })
    },
    allTerminal(idCity,nameTK){
        return instance().post('/geo/terminal/',{locality_id:idCity, operator:nameTK})
    }
}
export const userAPI = {
    /*Запрос на информацию о пользователе*/
    userFullInfo() {
        return instance().get('/users/me')
    },
    /*Изменение данных профиля пользователя*/
    updateInfoUser(last_name, first_name, patronymic, date_birth) {
        return instance().post('/users/me', {
            last_name: last_name,
            first_name: patronymic,
            patronymic: first_name,
            date_birth: date_birth
        })
    },
    /*Запорс на информацию о пользователе*/
    profileInfo() {
        return instance().get(`/profile/${Cookies.get('id_company')}/`)
    },
    /*Отпрвка ФИО*/
    updateFIOData(surname, name, middleName) {
        return instance().post('/users/me', {first_name: name, last_name: surname, patronymic: middleName})
    },
    /*Отправка кода*/
    activateUserPhone(phone, code) {
        return instance().post('/users/phone/verify', {phone, code})
    },
    /*Отправка номера на подтверждение*/
    registerPhone(phone) {
        return instance().post('/users/phone/register', {phone: phone})
    },
    resetPassword(uid, token, password) {
        return auth.post('/auth/users/reset_password_confirm/', {uid, token, new_password: password})
    },
    /*Отправка запроса на ссылки на восстановление пароля*/
    reloadPassword(email) {
        return auth.post('/auth/users/reset_password/', {email})
    },
    /*Запрос для удаления токена если пользователь выходит с сайта.*/
    deleteToken() {
        return instance().post('/auth/token/logout/')
    },
    /*Проверка действительности токена в cookies и на сервере.*/
    checkToken() {
        return instance().get('/auth/users/me/')
    },
    /*Запрос на авторизацию пользователя на сайте.*/
    authUser(password, login) {
        return auth.post('/auth/token/login/', {password, email: login})
    },
    /*Запрос на подверждение почты по ссылке.*/
    postActivationEmail(token, uid) {
        return auth.post('/auth/users/activation/', {uid, token})
    },
    /*Запрос на регистрацию пользователя*/
    getUsers(login, password) {
        return auth.post(`/auth/users/`, {email: password, password: login})
    },
    // getMe() {
    //     return instance.get(`auth/me`).then(response => {
    //         return response.data;
    //     })
    // },
    // deleteFollowed(id) {
    //     return instance.delete(`follow/${id}`).then(response => {
    //         return response.data;
    //     })
    // },
    // postFollowed(id) {
    //     return instance.post(`follow/${id}`).then(response => {
    //         return response.data;
    //     })
    // },
    // getProfileData(id) {
    //     return instance.get(`profile/` + id)
    // }
};
export const ProfileAPI = {
    // putStatus(status) {
    //     return instance.post('profile/status', {status: status})
    // },
    // getStatus(userID) {
    //     return instance.get(`profile/status/` + userID)
    // }
};
