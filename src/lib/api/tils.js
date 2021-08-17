import client from './client';

export const getTilList = ({ siteName }) => {
  console.log(siteName);
  if (siteName === '전체') {
    return client({
      method: 'get',
      url: '/v1.0/tils/',
      headers: {
        Authorization: `Token ${localStorage.getItem('userToken')}`,
      },
    });
  }
  return client({
    method: 'get',
    url: `/v1.0/tils/?site=${siteName}`,
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
  });
};
export const getMySitesList = () => {
  return client({
    method: 'get',
    url: '/v1.0/mycourses/',
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
  });
};
