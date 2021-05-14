import React, { useState } from 'react';

import FloatingInformation from '../FloatingInformation';
import { Container } from './styles';

const GraphPoint = ({ data }) => {
  const [informationVisible, setInformationVisible] = useState(false);
  console.log(data)

  return (
    <Container 
      onMouseEnter={() => setInformationVisible(true)} 
      onMouseLeave={() => setInformationVisible(false)}
      X={data.X * 430 + 4}
      Y={data.Y * 430 + 4}
    >
      <FloatingInformation visible={informationVisible} data={data} />
      <p>{data.X%1 === 0 ? data.X+'.0' : data.X}</p>
      <p>{data.Y%1 === 0 ? data.Y+'.0' : data.Y}</p>
    </Container>
  );
}

export default GraphPoint;