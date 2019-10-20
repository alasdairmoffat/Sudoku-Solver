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

const colsList = cols.map((col) => cross(rows, [col]));
const rowsList = rows.map((row) => cross([row], cols));

const colSections = [rows.slice(0, 3), rows.slice(3, 6), rows.slice(6)];
const rowSections = [cols.slice(0, 3), cols.slice(3, 6), cols.slice(6)];

// Create a list of all 9 square sections
const squaresList = colSections.reduce(
  (acc, rowSlice) => acc.concat(rowSections.map((colSlice) => cross(rowSlice, colSlice))),
  [],
);

// A unit refers to a list of cells whose values must contain all 9 digits
const unitList = [...colsList, ...rowsList, ...squaresList];

// Create an oject of form { cell: [ ...units_containing_cell ] }
const units = Object.fromEntries(
  cells.map((cell) => [cell, unitList.filter((unit) => unit.includes(cell))]),
);

// Create an object of form { cell: [ ...cells_whose_value_depends_on_cell ] }
const peers = Object.fromEntries(
  cells.map((cell) => {
    const set = new Set(units[cell].flat());
    set.delete(cell);
    return [cell, [...set]];
  }),
);

function assign(values, cell, digit) {
  /*
    Eliminate all the other values (except digit) from values[cell] and propagate.
    Return values, except return False if a contradiction is detected.
  */

  const otherValues = values[cell].filter((value) => value !== digit);

  if (otherValues.every((value) => eliminate(values, cell, value))) {
    return values;
  }

  return false;
}

function eliminate(values, cell, digit) {
  /*
    Eliminate digit from values[cell]; propagate when values or places <= 2.
    Return values, except return False if a contradiction is detected.
  */

  // Check if already eliminated
  if (!values[cell].includes(digit)) return values;

  values[cell] = values[cell].filter((value) => value !== digit);

  // (1) If a square is reduced to one value then eliminate value from the peers.

  // If no values left we have reached a contradiction.
  if (values[cell].length === 0) {
    return false;
  }

  if (values[cell].length === 1) {
    const value = values[cell][0];

    if (!peers[cell].every((peer) => eliminate(values, peer, value))) {
      return false;
    }
  }

  // (2) If a unit is reduced to only one place for a value, then put it there.

  if (
    !units[cell].every((unit) => {
      const digitPlaces = unit.filter((unitCell) => values[unitCell].includes(digit));

      if (digitPlaces.length === 0) {
        // Contradiction: no place for this value.
        return false;
      }
      if (digitPlaces.length === 1) {
        // digit can only be in one place in unit, assign it there.
        if (!assign(values, digitPlaces[0], digit)) {
          return false;
        }
      }

      return true;
    })
  ) {
    return false;
  }

  return values;
}

function parseGrid(grid) {
  /*
  Convert grid to an Object of possible values, { cell, digits },
  or return false if a contradiction is detected.
  */

  // To start, every square can be any digit; then assign values from grid
  const values = Object.fromEntries(cells.map((cell) => [cell, digits]));

  if (
    !Object.keys(grid).every((cell) => {
      if (grid[cell] === '') return true;

      return assign(values, cell, grid[cell]);
    })
  ) {
    return false;
  }

  return values;
}

function gridValues(grid) {
  /*
  Convert grid into an Object of { cell: value } with '' for empties.
  */

  // check to see if grid is valid
  const re = /^[0-9.]{81}$/;
  if (!re.test(grid)) return false;

  return Object.fromEntries(
    cells.map((cell, i) => [
      cell,
      grid[i] === '0' || grid[i] === '.' ? '' : grid[i],
    ]),
  );
}

function search(values) {
  // Using depth-first search and propagation, try all possible values.

  // Check if failed earlier.
  if (!values) return false;

  // Check if solved.
  if (cells.every((cell) => values[cell].length === 1)) return values;

  // Choose the unfilled square with the fewest possibilities
  const smallestCell = cells
    .filter((cell) => values[cell].length > 1)
    .sort((a, b) => values[a].length - values[b].length)[0];

  return (
    values[smallestCell]
      .map((value) => search(assign({ ...values }, smallestCell, value)))
      .find((e) => !!e) || false
  );
}

function solve(grid) {
  return search(parseGrid(grid));
}

export default { cells, solve };
