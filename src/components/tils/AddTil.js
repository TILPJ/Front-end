import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { string } from 'prop-types';
import styled from 'styled-components';
import { StyledContent, StyledTitle } from './tils.styles';
import OptionArrow from '../../assets/lectures/option-arrow.svg';
import {
  getCoursesList,
  getChaptersList,
  addTil,
} from '../../modules/tils/tils';

const AddTilTitle = styled(StyledTitle)``;
const AddTilContent = styled(StyledContent)``;

const AddTil = ({ selectedFilter }) => {
  const dispatch = useDispatch();
  const { coursesList, chaptersList } = useSelector(({ tils }) => ({
    coursesList: tils.courses.list,
    chaptersList: tils.chapters.list,
  }));
  const [isCourseOptionsOpen, setIsCourseOptionsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({
    id: null,
    name: '선택해주세요',
  });
  const [isChapterOptionsOpen, setIsChapterOptionsOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState({
    id: null,
    name: '선택해주세요',
  });
  const [date, setDate] = useState('');
  const [memo, setMemo] = useState('');
  // eslint-disable-next-line no-unused-vars
  // const [newTil, setNewTil] = useState({
  //   date: '',
  //   mycourse: null,
  //   section: false,
  //   star: false,
  //   memo: '',
  // });
  const handleDateInput = e => {
    setDate(e.target.value);
  };
  const handleMemoInput = e => {
    setMemo(e.target.value);
  };

  const handleOptionsOpen = target => {
    if (target === 'course') {
      setIsCourseOptionsOpen(!isCourseOptionsOpen);
      setIsChapterOptionsOpen(false);
    }
    if (target === 'chapter') {
      setIsChapterOptionsOpen(!isChapterOptionsOpen);
      setIsCourseOptionsOpen(false);
    }
  };
  const handleOptionSelect = (category, id, name) => {
    if (category === 'course') {
      setSelectedCourse({
        id,
        name,
      });
      setIsCourseOptionsOpen(!isCourseOptionsOpen);
    }
    if (category === 'chapter') {
      setSelectedChapter({
        id,
        name,
      });
      setIsChapterOptionsOpen(!isChapterOptionsOpen);
    }
  };
  const handleTilAdd = () => {
    dispatch(
      addTil({
        date,
        mycourse: selectedCourse.id,
        section: selectedChapter.id,
        star: false,
        memo,
      })
    );
  };

  useEffect(() => {
    dispatch(getCoursesList(selectedFilter));
  }, [selectedFilter]);
  useEffect(() => {
    if (selectedCourse.id) {
      dispatch(getChaptersList(selectedCourse.id));
    }
  }, [selectedCourse.id]);

  let courseOptions = '';
  let chapterOptions = '';
  if (coursesList.length !== 0) {
    courseOptions = coursesList.map(course => (
      <li
        key={`${course.id}${course.instructor}`}
        onClick={() => handleOptionSelect('course', course.id, course.title)}
        onKeyDown={() => handleOptionSelect('course', course.id, course.title)}
      >
        {course.title}
      </li>
    ));
  }
  if (chaptersList.length !== 0) {
    chapterOptions = chaptersList.map(chapter => (
      <li
        key={`${chapter.id}${chapter.name}`}
        onClick={() => handleOptionSelect('chapter', chapter.id, chapter.name)}
        onKeyDown={() =>
          handleOptionSelect('chapter', chapter.id, chapter.name)
        }
      >
        {chapter.name}
      </li>
    ));
  }
  return (
    <>
      <AddTilTitle>
        <p>
          <span className="stress">TILUP을 등록해주세요</span>
        </p>
      </AddTilTitle>
      <AddTilContent>
        <div className="date content">
          <div className="label">날짜 선택</div>
          <input type="text" onInput={handleDateInput} value={date} />
        </div>
        <div className="lecture content">
          <div className="label">강의명 선택</div>
          <div
            className="selectBox"
            onClick={() => handleOptionsOpen('course')}
            onKeyDown={() => handleOptionsOpen('course')}
            role="button"
            tabIndex={0}
          >
            <div className="selected">{selectedCourse.name}</div>
            <img src={OptionArrow} alt="option arrow" className="arrow" />
          </div>
          <ul
            className="selectOptions"
            style={{ display: isCourseOptionsOpen ? 'block' : 'none' }}
          >
            {courseOptions}
          </ul>
        </div>
        <div className="chapter content">
          <div className="label">학습 챕터</div>
          <div
            className="selectBox"
            role="button"
            tabIndex={0}
            onClick={() => handleOptionsOpen('chapter')}
            onKeyDown={() => handleOptionsOpen('chapter')}
          >
            <div className="selected">{selectedChapter.name}</div>
            <img src={OptionArrow} alt="option arrow" className="arrow" />
          </div>
          <ul
            className="selectOptions"
            style={{ display: isChapterOptionsOpen ? 'block' : 'none' }}
          >
            {chapterOptions}
          </ul>
        </div>
        <div className="chapter content">
          <div className="label">Today I Learned</div>
          <textarea
            placeholder="TIL을 입력하세요"
            onInput={handleMemoInput}
            value={memo}
          />
        </div>
        <div className="buttonWrapper">
          <button type="button" onClick={handleTilAdd}>
            등록하기
          </button>
        </div>
      </AddTilContent>
    </>
  );
};

AddTil.propTypes = {
  selectedFilter: string.isRequired,
};

export default AddTil;
