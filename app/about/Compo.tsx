"use client";

import { useRecoilState } from "recoil";
import { counterState } from "../../states/states";

export default function Compo() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <>
      {" "}
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    </>
  );
}
