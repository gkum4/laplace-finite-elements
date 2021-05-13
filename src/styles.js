import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
`;

export const GraphContainer = styled.div`
  display: flex;
  width: 550px;
  height: 550px;
  position: relative;
  background-color: #eeeeee;
  margin-top: 100px;
`;

export const VerticalLine = styled.div`
  position: absolute;
  width: 3px;
  height: 480px;
  left: 10px;
  bottom: 10px;
  background-color: #050505;

  > p {
    position: absolute;
    top: -20px;
    left: -5px;
  }
`;

export const HorizontalLine = styled.div`
  position: absolute;
  width: 480px;
  height: 3px;
  left: 10px;
  bottom: 10px;
  background-color: #050505;

  > p {
    position: absolute;
    right: -20px;
    bottom: -5px;
  }
`;

export const TriangleUp = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #050505;
  top: -2px;
  left: -8.5px;
`;

export const TriangleRight = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #050505;
  right: -2px;
  bottom: -8.5px;
  transform: rotate(90deg);
`;

export const GraphPoint = styled.div`
  position: absolute;
  background-color: #239393;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  bottom: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`;