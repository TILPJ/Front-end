import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { string } from 'prop-types';
import {
  StyledTitle,
  StyledContent,
  StyledInput,
  StyledButton,
} from './auth.styles';
import { login } from '../../../modules/auth/user';
import Verified from '../../../assets/common/drawer_email-check.svg';

const LoginTitle = styled(StyledTitle)``;
const LoginContent = styled(StyledContent)`
  & > .loginForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const LoginButton = styled(StyledButton)`
  margin-top: 33px;
`;
const LoginInput = styled(StyledInput)``;
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
          <LoginInput>
            <label htmlFor="email">아이디</label>
            <input readOnly type="email" id="email" value={email} />
            <img className="verified" src={Verified} alt="verified" />
          </LoginInput>
          <LoginInput>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onInput={handlePasswordInput}
            />
          </LoginInput>
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
