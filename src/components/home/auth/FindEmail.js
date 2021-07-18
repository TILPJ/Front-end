import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  StyledTitle,
  StyledContent,
  StyledInput,
  StyledButton,
} from './auth.styles';
import {
  switchToNewPassword,
  switchToNoUserInfo,
} from '../../../modules/auth/process';
import { findEmail } from '../../../modules/auth/check';
import Verified from '../../../assets/common/drawer_email-check.svg';
import { phoneNumberRegex, birthDateRegex } from '../../../lib/util/regex';

const FindEmailTitle = styled(StyledTitle)`
  font-size: 35px;
`;
const FindEmailContent = styled(StyledContent)`
  & > .findEmailForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const FindEmailInput = styled(StyledInput)``;
const FindEmailButton = styled(StyledButton)``;

const FindEmail = () => {
  const dispatch = useDispatch();
  const { isDrawerOpen, userEmail } = useSelector(({ drawer, check }) => ({
    isDrawerOpen: drawer.isDrawerOpen,
    userEmail: check.findEmail.userEmail,
  }));
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNumberVerified, setPhoneNumberVerified] = useState(false);
  const [birthDateVerified, setBirthDateVerified] = useState(false);

  const checkPhoneNumberFormat = () => {
    if (phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberVerified(true);
    } else {
      setPhoneNumberVerified(false);
    }
  };
  const checkBirthDateFormat = () => {
    if (birthDateRegex.test(birthDate)) {
      setBirthDateVerified(true);
    } else {
      setBirthDateVerified(false);
    }
  };

  const handleFindEmailSubmit = e => {
    e.preventDefault();
    dispatch(findEmail(phoneNumber, birthDate));
  };

  const handlePhoneNumberInput = e => {
    setPhoneNumber(e.target.value);
  };
  const handleBirthDateInput = e => {
    setBirthDate(e.target.value);
  };

  useEffect(() => {
    checkPhoneNumberFormat();
  }, [phoneNumber]);
  useEffect(() => {
    checkBirthDateFormat();
  }, [birthDate]);

  useEffect(() => {
    if (userEmail && isDrawerOpen === true) {
      dispatch(switchToNewPassword());
    } else if (userEmail === null && isDrawerOpen === true) {
      dispatch(switchToNoUserInfo());
    }
  }, [userEmail]);

  let disabled = true;
  if (phoneNumberVerified && birthDateVerified) {
    disabled = false;
  }
  return (
    <>
      <FindEmailTitle>
        <p>
          <span className="stress">생년월일 및</span>
        </p>
        <p>
          <span className="stress">휴대폰 번호</span>를 입력해주세요
        </p>
      </FindEmailTitle>
      <FindEmailContent>
        <form className="findEmailForm" onSubmit={handleFindEmailSubmit}>
          <FindEmailInput>
            <label htmlFor="phoneNumber">휴대폰번호</label>
            <input
              type="text"
              id="phoneNumer"
              placeholder="휴대폰 번호 ('-'제외)"
              value={phoneNumber}
              onInput={handlePhoneNumberInput}
            />
            {phoneNumberVerified ? (
              <img className="verified" src={Verified} alt="verified" />
            ) : null}
          </FindEmailInput>
          <FindEmailInput>
            <label htmlFor="birtdate">생년월일</label>
            <input
              type="text"
              id="birthdate"
              placeholder="예:891203"
              value={birthDate}
              onInput={handleBirthDateInput}
            />
            {birthDateVerified ? (
              <img className="verified" src={Verified} alt="verified" />
            ) : null}
          </FindEmailInput>
          <FindEmailButton disabled={disabled} type="submit">
            다음
          </FindEmailButton>
        </form>
      </FindEmailContent>
    </>
  );
};

export default FindEmail;
