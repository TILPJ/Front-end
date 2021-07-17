import styled, { css } from 'styled-components';

export const StyledTitle = styled.div`
  padding-top: 93px;
  padding-left: 47px;
  background-color: #fff;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 41px;
  & > p {
    line-height: 1.3;
  }
  & > p > .stress {
    font-weight: 700;
  }
`;

export const StyledContent = styled.div`
  padding-top: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
`;

export const StyledButton = styled.button`
  width: 312px;
  height: 48px;
  background-color: #f1928b;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  ${props =>
    props.disabled &&
    css`
      background: #dfdfdf;
      cursor: default;
    `}
`;
