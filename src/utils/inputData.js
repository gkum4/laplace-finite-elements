const NE = 25;

const ND = 21;

const NP = 15;

const NL = [
  [1, 2, 7], [2, 8, 7], [2, 3, 8],
  [3, 9, 8], [3, 4, 9], [4, 10, 9],
  [4, 5, 10], [5, 11, 10], [5, 6, 11],
  [7, 8, 12], [8, 13, 12], [8, 9, 13],
  [9, 14, 13], [9, 10, 14], [10, 15, 14],
  [10, 11, 15], [12, 13, 16], [13, 17, 16],
  [13, 14, 17], [14, 18, 17], [14, 15, 18],
  [16, 17, 19], [17, 20, 19], [17, 18, 20],
  [19, 20, 21],
];

const X = [
  0.0, 0.2, 0.4, 0.6, 0.8, 1.0,
  0.0, 0.2, 0.4, 0.6, 0.8,
  0.0, 0.2, 0.4, 0.6,
  0.0, 0.2, 0.4,
  0.0, 0.2,
  0.0,
];

const Y = [
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.2, 0.2, 0.2, 0.2, 0.2,
  0.4, 0.4, 0.4, 0.4,
  0.6, 0.6, 0.6,
  0.8, 0.8,
  1.0,
];

const NDP = [
  1, 2, 3, 4, 5, 6,
  11, 15, 18, 20, 21,
  19, 16, 12, 7,
];

const VAL = [
  0.0, 0.0, 0.0, 0.0, 0.0,
  50.0, 100.0, 100.0, 100.0, 100.0,
  50.0, 0.0, 0.0, 0.0, 0.0,
];

export { NE, ND, NP, NL, X, Y, NDP, VAL };