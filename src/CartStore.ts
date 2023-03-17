import { atom, map } from 'nanostores';
 export  type Product = {
    id: number;
    name: string;
    price: number;
  };

export const ProductName = map<Record<string, Product>>({});