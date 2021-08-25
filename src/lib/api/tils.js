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
// export const getCoursesList = ({ siteName }) => {
//   return client({
//     method: 'get',
//     url: `/v1.0/mycourses/courses/?site=${siteName}`,
//   });
// };
export const getCoursesList = () => {
  return client({
    method: 'get',
    url: `/v1.0/mycourses`,
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
  });
};
export const getChaptersList = ({ courseId }) => {
  return client({
    method: 'get',
    url: `/v1.0/mycourses/sections/?course=${courseId}`,
  });
};
export const addTil = newTil => {
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
export const getTilDetail = ({ tilId }) => {
  return client({
    method: 'get',
    url: `/v1.0/tils/${tilId}`,
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
  });
};
export const editTil = ({ tilId, editedTil }) => {
  return client({
    method: 'put',
    url: `/v1.0/tils/${tilId}`,
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
    data: {
      ...editedTil,
    },
  });
};
export const deleteTil = ({ tilId }) => {
  return client({
    method: 'delete',
    url: `/v1.0/tils/${tilId}`,
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
  });
};
