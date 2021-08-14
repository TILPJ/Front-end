import styled from 'styled-components';
import Lecture from './Lecture';
import AddIcon from '../../assets/lectures/add-icon.svg';

const StyledLecturesList = styled.div`
  position: relative;
  width: 100%;
  & > .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px 25px;
  }
  & > .addIconWrapper {
    position: fixed;
    right: 266px;
    bottom: 138px;
    width: 84px;
    height: 84px;
    cursor: pointer;
    & > img {
      width: 100%;
    }
  }
`;

// eslint-disable-next-line react/prop-types
const LecturesList = ({ handleAddLectureMount, myLecturesList }) => {
  // eslint-disable-next-line react/prop-types
  const lectures = myLecturesList.map(lecture => {
    return (
      <Lecture
        key={`${lecture.id}${lecture.site_info.id}${lecture.course_info.id}`}
        site={lecture.site_info.name}
        lecture={lecture.course_info.title}
      />
    );
  });
  return (
    <StyledLecturesList>
      <div className="container">{lectures}</div>
      <div className="addIconWrapper">
        <img
          src={AddIcon}
          alt="add-icon"
          onClick={handleAddLectureMount}
          onKeyDown={handleAddLectureMount}
        />
      </div>
    </StyledLecturesList>
  );
};

export default LecturesList;
