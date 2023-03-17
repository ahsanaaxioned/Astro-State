import { useStore } from '@nanostores/react';
import { setCount } from '../countStore';

export default function CartFlyout() {
    const count = useStore(setCount);

  return <p>{count}</p>
}