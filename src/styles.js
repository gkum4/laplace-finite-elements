import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  position: relative;
  min-height: 100vh;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: #fff;
  padding: 15px;

  > h2 {
    margin-bottom: 10px;
  }

  > div { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80px;
    margin-bottom: 5px;

    > label {
      margin-right: 10px;
    }

    > input {
      width: 50px;
    }
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  min-width: 500px;
  min-height: 500px;
  position: relative;
  background-color: #eeeeee;
  outline: 50px solid #eeeeee;
  margin-top: 50px;
`;

export const VerticalLine = styled.div`
  position: absolute;
  width: 3px;
  height: 480px;
  left: 10px;
  bottom: 10px;
  background-color: #050505;

  > strong {
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

  > strong {
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