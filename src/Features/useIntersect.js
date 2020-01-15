import { useRef, useState, useEffect } from 'react';
import 'intersection-observer';

export default function useIntersect({
  triggerOnce,
  root = null,
  rootMargin,
  threshold
}) {
  const ref = useRef(null);
  const [state, setState] = useState({
    inView: false,
    entry: undefined
  });
  const [io] = useState(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setState({
            entry: entry
          });
          if (entry.isIntersecting) {
            setState({ inView: true });
          }
          if (entry.isIntersecting && triggerOnce) {
            io.unobserve(entry.target);
          }
        },
        { root, rootMargin, threshold }
      )
  );
  useEffect(() => {
    const node = ref.current;
    io.POLL_INTERVAL = 100;
    io.observe(node);
    return () => io.unobserve(node);
  }, [io]);
  return [ref, state.inView, state.entry];
}
