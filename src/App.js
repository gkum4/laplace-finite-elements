import React, { useEffect, useState } from 'react';

import { ND, NDP, NE, NL, NP, VAL, X, Y } from './utils/inputData';
import laplaceFiniteElements from './utils/laplaceFiniteElements';
import { 
  Container, 
  GraphContainer, 
  VerticalLine, 
  TriangleUp, 
  TriangleRight, 
  HorizontalLine,
  GraphPoint
} from './styles';

function App() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    setPoints(laplaceFiniteElements(
      ND,
      NE,
      NP,
      NL,
      X,
      Y,
      NDP,
      VAL
    ));
  }, []);

  return (
    <Container>
      <GraphContainer>
        <VerticalLine>
          <TriangleUp />
          <p>Y</p>
        </VerticalLine>
        <HorizontalLine>
          <TriangleRight />
          <p>X</p>
        </HorizontalLine>
        {points.length !== 0 && points.map((item, index) => (
          <GraphPoint key={index}  x={item.x*450+4.5} y={item.y*450+4.5}/>
        ))}
      </GraphContainer>
    </Container>
  );
}

export default App;
