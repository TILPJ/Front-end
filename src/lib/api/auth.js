import client from './client';

export const checkEmail = ({ email }) => {
  return client.get(`/v1.0/accounts/api/email/check/?email=${email}`);
};
export const register = ({
  email,
  firstPassword,
  secondPassword,
  phoneNumber,
  birthDate,
}) => {
  return client.post('/v1.0/accounts/api/registration/', {
    email,
    password1: firstPassword,
    password2: secondPassword,
    phone_number: phoneNumber,
    date_of_birth: birthDate,
  });
};
export const login = ({ email, password }) => {
  return client.post('/v1.0/accounts/api/login/', {
    email,
    password,
  });
};
