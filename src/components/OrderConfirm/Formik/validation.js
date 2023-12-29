import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Не може мати числові значення')
      .min(2, 'Занадто коротке імʼя')
      .max(70, 'Занадто довге імʼя')
      .required('Обовʼязкове поле'),
    lastName: Yup.string()
      .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Не може мати числові значення')
      .min(2, 'Занадто коротке прізвище')
      .max(70, 'Занадто довге прізвище')
      .required('Обовʼязкове поле'),
    age: Yup.string()
      .matches(/[0-9]$/, 'Повинно бути числове значення')
      .required('Обовʼязкове поле'), 
    phone: Yup.string()
      .matches(/[0-9]$/, 'Не правильно введенний номер')
      .required('Обовʼязкове поле'),
    address: Yup.string()
    .required('Обовʼязкове поле'), 
  });
