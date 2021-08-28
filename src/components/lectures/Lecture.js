/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import styled from 'styled-components';
import { string, number, func } from 'prop-types';
import DetailButton from './DetailButton';

const StyledLecture = styled.div`
  position: relative;
  width: 310px;
  height: 232px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  cursor: pointer;
  overflow-y: hidden;
  & > .siteName {
    display: flex;
    flex-direction: ${({ isHover }) => (isHover ? 'column' : '')};
    justify-content: ${({ isHover }) => (isHover ? 'center' : '')};
    align-items: center;
    padding: ${({ isHover }) => (isHover ? '0 30px' : '0 0 0 18px')};
    height: ${({ isHover }) => (isHover ? '100%' : '60px')};
    border-radius: ${({ isHover }) => (isHover ? '10px' : '10px 10px 0 0')};
    background-color: ${({ siteId }) =>
      siteId === 1
        ? '#74c49b'
        : siteId === 2
        ? '#FFC675'
        : siteId === 3
        ? '#333333'
        : '#5624d0'};
    font-size: 27px;
    color: #fff;
    transition: all 0.2s ease-out;
    & > .subLectureName {
      margin-top: 13px;
      font-size: 17px;
    }
  }
  & > .lectureName {
    padding: 40px 18px;
    font-size: 20px;
  }
  & > .detail {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    padding: 0 25px 35px 18px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    & > .instructor {
      max-width: 160px;
    }
  }
`;

const Lecture = ({
  myLectureId,
  siteId,
  site,
  instructor,
  lecture,
  handleLectureDelete,
  handleGoToTils,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseHover = value => {
    setIsHover(value);
  };

  return (
    <StyledLecture
      isHover={isHover}
      siteId={siteId}
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
    >
      {isHover && (
        <div className="detail">
          <div className="instructor">{instructor}</div>

          <div className="buttons">
            <DetailButton
              site={site}
              button="add"
              handleGoToTils={handleGoToTils}
            />
            {/* <DetailButton button="link" /> */}
            <DetailButton
              button="delete"
              myLectureId={myLectureId}
              handleLectureDelete={handleLectureDelete}
            />
          </div>
        </div>
      )}
      <div className="siteName">
        <p>{site}</p>
        {isHover && <p className="subLectureName">{lecture}</p>}
      </div>
      <div className="lectureName">{lecture}</div>
    </StyledLecture>
  );
};
Lecture.propTypes = {
  myLectureId: number.isRequired,
  siteId: number.isRequired,
  site: string.isRequired,
  instructor: string.isRequired,
  lecture: string.isRequired,
  handleLectureDelete: func.isRequired,
  handleGoToTils: func.isRequired,
};
export default Lecture;
