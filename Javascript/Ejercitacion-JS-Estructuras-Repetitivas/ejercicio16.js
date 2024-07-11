// 16. En 1994 el país A tiene una población de 25 millones de habitantes y el país B de 19.9 millones. Las
// tasas de crecimiento de la población son de 2% y 3% respectivamente. Desarrollar un algoritmo para
// informar en que año la población del país B supera a la de A.

let paisA = 25
let paisB = 19.9
let año = 1994

while (paisA >= paisB) {
  año += 1
  paisA = paisA * (1 + 0.02)
  paisB = paisB * (1 + 0.03)
}

console.log(
  `El país B (población: ${paisB}) supero al pais A (población: ${paisB}) en el año ${año}`
)
