import styled from 'styled-components';
import AddIcon from '../../assets/lectures/add-icon.svg';

const StyledEmpty = styled.div``;

const Empty = () => {
  return (
    <StyledEmpty>
      <div className="words">
        <p>학습중인 강의가 없습니다</p>
        <p>강의를 등록해주세요</p>
      </div>
      <div className="addIconWrapper">
        <img src={AddIcon} alt="add-icon" />
      </div>
    </StyledEmpty>
  );
};

export default Empty;
