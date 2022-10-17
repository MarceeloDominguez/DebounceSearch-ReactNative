import { useEffect, useState } from "react";

export const useDebounceValue = (valueInput, time = 3000) => {
  const [debouncedValue, setDebouncedValue] = useState(valueInput);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(valueInput);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [valueInput]);

  return debouncedValue;
};
