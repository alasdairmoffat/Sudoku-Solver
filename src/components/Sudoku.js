import React, { useState, useEffect } from 'react';
import { useWebWorkerFromScript } from 'react-webworker-hook';
import sudokuGrid from '../solver/sudokuGrid';
import setUpWorker from '../solver/sudokuWorker';

import SolvingOverlay from './SolvingOverlay';
import ErrorMessage from './ErrorMessage';

const Sudoku = () => {
  const initialGrid = Object.fromEntries(sudokuGrid.map((cell) => [cell, '']));

  const [grid, setGrid] = useState(initialGrid);
  const [solving, setSolving] = useState(false);
  const [solution, setSolution] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // set up Web Worker
  const [data, postData] = useWebWorkerFromScript(setUpWorker());

  // call setSolution when worker responds with a solution
  useEffect(() => {
    setSolution(data);
    setSolving(false);
  }, [data]);

  const dismissError = () => {
    setErrorMessage('');
  };

  // if solution === false, no solution exists
  useEffect(() => {
    const showError = (message) => {
      setErrorMessage(message);
      setTimeout(dismissError, 5000);
    };

    if (solution === false) showError('No possible solution');
  }, [solution]);

  // handle user grid input
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

  // solve grid
  const onSubmit = (e) => {
    e.preventDefault();

    setSolving(true);
    postData(grid);
  };

  // reset grid
  const onReset = (e) => {
    e.preventDefault();
    setGrid(initialGrid);
    setSolution(null);
  };

  // allow user to cancel process if solution is taking a long time
  const cancel = () => {
    window.location.reload();
  };

  // use sudokuGrid to generate all 81 cells
  const cells = sudokuGrid.map((cell) => (
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
          autoComplete="off"
        />
      )}
    </td>
  ));

  // seperate each of the 9 rows and wrap in <tr>
  const rows = Array.from(new Array(9), (x, i) => {
    const rowLetter = cells[i * 9].props.id.slice(0, 1);
    return (
      <tr id={rowLetter} key={`row-${rowLetter}`}>
        {cells.slice(i * 9, (i + 1) * 9)}
      </tr>
    );
  });

  return (
    <>
      {solving ? <SolvingOverlay cancel={cancel} /> : null}

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

        {errorMessage ? (
          <ErrorMessage
            errorMessage={errorMessage}
            dismissError={dismissError}
          />
        ) : null}
      </form>
    </>
  );
};

export default Sudoku;
