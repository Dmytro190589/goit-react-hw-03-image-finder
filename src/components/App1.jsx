import { useState } from 'react';

import css from './app.module.css';

const App1 = () => {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(true);
  const showFlag = () => setFlag(flag => !flag);
  return (
    <div className={css.divchyk}>
      {flag && <p>{counter}</p>}
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
      <button type="button" onClick={showFlag}>
        Show
      </button>
    </div>
  );
};
export default App1;
