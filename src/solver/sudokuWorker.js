import sudoku from './sudoku-solver';

const setUpWorker = () => {
  const sudokuString = sudoku.toString();
  const workerString = sudokuString.substring(
    sudokuString.indexOf('{') + 1,
    sudokuString.lastIndexOf('}'),
  );

  const onmessage = `var onmessage = (e) => {
      postMessage(solve(e.data));
    };`;

  return `${workerString};
  ${onmessage}`;
};

export default setUpWorker;
