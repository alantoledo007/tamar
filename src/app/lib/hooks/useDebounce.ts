import { useEffect } from "react";

export default function useDebounce(fn: () => void, delay: number = 300) {
  useEffect(() => {
    const handler = setTimeout(() => {
      fn();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay]);
}
