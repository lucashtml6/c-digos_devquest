let compras = [
  { item: "mouse gamer", preco: 200.00, id:"FDS094"},
  { item: "teclado gamer", preco: 300.00, id:"RFS456"},
  { item: "headset", preco: 600.00, id:"ERG980"},
];
// let subTotal = 0;

// for(let i=0; i < compras.length; i++) {
//   subtotal += compras[i].preco;
// }

let totalCompra = compras.reduce((subTotal, compra) => subTotal + compra.preco, 0);