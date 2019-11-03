function cross(A, B) {
  /*
A = 'abc'
B = '123'
cross(A, B) = [
  'a1', 'a2', 'a3',
  'b1', 'b2', 'b3',
  'c1', 'c2', 'c3',
]
*/
  return A.reduce((acc, a) => acc.concat(B.map((b) => a + b)), []);
}

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const cols = [...digits];
const cells = cross(rows, cols);

export default cells;
