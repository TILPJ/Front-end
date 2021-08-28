import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { func, number } from 'prop-types';
import styled from 'styled-components';
import { StyledContent, StyledTitle } from './tils.styles';
import { getTilDetail, editTil, deleteTil } from '../../modules/tils/tils';
import { ReactComponent as DeleteTilIcon } from '../../assets/tils/delete-icon.svg';

const EditTilTitle = styled(StyledTitle)``;
const EditTilContent = styled(StyledContent)`
  position: relative;
`;
const StyledDeleteTilIcon = styled(DeleteTilIcon)`
  position: absolute;
  right: 37px;
  bottom: 0;
  cursor: pointer;
`;

const EditTil = ({ handleTilDrawerOpen, openTilId }) => {
  const dispatch = useDispatch();
  const { savedTil } = useSelector(({ tils }) => ({
    savedTil: tils.tilDetail.detail,
  }));
  const [date, setDate] = useState('');
  const [course, setCourse] = useState('');
  const [chapter, setChapter] = useState('');
  const [memo, setMemo] = useState('');

  const handleDateInput = e => {
    setDate(e.target.value);
  };
  const handleMemoInput = e => {
    setMemo(e.target.value);
  };
  const handleTilEdit = () => {
    dispatch(
      editTil(openTilId, {
        date,
        mycourse: course,
        section: chapter,
        star: false,
        memo,
      })
    );
    handleTilDrawerOpen('');
  };
  const handleTilDelete = () => {
    dispatch(deleteTil(openTilId));
  };
  useEffect(() => {
    dispatch(getTilDetail(openTilId));
  }, []);
  useEffect(() => {
    setDate(savedTil.date);
    setCourse(savedTil.course_title);
    setChapter(savedTil.section_name);
    setMemo(savedTil.memo);
  }, [savedTil.date]);

  return (
    <>
      <EditTilTitle>
        <p>
          <span className="stress">TILUP을 수정하세요</span>
        </p>
      </EditTilTitle>
      <EditTilContent isButtonsCenter={false}>
        <div className="date content">
          <div className="label">날짜 선택</div>
          <input
            type="text"
            placeholder="yyyy-mm-dd"
            onInput={handleDateInput}
            value={date || ''}
          />
        </div>
        <div className="lecture content">
          <div className="label">강의명 선택</div>
          <div className="selectBox" role="button" tabIndex={0}>
            <div className="selected">{course || ''}</div>
          </div>
        </div>
        <div className="chapter content">
          <div className="label">학습 챕터</div>
          <div className="selectBox" role="button" tabIndex={0}>
            <div className="selected">{chapter || ''}</div>
          </div>
        </div>
        <div className="chapter content">
          <div className="label">Today I Learned</div>
          <textarea
            placeholder="TIL을 입력하세요"
            onInput={handleMemoInput}
            value={memo || ''}
          />
        </div>
        <div className="buttonWrapper">
          <button type="button" className="save" onClick={handleTilEdit}>
            저장하기
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => handleTilDrawerOpen('')}
          >
            취소
          </button>
        </div>
        <StyledDeleteTilIcon onClick={handleTilDelete} />
      </EditTilContent>
    </>
  );
};

EditTil.propTypes = {
  handleTilDrawerOpen: func.isRequired,
  openTilId: number.isRequired,
};

export default EditTil;
