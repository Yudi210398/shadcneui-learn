"use client";

import { useCallback, useState } from "react";
import ChildButton from "./Child";

export default function Parents() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("anak di klick");
  }, []);
  console.log(`parent render`);
  return (
    <div>
      <ChildButton onClick={handleClick} />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
