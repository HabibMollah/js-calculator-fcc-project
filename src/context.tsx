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
};

type ContextProviderProps = {
  children: ReactNode;
};

const InputContext = createContext<InputContextType | null>(null);

export function InputContextProvider({ children }: ContextProviderProps) {
  const [totalInput, setTotalInput] = useState('');

  let splittedInputs;

  try {
    splittedInputs = totalInput.split(/[*/+-]/);
  } catch (error) {
    splittedInputs = [''];
  }

  return (
    <InputContext.Provider
      value={{ totalInput, setTotalInput, splittedInputs }}>
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
