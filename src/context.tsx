import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type InputContextType = {
  totalInput: string;
  setTotalInput: Dispatch<SetStateAction<string>>;
  splittedInputs: string[];
  lastChar: string;
};

type ContextProviderProps = {
  children: ReactNode;
};

const InputContext = createContext<InputContextType | null>(null);

export function InputContextProvider({ children }: ContextProviderProps) {
  const [totalInput, setTotalInput] = useState('');

  function splitInputs() {
    try {
      return totalInput.split(/[*/+-]/);
    } catch (error) {
      return [''];
    }
  }

  const splittedInputs = splitInputs();

  function getLastChar() {
    try {
      return totalInput.charAt(totalInput.length - 1);
    } catch (error) {
      return '';
    }
  }

  const lastChar = getLastChar();

  return (
    <InputContext.Provider
      value={{ totalInput, setTotalInput, splittedInputs, lastChar }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInputContext() {
  const context = useContext(InputContext);

  if (context === null) {
    throw new Error(
      'useInputContext must be used within a InputContextProvider'
    );
  }

  return context;
}
