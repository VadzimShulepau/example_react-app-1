import { useEffect, useState } from "react";

const getStorageValue = (key, defaultValue) => {
  const currentState = localStorage.getItem(key);
  const state = JSON.parse(currentState);
  return state || defaultValue;
};

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]
};

export default useLocalStorage;

