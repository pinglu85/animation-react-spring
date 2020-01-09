import { useState, useEffect, useRef } from 'react';
import 'intersection-observer';

export default function useIntersect() {
  const ref = useRef();
  const [entry, updateEntry] = useState({});
  const [io] = useState(
    () => new window.IntersectionObserver(([entry]) => updateEntry(entry))
  );
  useEffect(() => {
    const node = ref.current;
    io.POLL_INTERVAL = 100;
    io.observe(node);
    return () => io.unobserve(node);
  }, [io]);
  return [ref, entry];
}
