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
        <p>??????????????????</p>
        <p>
          <span className="stress">????????? ???????????????.</span>
        </p>
      </RegisterTitle>
      <RegisterContent>
        <form className="registerForm" onSubmit={handleRegisterSubmit}>
          <RegisterInput>
            <label htmlFor="email">?????????</label>
            <input readOnly type="email" id="email" value={email} />
            <img className="verified" src={Verified} alt="verified" />
          </RegisterInput>
          <RegisterInput>
            <label htmlFor="password1">????????????</label>
            <input
              type="password"
              id="password1"
              placeholder="??????,?????? ?????? (8?????????)"
              value={firstPassword}
              onInput={handleFirstPasswordInput}
            />
            {firstPasswordVerified ? (
              <img className="verified" src={Verified} alt="verified" />
            ) : null}
          </RegisterInput>
          <RegisterInput>
            <label htmlFor="password2">???????????? ??????</label>
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
            <label htmlFor="phoneNumer">???????????????</label>
            <input
              type="text"
              id="phoneNumer"
              placeholder="????????? ?????? ('-'??????)"
              value={phoneNumber}
              onInput={handlePhoneNumberInput}
            />
            {phoneNumberVerified ? (
              <img className="verified" src={Verified} alt="verified" />
            ) : null}
          </RegisterInput>
          <RegisterInput>
            <label htmlFor="birtdate">????????????</label>
            <input
              type="text"
              id="birthdate"
              placeholder="???:891203"
              value={birthDate}
              onInput={handleBirthDateInput}
            />
            {birthDateVerified ? (
              <img className="verified" src={Verified} alt="verified" />
            ) : null}
          </RegisterInput>
          <StyledTerms>
            <p>
              <a href="/">????????????</a>, <a href="/">?????????????????? ??? ??????</a>,
              <a href="/">???????????? ?????? ??????</a>???
            </p>
            <p>?????????????????? ?????? ???????????????.</p>
          </StyledTerms>
          <RegisterButton disabled={disabled} type="submit">
            ????????????
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
