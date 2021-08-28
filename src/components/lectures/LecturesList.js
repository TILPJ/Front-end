import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Lecture from './Lecture';
import AddIcon from '../../assets/lectures/add-icon.svg';
import { deleteLecture } from '../../modules/lectures/lectures';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLectureDelete = myLectureId => {
    dispatch(deleteLecture(myLectureId));
  };
  const handleGoToTils = site => {
    history.push({ pathname: '/tils', state: { filter: site } });
  };

  // eslint-disable-next-line react/prop-types
  const lectures = myLecturesList.map(lecture => {
    return (
      <Lecture
        key={`${lecture.id}${lecture.site_info.id}${lecture.course_info.id}`}
        myLectureId={lecture.id}
        siteId={lecture.site_info.id}
        site={lecture.site_info.name}
        instructor={lecture.course_info.instructor}
        lecture={lecture.course_info.title}
        handleLectureDelete={handleLectureDelete}
        handleGoToTils={handleGoToTils}
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
