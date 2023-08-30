export default function calculate(inputs: string) {
  try {
    eval(inputs);
  } catch (error) {
    return `Error: ${error}`;
  }
}
