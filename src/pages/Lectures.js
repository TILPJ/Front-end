import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import EmptyList from '../components/common/EmptyList';
import LecturesList from '../components/lectures/LecturesList';
import AddLecture from '../components/lectures/AddLecture';
import { getMyList } from '../modules/lectures/lectures';

const StyledLectures = styled.main`
  box-sizing: border-box;
  position: relative;
  padding: 80px 282px 100px 320px;
  width: 1920px;
  height: 100%;
  min-height: 100vh;
  background: #f4f7fc;
`;

const Lectures = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { myLecturesList, userToken } = useSelector(({ lectures, user }) => ({
    myLecturesList: lectures.myLectures.list,
    userToken: user.token,
  }));

  const [isAddLectureMounted, setIsAddLectureMounted] = useState(false);

  const handleAddLectureMount = (mount = true) => {
    setIsAddLectureMounted(mount);
  };

  useEffect(() => {
    dispatch(getMyList());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!userToken) {
      history.push('/');
    }
  }, [userToken]);

  let content = '';
  if (isAddLectureMounted) {
    content = <AddLecture handleAddLectureMount={handleAddLectureMount} />;
  } else if (!myLecturesList || myLecturesList.length === 0) {
    content = <EmptyList handleAddLectureMount={handleAddLectureMount} />;
  } else {
    content = (
      <LecturesList
        handleAddLectureMount={handleAddLectureMount}
        myLecturesList={myLecturesList}
      />
    );
  }

  return <StyledLectures>{content}</StyledLectures>;
};

export default Lectures;
