import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { number } from 'prop-types';
import styled from 'styled-components';
import { StyledContent, StyledTitle } from './tils.styles';
import OptionArrow from '../../assets/lectures/option-arrow.svg';
import { getTilDetail } from '../../modules/tils/tils';

const EditTilTitle = styled(StyledTitle)``;
const EditTilContent = styled(StyledContent)``;

const EditTil = ({ openTilId }) => {
  const dispatch = useDispatch();
  const { savedTil } = useSelector(({ tils }) => ({
    savedTil: tils.tilDetail.detail,
  }));
  // const [date, setDate] = useState('');
  // const [memo, setMemo] = useState('');

  // const handleDateInput = e => {
  //   setDate(e.target.value);
  // };
  // const handleMemoInput = e => {
  //   setMemo(e.target.value);
  // };
  useEffect(() => {
    dispatch(getTilDetail(openTilId));
  }, []);
  console.log(savedTil);
  return (
    <>
      <EditTilTitle>
        <p>
          <span className="stress">TILUP을 수정하세요</span>
        </p>
      </EditTilTitle>
      <EditTilContent>
        <div className="date content">
          <div className="label">날짜 선택</div>
          <input
            type="text"
            placeholder="yyyy-mm-dd"
            // onInput={handleDateInput}
            value={savedTil.date}
          />
        </div>
        <div className="lecture content">
          <div className="label">강의명 선택</div>
          <div
            className="selectBox"
            // onClick={() => handleOptionsOpen('course')}
            // onKeyDown={() => handleOptionsOpen('course')}
            role="button"
            tabIndex={0}
          >
            <div className="selected">{savedTil.course_title}</div>
            <img src={OptionArrow} alt="option arrow" className="arrow" />
          </div>
          <ul
            className="selectOptions"
            style={{ display: 'none' }}
            // style={{ display: isCourseOptionsOpen ? 'block' : 'none' }}
          >
            <li>강의 옵션들</li>
            {/* {courseOptions} */}
          </ul>
        </div>
        <div className="chapter content">
          <div className="label">학습 챕터</div>
          <div
            className="selectBox"
            role="button"
            tabIndex={0}
            // onClick={() => handleOptionsOpen('chapter')}
            // onKeyDown={() => handleOptionsOpen('chapter')}
          >
            <div className="selected">{savedTil.section_name}</div>
            <img src={OptionArrow} alt="option arrow" className="arrow" />
          </div>
          <ul
            className="selectOptions"
            style={{ display: 'none' }}
            // style={{ display: isChapterOptionsOpen ? 'block' : 'none' }}
          >
            <li>챕터 옵션들</li>
            {/* {chapterOptions} */}
          </ul>
        </div>
        <div className="chapter content">
          <div className="label">Today I Learned</div>
          <textarea
            placeholder="TIL을 입력하세요"
            // onInput={handleMemoInput}
            value={savedTil.memo}
          />
        </div>
      </EditTilContent>
    </>
  );
};

EditTil.propTypes = {
  openTilId: number.isRequired,
};

export default EditTil;
