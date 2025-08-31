import { useState, useCallback } from "react";

/**
 * Custom hook for managing input state.
 * @param {string} defaultValue - The initial value of the input.
 * @param {function} [onChange] - Optional custom onChange handler.
 * @returns {[string, function, function, function]} [value, setValue, handleChange, reset]
 */
const useInput = (defaultValue = "", onChange) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
      if (onChange) onChange(e);
    },
    [onChange]
  );

  const reset = useCallback(() => setValue(defaultValue), [defaultValue]);

  return [value, setValue, handleChange, reset];
};

export default useInput;
