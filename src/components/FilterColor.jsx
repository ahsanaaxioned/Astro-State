import { useStore } from '@nanostores/react';
import { addColor, colors } from '../store/colors';

const FilterColor = ()=>{
   const colorItems = useStore(colors);
   return(
      <>
      <ul>
         {Object.values(colorItems).map(({color,hex})=>(
            <li key={color} style ={{background:hex}}>{color} {hex}</li>
         ))}
      </ul>
      <button onClick={() => addColor('blue', '#a0c4ff')}>Change blue</button>
      <button onClick={() => addColor('red', '#ffadad')}>Add red</button>
      </>
   )
}

export default FilterColor

