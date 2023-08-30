import './App.css';
import calculate from './calculate';
import { useInputContext } from './context';

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
  const { totalInput, setTotalInput, splittedInputs } = useInputContext();
  // const [total, setTotal] = useState<string>();
  // const [input, setInput] = useState(0);

  // console.log(eval(totalInput));
  console.log(splittedInputs);
  console.log(splittedInputs[splittedInputs.length - 1]);

  return (
    <div className="app">
      <div id="display">{totalInput ? totalInput : 0}</div>
      <main className="calculator">
        <div className="numpad">
          <NumPad numbersData={numbersData} />
          <button
            onClick={() =>
              // console.log(splittedInputs[splittedInputs.length - 1]);
              setTotalInput(
                // totalInput.charAt(totalInput.length - 1) !== '.'
                splittedInputs[splittedInputs.length - 1].includes('.')
                  ? totalInput
                  : totalInput + '.'
              )
            }
            id="decimal">
            .
          </button>
          <button
            onClick={() => setTotalInput(calculate(totalInput))}
            id="equals">
            =
          </button>
        </div>
        <div className="operators">
          <button onClick={() => setTotalInput(totalInput + '/')} id="divide">
            /
          </button>
          <button onClick={() => setTotalInput(totalInput + '*')} id="multiply">
            *
          </button>
          <button onClick={() => setTotalInput(totalInput + '-')} id="subtract">
            -
          </button>
          <button onClick={() => setTotalInput(totalInput + '+')} id="add">
            +
          </button>
        </div>
      </main>
      <div>
        <button onClick={() => setTotalInput('')} id="clear">
          A/C
        </button>
      </div>
    </div>
  );
}

function NumberButton({ number, id }: { number: number; id: string }) {
  const { totalInput, setTotalInput } = useInputContext();

  return (
    <button
      onClick={() => {
        if (totalInput === '' && number === 0) return;
        setTotalInput(totalInput + String(number));
      }}
      id={id}>
      {number}
    </button>
  );
}

function NumPad({ numbersData }: { numbersData: NumberData[] }) {
  return (
    <>
      {numbersData.map((numberData, index) => (
        <NumberButton key={index} {...numberData} />
      ))}
    </>
  );
}
