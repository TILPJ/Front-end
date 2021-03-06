import styled from 'styled-components';
import { func } from 'prop-types';
import AddIcon from '../../assets/lectures/add-icon.svg';

const StyledEmptyList = styled.div`
  position: absolute;
  top: 290px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  font-size: 30px;
  transform: translateX(-50%);
  & > .words {
    text-align: center;
    line-height: 1.6;
  }
  & > .addIconWrapper {
    width: 57px;
    height: 57px;
    cursor: pointer;
  }
`;

const EmptyList = ({ handleAddLectureMount, handleLectureAdd }) => {
  return (
    <StyledEmptyList>
      <div className="words">
        <p>학습중인 강의가 없습니다</p>
        <p>강의를 등록해주세요</p>
      </div>
      <div className="addIconWrapper">
        <img
          src={AddIcon}
          alt="add-icon"
          onClick={handleAddLectureMount || handleLectureAdd}
          onKeyDown={handleAddLectureMount || handleLectureAdd}
        />
      </div>
    </StyledEmptyList>
  );
};

EmptyList.propTypes = {
  handleAddLectureMount: func,
  handleLectureAdd: func,
};
EmptyList.defaultProps = {
  handleAddLectureMount: null,
  handleLectureAdd: null,
};

export default EmptyList;
