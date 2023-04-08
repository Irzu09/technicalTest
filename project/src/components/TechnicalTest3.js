import { useState } from 'react';

function TechnicalTest3() {
  const [integer, setInteger] = useState(0);
  const [array, setArray] = useState([]);

  const printInConsole = (integer) => {
    const arr = [...array];

    for (let i = 1; i <= integer; i++) {
      if (i % 3 === 0 && i % 5 === 0) arr.push("fizzbuzz");
      else if (i % 3 === 0) arr.push("fizz");
      else if (i % 5 === 0) arr.push("buzz");
      else arr.push(i);
    }
    setArray(arr);
  };

  console.log(array);

  return (
    <div>
      <input
        value={integer}
        onChange={(e) => setInteger(e.target.value)}
      />
      <button onClick={() => printInConsole(integer)}>Submit</button>
      {array?.map((array, index) => {
        return <div key={index}>{array}</div>
      })}
    </div>
  );
}

export default TechnicalTest3;
