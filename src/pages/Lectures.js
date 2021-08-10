import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Empty from '../components/lectures/Empty';
import { getList } from '../modules/lectures/lectures';

const StyledLectures = styled.main`
  padding: 80px 282px 0 320px;
  height: 100vh;
  background: #f4f7fc;
`;

const Lectures = () => {
  const dispatch = useDispatch();
  const { lecturesList } = useSelector(({ lectures }) => ({
    lecturesList: lectures.lecturesList,
  }));

  useEffect(() => {
    dispatch(getList());
  }, []);

  console.log(lecturesList);

  let content = '';
  if (lecturesList.length === 0) {
    content = <Empty />;
  }

  return <StyledLectures>{content}</StyledLectures>;
};

export default Lectures;
