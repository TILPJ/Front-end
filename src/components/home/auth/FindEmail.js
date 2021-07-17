import styled from 'styled-components';
import { StyledTitle, StyledContent } from './auth.styles';

const FindEmailTitle = styled(StyledTitle)`
  font-size: 35px;
`;
const FindEmailContent = styled(StyledContent)``;

const FindEmail = () => {
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
        <div className="findEmailForm">
          {/* <label for="phone">휴대폰번호</label> */}
          <input placeholder="휴대폰 번호('-'제외)" id="phone" />
        </div>
      </FindEmailContent>
    </>
  );
};

export default FindEmail;
