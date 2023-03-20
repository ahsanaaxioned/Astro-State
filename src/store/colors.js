import { map } from 'nanostores';
const colors = map({
    blue: {
      colors: 'blue',
      hex: '#9bf6ff',
    },
  });

const addColor = (color,hex)=>colors.setKey(color,{color,hex});

export  { colors, addColor };