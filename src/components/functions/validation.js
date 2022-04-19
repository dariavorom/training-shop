export const validationEmail = (values) => {
    const errors = {};

    if (!values.email_main) errors.email_main = 'Введите email';

    if (values.email_main
        && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_main)
    ) errors.email = 'Некорректный email';

    return errors;
}
export const validationText = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Введите имя';

    if (!values.text) errors.text = 'Напишите отзыв';

    return errors;
}

export const validationDelivery = (values) => {
    const errors = {};
    //email
    if (!values.email) errors.email = 'Поле должно быть заполнено';
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) errors.email = 'Некорректный email';

    //phone
    if (!values.phone || !values.phone.replace(/[\s+375()_]/g, '').length) errors.phone = 'Поле должно быть заполнено';
    if (values.phone) {
        let phone = values.phone.replace(/[\s()]/g, '')
        if (!/^(\+375)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(phone))
            errors.phone = 'Некорректный номер телефона!'
    }

    //country
    if (!values.country) errors.country = 'Поле должно быть заполнено';


    if (values.deliveryMethod !== 'store pickup') {
        //city
        if (!values.city) errors.city = 'Поле должно быть заполнено';
        //street
        if (!values.street) errors.street = 'Поле должно быть заполнено';
        //house
        if (!values.house) errors.house = 'Поле должно быть заполнено';
        //postcode
        if (values.deliveryMethod === 'pickup from post offices') {
            if (!values.postcode || !values.postcode.replace(/[\s_BY]/g, '')) errors.postcode = 'Поле должно быть заполнено';
            // else if (values.postcode.replace(/[\s_BY]/g, '').length !== 6) errors.postcode = 'Проверьте индекс';
        }
    }
    if (values.deliveryMethod === 'store pickup') {
        if (!values.storeAddress) errors.storeAddress = 'Поле должно быть заполнено';
    }
    //agree
    if (values.agree === false) errors.agree = 'Вы должны согласиться на обработку личной информации';

    return errors;
}

export const validationPayment = (values) => {
    const errors = {};
    if (values.paymentMethod === 'visa' || values.paymentMethod === 'mastercard') {
        if (!values.card || !values.card.replace(/[\s_]/g, '')) errors.card = 'Поле должно быть заполнено';
        if (values.card.replace(/[\s_]/g, '').length !== 16) errors.card = 'Проверьте правильность введенных данных';

        if (!values.cardDate || !values.cardDate.replace(/[_/]/g, '')) errors.cardDate = 'Поле должно быть заполнено';
        if (values.cardDate) {
            const dateArr = values.cardDate.split('/');
            const month = dateArr[0].replace(/[_/]/g, '');
            const year = (20 + dateArr[1].replace(/[_/]/g, ''));
            if (month.length !== 2 || month > 12) errors.cardDate = 'Неверно введен месяц';
            if (year.length !== 4) errors.cardDate = 'Неверно введен год';
            else {
                const startDate = new Date();
                const valueDate = new Date(+year, +month);
                if (startDate > valueDate) errors.cardDate = 'Проверьте срок действия';
            }

        }
        if (!values.cardCVV) errors.cardCVV = 'Поле должно быть заполнено';
        if (values.cardCVV.length < 3) errors.cardCVV = 'Введите не меньше 3 цифр';
        if (values.cardCVV.length > 4) errors.cardCVV = 'Введите не больше 4 цифр';
        if (!values.cardCVV.replace(/\D+/g, '')) errors.cardCVV = 'Только цифры';
    }
    if (values.paymentMethod === 'paypal') {
        if (!values.cashEmail) errors.cashEmail = 'Поле должно быть заполнено';
        if (values.cashEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.cashEmail)) errors.cashEmail = 'Некорректный email';
    }
    return errors;
}