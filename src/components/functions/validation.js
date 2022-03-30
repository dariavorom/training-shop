export const validationEmail = (values) => {
    const errors = {};

    if (!values.email) errors.email = 'Введите email';

    else if (values.email
        && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) errors.email = 'Некорректный email';

    return errors;
}
