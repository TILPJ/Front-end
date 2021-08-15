import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Empty from '../components/lectures/Empty';
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
  const [isAddLectureMonuted, setIsAddLectureMonuted] = useState(false);
  // const prevMyLecturesListLengthRef = useRef();

  const handleAddLectureMount = (mount = true) => {
    setIsAddLectureMonuted(mount);
  };

  // useEffect(() => {
  //   prevMyLecturesListLengthRef.current = myLecturesList.length;
  // });
  // const prevMyLecturesListLength = prevMyLecturesListLengthRef.current;
  useEffect(() => {
    dispatch(getMyList());
  }, []);

  let content = '';
  if (isAddLectureMonuted) {
    content = <AddLecture handleAddLectureMount={handleAddLectureMount} />;
  } else if (myLecturesList.length === 0) {
    content = <Empty handleAddLectureMount={handleAddLectureMount} />;
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
