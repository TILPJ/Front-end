/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ReactComponent as AddTil } from '../../assets/lectures/add-til.svg';
import { ReactComponent as MoveToTil } from '../../assets/lectures/move-to-til.svg';
import { ReactComponent as DeleteLecture } from '../../assets/lectures/delete-lecture.svg';
import tooltipPath from '../../assets/lectures/tooltip.svg';

const StyledDetailButton = styled.div`
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
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

const DetailButton = ({
  button,
  myLectureId,
  site,
  handleGoToTils,
  handleLectureDelete,
}) => {
  const history = useHistory();
  const handleButtonHover = (e, target) => {
    e.stopPropagation();
  };

  let icon = '';
  let tooltip = '';
  if (button === 'add') {
    icon = (
      <AddTil
        onClick={() => handleGoToTils(site)}
        onMouseEnter={e => handleButtonHover(e, 'add')}
        onMouseLeave={e => handleButtonHover(e, 'add')}
      />
    );
    tooltip = 'TIL 추가하기';
  } else if (button === 'link') {
    icon = (
      <MoveToTil
        onMouseEnter={e => handleButtonHover(e, 'link')}
        onMouseLeave={e => handleButtonHover(e, 'link')}
      />
    );
    tooltip = ' TIL 목록으로 이동';
  } else if (button === 'delete') {
    icon = (
      <DeleteLecture
        onClick={() => handleLectureDelete(myLectureId)}
        onMouseEnter={e => handleButtonHover(e, 'delete')}
        onMouseLeave={e => handleButtonHover(e, 'delete')}
      />
    );
    tooltip = '강의 삭제하기';
  }

  return (
    <StyledDetailButton>
      <div className="tooltip">{tooltip}</div>
      {icon}
    </StyledDetailButton>
  );
};
export default DetailButton;
