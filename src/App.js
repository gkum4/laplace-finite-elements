import React, { useEffect, useState } from 'react';

import { ND, NDP, NE, NL, NP, VAL, X, Y } from './utils/inputData';
import laplaceFiniteElements from './utils/laplaceFiniteElements';
import GraphPoint from './components/GraphPoint';
import { 
  Container, 
  GraphContainer, 
  VerticalLine, 
  TriangleUp, 
  TriangleRight, 
  HorizontalLine,
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
          <strong>Y</strong>
        </VerticalLine>
        <HorizontalLine>
          <TriangleRight />
          <strong>X</strong>
        </HorizontalLine>
        {points.length !== 0 && points.map((item, index) => (
          <GraphPoint key={index} data={item} />
        ))}
      </GraphContainer>
    </Container>
  );
}

export default App;
