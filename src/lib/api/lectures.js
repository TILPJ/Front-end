import client from './client';

// eslint-disable-next-line import/prefer-default-export
export const getList = () => {
  return client({
    method: 'get',
    url: '/v1.0/mycourses/',
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
  });
};
