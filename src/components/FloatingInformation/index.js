import React from 'react';

import { Container, TriangleInverted } from './styles';

const FloatingInformation = ({ visible, data }) => {
  return (
    <Container visible={visible} >
      <p>X: <strong>{data.X%1 === 0 ? data.X+'.0' : data.X}</strong></p>
      <p>Y: <strong>{data.Y%1 === 0 ? data.Y+'.0' : data.Y}</strong></p>
      <p>Potencial: <strong>{data.potential}V</strong></p>
      <TriangleInverted />
    </Container>
  )
}

export default FloatingInformation;