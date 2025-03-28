import { useRef } from "react";

export const useHorizontalScroll = () => {
  const listRef = useRef();

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 280;
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 280;
    }
  };
  return { listRef, scrollLeft, scrollRight };
};
