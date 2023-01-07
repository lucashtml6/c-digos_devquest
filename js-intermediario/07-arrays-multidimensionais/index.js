let matriz = [
  [0, 1, 2, 3, 4], // 0
  [5, 6, 7, 8, 9], // 1
  [9, 8, 7, 6, 5], // 2
  [4, 3, 2, 1, 0]  // 3
// 0  1  2  3  4
];

console.table(matriz);

console.log(matriz[0][4]); // linha 0 coluna 4 [0] => array mais externo [4] array mais interno

// posso ter arrays dentro de arrays infinitamente, para acessar um elemento é só adicionar colchetes com as posições => matriz[0][4][7]