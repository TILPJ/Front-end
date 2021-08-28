import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import debounce from 'lodash/debounce';
import { StyledTitle, StyledContent, StyledButton } from './auth.styles';
import ArrowDown from '../../../assets/common/drawer_arrow-down.svg';
import Verified from '../../../assets/common/drawer_email-check.svg';
import { initEmailExistence } from '../../../modules/auth/check';
import {
  switchToLogin,
  switchToRegister,
  switchToFindEmail,
} from '../../../modules/auth/process';
import { emailRegex } from '../../../lib/util/regex';

const AuthEntryTitle = styled(StyledTitle)`
  position: relative;
  z-index: 1;
`;
const AuthEntryContent = styled(StyledContent)`
  padding-top: 0;
  & > .toggleButton {
    position: relative;
    z-index: 1;
    padding: 0;
    padding-top: 79px;
    padding-bottom: 6px;
    width: 100%;
    background-color: #fff;
    border: 0;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }
  & > .toggleButton > .toggleImage {
    margin-bottom: 3px;
    margin-left: 15px;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    transform: ${({ isFormOpen }) =>
      isFormOpen ? 'rotateX(180deg)' : 'rotateX(0)'};
  }
  & > .emailForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 10px auto;
    transition: transform 0.5s ease-out;
    width: 340px;
    transform: ${({ isFormOpen }) =>
      isFormOpen ? 'translateY(0)' : 'translateY(-140%)'};
  }
  & > .emailForm > input {
    width: 340px;
    height: 40px;
    border: 0;
    border-bottom: 0.5px solid #e80000;
    font-size: 16px;
    font-weight: 300;
  }
  & > .emailForm > input:focus {
    outline: none;
  }
  & > .emailForm > .verified {
    position: absolute;
    top: 14px;
    right: 4px;
  }
  & > .emailForm > .requiredNotice {
    margin-top: 11.5px;
    width: 100%;
    font-weight: 300;
    color: ${({ isInputValueExist }) =>
      isInputValueExist ? '#fff' : '#e80000'};
  }
  & > .emailForm > .findEmailButton {
    margin-top: 16px;
    padding: 0;
    width: 100%;
    background-color: #fff;
    border: 0;
    font-weight: 300;
    font-size: 14px;
    color: #848484;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const AuthEntryButton = styled(StyledButton)`
  margin-top: 30px;
  font-weight: 300;
  font-size: 14px;
`;

const AuthEntry = ({ email, setEmail, handleEmailCheck }) => {
  const dispatch = useDispatch();
  const { isDrawerOpen, isEmailExist } = useSelector(({ drawer, check }) => ({
    isDrawerOpen: drawer.isDrawerOpen,
    isEmailExist: check.authEntry.isEmailExist,
  }));
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInputValueExist, setIsInputValueExist] = useState(false);
  const [isEmailFormat, setIsEmailFormat] = useState(false);
  useEffect(() => {
    if (email === '') {
      setIsInputValueExist(false);
    }
  });
  useEffect(() => {
    if (isDrawerOpen) {
      setEmail('');
      dispatch(initEmailExistence());
    } else {
      setIsFormOpen(false);
    }
  }, [isDrawerOpen]);
  useEffect(() => {
    if (isEmailExist === true && isDrawerOpen === true) {
      dispatch(switchToLogin());
    } else if (isEmailExist === false && isDrawerOpen === true) {
      dispatch(switchToRegister());
    }
  }, [isEmailExist]);

  const handleInputChangeDetect = e => {
    if (e.target.value) {
      setIsInputValueExist(true);
    } else {
      setIsInputValueExist(false);
    }
  };
  const debouncedCheckEmailFormat = debounce(() => {
    if (emailRegex.test(email)) {
      setIsEmailFormat(true);
    } else {
      setIsEmailFormat(false);
    }
  }, 500);
  const handleEmailInput = async e => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setIsEmailFormat(false);
      return;
    }
    debouncedCheckEmailFormat();
  };
  const handleFindEmailOpen = () => {
    dispatch(switchToFindEmail());
  };

  let disabled = true;
  if (isEmailFormat) {
    disabled = false;
  }
  return (
    <>
      <AuthEntryTitle>
        <p>
          <span className="stress">로그인 및 회원가입</span>을
        </p>
        <p>시작합니다.</p>
      </AuthEntryTitle>

      <AuthEntryContent
        isFormOpen={isFormOpen}
        isInputValueExist={isInputValueExist}
      >
        <button
          type="button"
          className="toggleButton"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          이메일로 시작하기
          <img src={ArrowDown} className="toggleImage" alt="arrow down" />
        </button>
        <div className="emailForm">
          <input
            placeholder="이메일"
            value={email}
            onInput={handleEmailInput}
            onChange={handleInputChangeDetect}
          />
          {isEmailFormat ? (
            <img className="verified" src={Verified} alt="verified" />
          ) : null}

          <div className="requiredNotice">필수 입력창입니다</div>
          <AuthEntryButton disabled={disabled} onClick={handleEmailCheck}>
            다음
          </AuthEntryButton>
          {!isEmailFormat ? (
            <button
              type="button"
              className="findEmailButton"
              onClick={handleFindEmailOpen}
            >
              이메일 주소가 기억나지 않아요
            </button>
          ) : null}
        </div>
      </AuthEntryContent>
    </>
  );
};

AuthEntry.propTypes = {
  email: string.isRequired,
  setEmail: func.isRequired,
  handleEmailCheck: func.isRequired,
};

export default AuthEntry;
