import { useState } from 'react';
import './App.css';

type NumberData = {
  number: number;
  id: string;
};

const numbersData: NumberData[] = [
  { number: 7, id: 'seven' },
  { number: 8, id: 'eight' },
  { number: 9, id: 'nine' },
  { number: 4, id: 'four' },
  { number: 5, id: 'five' },
  { number: 6, id: 'six' },
  { number: 1, id: 'one' },
  { number: 2, id: 'two' },
  { number: 3, id: 'three' },
  { number: 0, id: 'zero' },
];

export default function App() {
  const [total, setTotal] = useState();
  // const [input, setInput] = useState(0);

  return (
    <div className="app">
      <textarea id="display" defaultValue={0} disabled>
        {total}
      </textarea>
      <main className="calculator">
        <div className="numpad">
          <NumPad numbersData={numbersData} />
          <button id="decimal">.</button>
          <button id="equals">=</button>
        </div>
        <div className="operators">
          <button id="divide">/</button>
          <button id="multiply">*</button>
          <button id="subtract">-</button>
          <button id="add">+</button>
        </div>
      </main>
      <div>
        <button id="clear">A/C</button>
      </div>
    </div>
  );
}

function NumberButton({ number, id }: { number: number; id: string }) {
  return <button id={id}>{number}</button>;
}

function NumPad({ numbersData }: { numbersData: NumberData[] }) {
  return (
    <>
      {numbersData.map((numberData) => (
        <NumberButton {...numberData} />
      ))}
    </>
  );
}
