import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #CFCFCF;
  padding: 5px;
  position: absolute;
  top: -99px;
  left: 0px;
  width: 150px;
  height: 80px;
  justify-content: center;
  z-index: 10;

  ${({ visible }) => !visible && css`
    visibility: hidden;
  `}
`;

export const TriangleInverted = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 14px solid #CFCFCF;
  bottom: -14px;
  left: 0px;
  transform: rotate(180deg);
`;