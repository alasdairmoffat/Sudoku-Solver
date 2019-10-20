import React, { useState } from 'react';
import sudoku from '../solver/sudoku-solver';

const Sudoku = () => {
  const initialGrid = Object.fromEntries(sudoku.cells.map((cell) => [cell, '']));

  const [grid, setGrid] = useState(initialGrid);
  const [solution, setSolution] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;

    // Only allow single characters
    if (value.length > 1) return;
    // only allow digits from 1 through 9
    if (value.charCodeAt(0) < 49 || value.charCodeAt(0) > 57) return;

    const newGrid = { ...grid };

    newGrid[name] = value;
    setGrid(newGrid);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const solvedGrid = sudoku.solve(grid);
    setSolution(solvedGrid);
  };

  const onReset = (e) => {
    e.preventDefault();
    setGrid(initialGrid);
    setSolution(null);
  };

  const cells = sudoku.cells.map((cell) => (
    <td id={cell} key={`cell${cell}`}>
      {solution ? (
        <input
          readOnly
          value={solution[cell]}
          className={grid[cell] ? 'bold' : null}
        />
      ) : (
        <input
          type="number"
          name={cell}
          value={grid[cell]}
          onChange={onChange}
        />
      )}
    </td>
  ));

  const rows = Array.from(new Array(9), (x, i) => {
    const rowLetter = cells[i * 9].props.id.slice(0, 1);
    return (
      <tr id={rowLetter} key={`row-${rowLetter}`}>
        {cells.slice(i * 9, (i + 1) * 9)}
      </tr>
    );
  });

  return (
    <form>
      <table>
        <tbody>{rows}</tbody>
      </table>
      {solution ? (
        <button type="button" className="btn-reset" onClick={onReset}>
          Reset
        </button>
      ) : (
        <button type="submit" className="btn-submit" onClick={onSubmit}>
          Solve
        </button>
      )}
    </form>
  );
};

export default Sudoku;
