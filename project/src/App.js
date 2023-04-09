import { useState } from 'react';
// import styles from './App.css';
import TechnicalTest1 from './components/TechnicalTest1';
import TechnicalTest3 from './components/TechnicalTest3';

function App() {
  const [page, setPage] = useState(true);

  return (
    <>
      <button onClick={() => setPage(true)} className='mr-2'>Technical Test 1</button>
      <button onClick={() => setPage(false)}>Technical Test 3</button>
      <div className='m-3'>
        {page ? <TechnicalTest1 /> : <TechnicalTest3 />}
      </div>
    </>
  );
}

export default App;
