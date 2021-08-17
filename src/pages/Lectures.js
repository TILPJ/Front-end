import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import EmptyList from '../components/common/EmptyList';
import LecturesList from '../components/lectures/LecturesList';
import AddLecture from '../components/lectures/AddLecture';
import { getMyList } from '../modules/lectures/lectures';

const StyledLectures = styled.main`
  position: relative;
  padding: 80px 282px 100px 320px;
  height: 100%;
  min-height: 100vh;
  background: #f4f7fc;
`;

const Lectures = () => {
  const dispatch = useDispatch();
  const { myLecturesList } = useSelector(({ lectures }) => ({
    myLecturesList: lectures.myLectures.list,
  }));
  const [isAddLectureMounted, setIsAddLectureMounted] = useState(false);

  const handleAddLectureMount = (mount = true) => {
    setIsAddLectureMounted(mount);
  };

  useEffect(() => {
    dispatch(getMyList());
  }, []);

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
