/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { string, number } from 'prop-types';
import { ReactComponent as AddTil } from '../../assets/lectures/add-til.svg';
import { ReactComponent as MoveToTil } from '../../assets/lectures/move-to-til.svg';
import { ReactComponent as DeleteLecture } from '../../assets/lectures/delete-lecture.svg';
import tooltipPath from '../../assets/lectures/tooltip.svg';
import { deleteLecture } from '../../modules/lectures/lectures';

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
    & > .buttons {
      & > .button {
        position: relative;
        width: 32px;
        height: 32px;
        & > .tooltip {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 4px;
          left: -100px;
          width: 90px;
          height: 24px;
          background-image: url(${tooltipPath});
          font-weight: 500;
          font-size: 9px;
        }
      }
      & > .button:not(:last-child) {
        margin-bottom: 6px;
        width: 32px;
        height: 32px;
      }
    }
  }
`;

const Lecture = ({ myLectureId, siteId, site, instructor, lecture }) => {
  const dispatch = useDispatch();

  const [isHover, setIsHover] = useState(false);

  const handleMouseHover = value => {
    setIsHover(value);
  };
  const handleLectureDelete = () => {
    dispatch(deleteLecture(myLectureId));
  };
  const handleButtonHover = (e, target) => {
    e.stopPropagation();
    console.log(target);
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
          <div className="instructor"> {instructor}</div>
          <div className="buttons">
            <div className="button">
              <div className="tooltip" style={{ display: 'none' }}>
                TIL 추가하기
              </div>
              <AddTil
                onMouseEnter={e => handleButtonHover(e, 'add')}
                onMouseLeave={e => handleButtonHover(e, 'add')}
              />
            </div>
            <div className="button">
              <div className="tooltip" style={{ display: 'none' }}>
                TIL 목록으로 이동
              </div>
              <MoveToTil
                onMouseEnter={e => handleButtonHover(e, 'link')}
                onMouseLeave={e => handleButtonHover(e, 'link')}
              />
            </div>
            <div className="button">
              <div className="tooltip" style={{ display: 'none' }}>
                강의 삭제하기
              </div>
              <DeleteLecture
                onClick={handleLectureDelete}
                onMouseEnter={e => handleButtonHover(e, 'delete')}
                onMouseLeave={e => handleButtonHover(e, 'delete')}
              />
            </div>
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
};
export default Lecture;
