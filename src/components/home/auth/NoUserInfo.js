import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { switchToAuthEntry } from '../../../modules/auth/process';
import { StyledTitle, StyledContent, StyledButton } from './auth.styles';

const NoUserInfoTitle = styled(StyledTitle)``;
const NoUserInfoContent = styled(StyledContent)``;
const NoUserInfoButton = styled(StyledButton)``;

const NoUserInfo = () => {
  const dispatch = useDispatch();
  const handleRegisterButtonClick = () => {
    dispatch(switchToAuthEntry());
  };

  return (
    <>
      <NoUserInfoTitle>
        <p>
          <span className="stress">가입된 정보가</span>
        </p>
        <p>
          <span className="stress">없습니다.</span>
        </p>
      </NoUserInfoTitle>
      <NoUserInfoContent>
        <NoUserInfoButton
          disabled={false}
          type="button"
          onClick={handleRegisterButtonClick}
        >
          회원가입
        </NoUserInfoButton>
      </NoUserInfoContent>
    </>
  );
};

export default NoUserInfo;
