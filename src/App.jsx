import { useEffect, useState } from 'react'

const useInterval = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const value = setInterval(()=>{
      setCount(count=>count+1)
    },1000)
    return () => {
      clearInterval(value);
    };
  }, []);

  return count;
};

function App() {
  const count = useInterval();

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App