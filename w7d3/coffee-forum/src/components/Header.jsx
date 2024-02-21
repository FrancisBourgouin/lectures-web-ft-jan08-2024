import { useState } from "react";

export default function Header(props) {
  const [count, setCount] = useState({ value: 1 });

  const handleClick = () => {
    const newObject = { value: count.value + 1 };
    // spreading ...

    // setState => Commit
    setCount(newObject);
  };

  console.log("Hello!", count);

  return (
    <header className="Header">
      <h1>Super Coffee Forum</h1>
      <h2 onClick={handleClick}>{count.value}</h2>
    </header>
  );
}
