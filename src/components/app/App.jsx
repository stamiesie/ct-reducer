import React from 'react';
import { useDispatch, useSelector } from '../../state/provider';



// const useRecord = (init) => {
// const [before, setBefore] = useState([]);
// const [current, setCurrent] = useState(init);
// const [after, setAfter] = useState([]);

// const undo = () => {
// setAfter((after) => [current, ...after]);
// setCurrent(before[before.length - 1]);
// setBefore((before) => before.slice(0, -1));
// };

// const redo = () => {
// setBefore((before) => [...before, current]);
// setCurrent(after[0]);
// setAfter((after) => after.slice(1));
// };

// const record = (val) => {
//   setBefore((before) => [...before, current]);
//   setCurrent(val);
// };

// return {
//   undo,
//   record,
//   redo,
//   current,
// };
// };

function App() {
  const { before, current, after } = useSelector((state) => state);
  const dispatch = useDispatch();

  const undo = () => {
    dispatch({ type: 'UNDO' });
  };

  const redo = () => {
    dispatch({ type: 'REDO' });
  };

 
  // const { current, undo, redo, record } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        type="color"
        value={current}
        onChange={({ target }) => dispatch({
          type: target, 
          payload: target.value })
        }
      />
      <div
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
