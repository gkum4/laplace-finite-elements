import { inv, multiply } from 'mathjs';

const transformMatrixFromLine = (matrix) => {
  const newMatrix = [];

  for (let i = 0; i < matrix.length; i+=1) {
    newMatrix.push([matrix[i]]);
  }

  return newMatrix;
}

const multiplyMatrixLineByColumn = (matrix1, matrix2) => {
  let newMatrix = [];

  for (let i = 0; i < matrix1.length; i+=1) {
    let line = [];

    for (let j = 0; j < matrix2.length; j += 1) {
      line.push(matrix1[i] * matrix2[j][0]);
    }

    newMatrix.push(line);
  }

  return newMatrix;
}

const sumMatrixs = (matrix1, matrix2) => {
  let newMatrix = [];

  for (let i = 0; i < matrix1.length; i+=1) {
    let line = [];

    for (let j = 0; j < matrix2.length; j += 1) {
      line.push(matrix1[i][j] + matrix2[i][j]);
    }

    newMatrix.push(line);
  }

  return newMatrix;
}

const divideMatrixByNumber = (matrix, number) => {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i+=1) {
    let line = [];

    for (let j = 0; j < matrix.length; j += 1) {
      line.push(matrix[i][j] / number);
    }

    newMatrix.push(line);
  }

  return newMatrix;
}

const laplaceFiniteElements = (
  numberOfNodes, // ND - Number
  numberOfElements, // NE - Number
  numberOfFixNodes, // NP - Number
  elementNodesMatrix, // NL - []
  xCoordinateForNodesMatrix, // X - []
  yCoordinatesForNodesMatrix, // Y - []
  nodesWithPreEstablishedPotentialNumbersMatrix, // NDP - []
  potentialForPreEstablishedValuesMatrix, // VAL - []
) => {
  const rightSideMatrix = yCoordinatesForNodesMatrix.map(() => 0); // B
  const globalRigidityMatrix = yCoordinatesForNodesMatrix.map(() => yCoordinatesForNodesMatrix.map(() => 0)); // C

  // iteração com todos os triângulos internos
  for (let i = 0; i < numberOfElements; i+=1) {
    let xLocalCoordinates = []; // XL
    let yLocalCoordinates = []; // YL

    let K = elementNodesMatrix[i];
    // Coordenadas dos nós do triângulo
    xLocalCoordinates.push(xCoordinateForNodesMatrix[K[0]-1]);
    xLocalCoordinates.push(xCoordinateForNodesMatrix[K[1]-1]);
    xLocalCoordinates.push(xCoordinateForNodesMatrix[K[2]-1]);
    yLocalCoordinates.push(yCoordinatesForNodesMatrix[K[0]-1]);
    yLocalCoordinates.push(yCoordinatesForNodesMatrix[K[1]-1]);
    yLocalCoordinates.push(yCoordinatesForNodesMatrix[K[2]-1]);

    let P = [], Q = [];

    P.push(yLocalCoordinates[1] - yLocalCoordinates[2]);
    P.push(yLocalCoordinates[2] - yLocalCoordinates[0]);
    P.push(yLocalCoordinates[0] - yLocalCoordinates[1]);
    Q.push(xLocalCoordinates[2] - xLocalCoordinates[1]);
    Q.push(xLocalCoordinates[0] - xLocalCoordinates[2]);
    Q.push(xLocalCoordinates[1] - xLocalCoordinates[0]);

    const area = 0.5 * Math.abs(P[1]*Q[2] - Q[1]*P[2]);

    // matriz de coeficientes do triângulo (3x3)
    const coeficientMatrix = divideMatrixByNumber(
      sumMatrixs(
        multiplyMatrixLineByColumn(P, transformMatrixFromLine(P)),
        multiplyMatrixLineByColumn(Q, transformMatrixFromLine(Q))
      ), 
      4*area
    ); // CE

    // iteração com os nós do triângulo
    for (let j = 0; j < 3; j+=1) {
      const IR = elementNodesMatrix[i][j]-1; // numeração do nó do triângulo (ex.: 7)
      let IFLAG1 = 0;

      // iteração com todos os nós fixos (potencial pré estabelecido)
      for (let k = 0; k < numberOfFixNodes; k+=1) {

        // condicional para verificar se nó pertence ao grupo dos nós fixos
        if (IR === nodesWithPreEstablishedPotentialNumbersMatrix[k]-1) {
          globalRigidityMatrix[IR][IR] = 1.0;
          rightSideMatrix[IR] = potentialForPreEstablishedValuesMatrix[k];
          IFLAG1 = 1;
        }
      }

      // condicional para caso o nó IR não for um nó fixo
      if (IFLAG1 === 0) {

        // iteração com os nós do triângulo
        for (let l = 0; l < 3; l+=1) {
          const IC = elementNodesMatrix[i][l]-1; // numeração do nó do triângulo (ex.: 7)
          let IFLAG2 = 0;

          // iteração com todos os nós fixos (potencial pré estabelecido)
          for (let k = 0; k < numberOfFixNodes; k+=1) {

            // condicional para verificar se nó IC pertence ao grupo dos nós fixos
            if (IC === nodesWithPreEstablishedPotentialNumbersMatrix[k]-1) {
              
              // subtrai da matriz B no ponto de IR o valor do potencial pré estabelecido vezes o coeficiente local
              rightSideMatrix[IR] = rightSideMatrix[IR] - coeficientMatrix[j][l] * potentialForPreEstablishedValuesMatrix[k];
              IFLAG2 = 1;
            }
          }

          // condicional para caso o nó IC não for um nó fixo
          if (IFLAG2 === 0) {
            globalRigidityMatrix[IR][IC] = globalRigidityMatrix[IR][IC] + coeficientMatrix[j][l];
          }
        }
      }
    }
  }

  let V = multiply(inv(globalRigidityMatrix), rightSideMatrix);
  V = V.map(item => item.toFixed(4));

  const answerArr = [];

  for (let i = 0; i < numberOfNodes; i+=1) {
    answerArr.push({
      X: xCoordinateForNodesMatrix[i],
      Y: yCoordinatesForNodesMatrix[i],
      potential: V[i],
    })
  }

  return answerArr;
}

export default laplaceFiniteElements;