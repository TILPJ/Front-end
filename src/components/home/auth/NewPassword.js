import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  changePassword,
  initIsPasswordChanged,
} from '../../../modules/auth/user';
import { switchToAuthEntry } from '../../../modules/auth/process';
import {
  StyledTitle,
  StyledContent,
  StyledInput,
  StyledButton,
} from './auth.styles';
import { passwordRegex } from '../../../lib/util/regex';
import Verified from '../../../assets/common/drawer_email-check.svg';

const NewPasswordTitle = styled(StyledTitle)``;
const NewPasswordContent = styled(StyledContent)`
  & > .newPasswordForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const NewPasswordInput = styled(StyledInput)``;
const NewPasswordButton = styled(StyledButton)``;

const NewPassword = () => {
  const { email, isPasswordChanged } = useSelector(({ check, user }) => ({
    email: check.findEmail.userEmail,
    isPasswordChanged: user.isPasswordChanged,
  }));
  const dispatch = useDispatch();

  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [firstPasswordVerified, setFirstPasswordVerified] = useState(false);
  const [secondPasswordVerified, setSecondPasswordVerified] = useState(false);
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

  const handleNewPasswordSubmit = e => {
    e.preventDefault();
    dispatch(changePassword(email, firstPassword, secondPassword));
  };

  const handleFirstPasswordInput = e => {
    setFirstPassword(e.target.value);
  };
  const handleSecondPasswordInput = e => {
    setSecondPassword(e.target.value);
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
    dispatch(initIsPasswordChanged());
  }, []);
  useEffect(() => {
    if (isPasswordChanged) {
      dispatch(switchToAuthEntry());
    }
  }, [isPasswordChanged]);

  let disabled = true;
  if (firstPasswordVerified && secondPasswordVerified) {
    disabled = false;
  }
  return (
    <>
      <NewPasswordTitle>
        <p>
          <span className="stress">????????? ??????</span>??? ???????????????.
        </p>
        <p>????????? ???????????????</p>
        <p>??????????????????</p>
      </NewPasswordTitle>
      <NewPasswordContent>
        <form className="newPasswordForm" onSubmit={handleNewPasswordSubmit}>
          <NewPasswordInput>
            <label htmlFor="email">?????????</label>
            <input readOnly type="email" id="email" value={email} />
            <img className="verified" src={Verified} alt="verified" />
          </NewPasswordInput>
          <NewPasswordInput>
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
          </NewPasswordInput>
          <NewPasswordInput>
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
          </NewPasswordInput>
          <NewPasswordButton disabled={disabled} type="submit">
            ?????????
          </NewPasswordButton>
        </form>
      </NewPasswordContent>
    </>
  );
};

export default NewPassword;
