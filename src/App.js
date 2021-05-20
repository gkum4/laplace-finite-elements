import React, { useEffect, useState } from 'react';

import { ND, NDP, NE, NL, NP, VAL, X, Y } from './utils/inputData';
import laplaceFiniteElements from './utils/laplaceFiniteElements';
import GraphPoint from './components/GraphPoint';
import { 
  Container, 
  Section,
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
      <Section>
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
            <GraphPoint key={index} data={Object.assign(item, {node: index+1})} />
          ))}
        </GraphContainer>
      </Section>
    </Container>
  );
}

export default App;
