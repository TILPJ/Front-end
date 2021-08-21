import client from './client';

export const getTilList = ({ siteName }) => {
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
export const getCoursesList = ({ siteName }) => {
  return client({
    method: 'get',
    url: `/v1.0/mycourses/courses/?site=${siteName}`,
  });
};
export const getChaptersList = ({ courseId }) => {
  return client({
    method: 'get',
    url: `/v1.0/mycourses/sections/?course=${courseId}`,
  });
};
export const addTil = newTil => {
  console.log(newTil);
  return client({
    method: 'post',
    url: '/v1.0/tils/',
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
    data: {
      ...newTil,
    },
  });
};
