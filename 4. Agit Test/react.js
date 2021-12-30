import { useEffect, useState } from "react";
import "./styles.css";

export default function App(props) {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const incrementCounter1 = () => setCounter1((c) => c + 1);
  const incrementCounter2 = () => setCounter2((c) => c + 1);

  useEffect(() => {
    incrementCounter2();
  }, [props.visible]);

  setInterval(() => {
    setCounter1((c) => c + 1);
  }, 1000);

  return (
    <button onClick={incrementCounter1}>{`${counter1} ${counter2}`}</button>
  );
}