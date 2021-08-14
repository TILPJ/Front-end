import client from './client';

export const getMyList = () => {
  return client({
    method: 'get',
    url: '/v1.0/mycourses/',
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
  });
};

export const getSitesList = () => {
  return client({
    method: 'get',
    url: '/v1.0/mycourses/sites/',
  });
};

export const getLecturesList = ({ site }) => {
  return client({
    method: 'get',
    url: `/v1.0/mycourses/courses/?site=${site}`,
  });
};

export const registerMyNewLecture = ({ siteId, lectureId }) => {
  return client({
    method: 'post',
    url: '/v1.0/mycourses/',
    headers: {
      Authorization: `Token ${localStorage.getItem('userToken')}`,
    },
    data: {
      site: siteId,
      course: lectureId,
    },
  });
};
