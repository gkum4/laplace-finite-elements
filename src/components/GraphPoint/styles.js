import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: #239393;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  bottom: ${({ Y }) => Y}px;
  left: ${({ X }) => X}px;

  > p {
    &:nth-child(2) {
      position: absolute;
      bottom: ${({ Y }) => -(Y+20)}px;
    }

    &:nth-child(3) {
      position: absolute;
      left: ${({ X }) => -(X+25)}px;
    }
  }
`;