import styled from 'styled-components';
import { string } from 'prop-types';

const StyledLecture = styled.div`
  width: 310px;
  height: 232px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  cursor: pointer;
  & > .siteName {
    display: flex;
    align-items: center;
    padding-left: 18px;
    height: 60px;
    border-radius: 10px 10px 0 0;
    background-color: #74c49b;
    font-size: 27px;
    color: #fff;
  }
  & > .lectureName {
    padding: 40px 18px;
    font-size: 20px;
  }
`;

const Lecture = ({ site, lecture }) => {
  return (
    <StyledLecture>
      <div className="siteName">{site}</div>
      <div className="lectureName">{lecture}</div>
    </StyledLecture>
  );
};
Lecture.propTypes = {
  site: string.isRequired,
  lecture: string.isRequired,
};
export default Lecture;
