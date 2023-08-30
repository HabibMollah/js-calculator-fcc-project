export default function calculate(inputs: string) {
  try {
    return eval(inputs);
  } catch (error) {
    return `Error: ${error}`;
  }
}
