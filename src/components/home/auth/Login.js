import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { string } from 'prop-types';
import { StyledTitle, StyledContent, StyledButton } from './auth.styles';
import { login } from '../../../modules/auth/user';
import Verified from '../../../assets/common/drawer_email-check.svg';

const LoginTitle = styled(StyledTitle)``;
const LoginContent = styled(StyledContent)``;
const LoginButton = styled(StyledButton)`
  margin-top: 33px;
`;
const StyledInput = styled.div`
  position: relative;
  margin-bottom: 15.2px;
  width: 340px;
  overflow: hidden;
  & > label {
    display: block;
    font-weight: 300;
    font-size: 14px;
    color: #20160f;
  }
  & > input {
    padding-left: 15px;
    width: 100%;
    height: 36.5px;
    border: 0;
    border-bottom: 0.5px solid #333;
    font-weight: 300;
    font-size: 16px;
    color: #333;
    outline: none;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #c9c9c9;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #c9c9c9;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #c9c9c9;
    }
  }
  & > .verified {
    position: absolute;
    bottom: 14px;
    right: 5px;
  }
`;
const Login = ({ email }) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  let disabled = true;
  if (password) {
    disabled = false;
  }
  return (
    <>
      <LoginTitle>
        <p>
          <span className="stress">로그인 및 회원가입</span>을
        </p>
        <p>시작합니다.</p>
      </LoginTitle>
      <LoginContent>
        <form className="loginForm" onSubmit={handleLogin}>
          <StyledInput>
            <label htmlFor="email">아이디</label>
            <input readOnly type="email" id="email" value={email} />
            <img className="verified" src={Verified} alt="verified" />
          </StyledInput>
          <StyledInput>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onInput={handlePasswordInput}
            />
          </StyledInput>
          <LoginButton disabled={disabled} type="submit">
            로그인
          </LoginButton>
        </form>
      </LoginContent>
    </>
  );
};

Login.propTypes = {
  email: string.isRequired,
};
export default Login;
