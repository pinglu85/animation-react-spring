import { useRef, useState, useEffect } from 'react';
import 'intersection-observer';

export default function useIntersect({
  triggerOnce,
  root = null,
  rootMargin,
  threshold
}) {
  const refs = useRef([]);
  const addToRefs = el => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
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
    const nodes = refs.current;
    nodes.forEach(node => {
      io.POLL_INTERVAL = 100;
      io.observe(node);
    });
    return () =>
      nodes.forEach(node => {
        io.unobserve(node);
      });
  }, [io]);
  return [addToRefs, state.inView, state.entry];
}
