import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment {count}
      </button>
    </div>
  );
}

export default Count;
