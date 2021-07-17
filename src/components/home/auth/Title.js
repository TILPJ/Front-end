import styled from 'styled-components';

const StyledTitle = styled.div`
  padding-top: 93px;
  padding-left: 47px;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 41px;
`;

const Title = () => {
  return (
    <StyledTitle>
      로그인 및 회원가입을
      <br />
      시작합니다.
    </StyledTitle>
  );
};

export default Title;
