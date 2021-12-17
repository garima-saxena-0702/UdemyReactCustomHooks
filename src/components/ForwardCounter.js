import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(true, 0)
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
