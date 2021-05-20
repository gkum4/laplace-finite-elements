import React, { useEffect, useState } from 'react';

import { ND, NDP, NE, NL, NP, VAL, X, Y } from './utils/inputData';
import laplaceFiniteElements from './utils/laplaceFiniteElements';
import GraphPoint from './components/GraphPoint';
import { 
  Container, 
  Section,
  InformationContainer,
  GraphContainer, 
  VerticalLine, 
  TriangleUp, 
  TriangleRight, 
  HorizontalLine,
} from './styles';

function App() {
  const [pointX, setPointX] = useState('');
  const [pointY, setPointY] = useState('');
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
      {/* <Section>
        <InformationContainer>
          <h2>Digite aqui um ponto para descobrir seu potencial:</h2>
          <div>
            <label>X:</label>
            <input value={pointX} type="number" onChange={(e) => setPointX(e.target.value)} />
          </div>
          <div>
            <label>Y:</label>
            <input value={pointY} type="number" onChange={(e) => setPointY(e.target.value)} />
          </div>
          <button type="button">Verificar</button>
        </InformationContainer>
      </Section> */}

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
            <GraphPoint key={index} data={item} />
          ))}
        </GraphContainer>
      </Section>
    </Container>
  );
}

export default App;
