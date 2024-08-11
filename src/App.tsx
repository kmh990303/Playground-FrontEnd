import { useState } from "react";
import Com from "./component/Com";
// import Counter from "./component/Counter";
// import Position from "./component/Position";
// import Time from "./component/Time";

function App() {
  const [num, setNum] = useState<number>(0);

  const changeHandler = () => {
    setNum((prevState) => {
      return prevState + 10;
    })
  }

  return (
    <div>
      <Com num={num} setNum={setNum} />
      <button onClick={changeHandler}>Change</button>
    </div>
  );
}

export default App;
