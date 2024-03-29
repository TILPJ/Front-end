import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { string } from 'prop-types';
import { register } from '../../../modules/auth/user';
import {
  StyledTitle,
  StyledContent,
  StyledInput,
  StyledButton,
} from './auth.styles';
import Verified from '../../../assets/common/drawer_email-check.svg';
import {
  passwordRegex,
  phoneNumberRegex,
  birthDateRegex,
} from '../../../lib/util/regex';

const RegisterTitle = styled(StyledTitle)``;
const RegisterContent = styled(StyledContent)`
  & > .registerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
  }
`;
const RegisterButton = styled(StyledButton)``;
const RegisterInput = styled(StyledInput)``;
const StyledTerms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.3px;
  font-weight: 300;
  font-size: 12px;
  color: #333;
  & > p {
    line-height: 1rem;
  }
  & > p > a {
    color: #333;
  }
`;

const Register = ({ email }) => {
  const dispatch = useDispatch();
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [firstPasswordVerified, setFirstPasswordVerified] = useState(false);
  const [secondPasswordVerified, setSecondPasswordVerified] = useState(false);
  const [phoneNumberVerified, setPhoneNumberVerified] = useState(false);
  const [birthDateVerified, setBirthDateVerified] = useState(false);

  const checkFirstPasswordFormat = () => {
    if (passwordRegex.test(firstPassword)) {
      setFirstPasswordVerified(true);
    } else {
      setFirstPasswordVerified(false);
    }
  };
  const comparePasswords = () => {
    if (firstPasswordVerified && firstPassword === secondPassword) {
      setSecondPasswordVerified(true);
    } else {
      setSecondPasswordVerified(false);
    }
  };
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
  const handleRegisterSubmit = e => {
    e.preventDefault();
    dispatch(
      register(email, firstPassword, secondPassword, phoneNumber, birthDate)
    );
  };

  const handleFirstPasswordInput = e => {
    setFirstPassword(e.target.value);
  };
  const handleSecondPasswordInput = e => {
    setSecondPassword(e.target.value);
  };
  const handlePhoneNumberInput = e => {
    setPhoneNumber(e.target.value);
  };
  const handleBirthDateInput = e => {
    setBirthDate(e.target.value);
  };

  useEffect(() => {
    checkFirstPasswordFormat();
    comparePasswords();
    setSecondPassword('');
  }, [firstPassword]);
  useEffect(() => {
    comparePasswords();
  }, [secondPassword]);
  useEffect(() => {
    checkPhoneNumberFormat();
  }, [phoneNumber]);
  useEffect(() => {
    checkBirthDateFormat();
  }, [birthDate]);

  let disabled = true;
  if (
    firstPasswordVerified &&
    secondPasswordVerified &&
    phoneNumberVerified &&
    birthDateVerified
  ) {
    disabled = false;
  }
  return (
    <>
      <RegisterTitle>
        <p>처음이시군요</p>
        <p>
          <span className="stress">가입을 진행합니다.</span>
        </p>
      </RegisterTitle>
      <RegisterContent>
        <form className="registerForm" onSubmit={handleRegisterSubmit}>
          <RegisterInput>
            <label htmlFor="email">아이디</label>
            <input readOnly type="email" id="email" value={email} />
            <img className="verified" src={Verified} alt="verified" />
          </RegisterInput>
          <RegisterInput>
            <label htmlFor="password1">비밀번호</label>
            <input
              type="password"
              id="password1"
              placeholder="숫자,문자 조합 (8자이상)"
              value={firstPassword}
              onInput={handleFirstPasswordInput}
            />
            {firstPasswordVerified ? (
              <img className="verified" src={Verified} alt="verified" />
            ) : null}
          </RegisterInput>
          <RegisterInput>
            <label htmlFor="password2">비밀번호 확인</label>
            <input
              disabled={!firstPasswordVerified}
              type="password"
              id="password2"
              value={secondPassword}
              onInput={handleSecondPasswordInput}
            />
            {secondPasswordVerified ? (
              <img className="verified" src={Verified} alt="verified" />
            ) : null}
          </RegisterInput>
          <RegisterInput>
            <label htmlFor="phoneNumer">휴대폰번호</label>
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
          </RegisterInput>
          <RegisterInput>
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
          </RegisterInput>
          <StyledTerms>
            <p>
              <a href="/">이용약관</a>, <a href="/">개인정보수집 및 이용</a>,
              <a href="/">개인정보 제공 내용</a>을
            </p>
            <p>확인하였으며 이에 동의합니다.</p>
          </StyledTerms>
          <RegisterButton disabled={disabled} type="submit">
            가입완료
          </RegisterButton>
        </form>
      </RegisterContent>
    </>
  );
};

Register.propTypes = {
  email: string.isRequired,
};

export default Register;
