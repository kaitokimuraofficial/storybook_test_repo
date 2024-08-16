import { useState } from "react";

export const Test = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="an-element">First Element:</label>
        <input
          id="an-element"
          data-testid="an-element"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="other-element">Second Element:</label>
        <input
          id="other-element"
          data-testid="other-element"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="another-element">Third Element:</label>
        <input
          id="another-element"
          data-testid="another-element"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </div>
    </div>
  );
};
