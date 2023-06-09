import { useStore } from '@nanostores/react';
import { setCount } from '../countStore';


const AstroState = () => {
  const count = useStore(setCount);
  
  return (<>
    <p>{count}</p>
    <button onClick={() => setCount.set(count + 1)}>+</button>
    <button onClick={() => setCount.set(count - 1)}>-</button>
    </>
  )
}


export default AstroState