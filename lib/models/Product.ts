import mongoose, { Schema } from 'mongoose';
import { ProductProps } from '@/lib/Schemas/productSchema';

const ProductColorsEnum = [
  'black',
  'red',
  'green',
  'yellow',
  'dark-blue',
  'purple',
  'pink',
  'light-blue',
  'orange',
  'white',
];
const ProductSizesEnum = [
  'xs',
  's',
  'm',
  'l',
  'xl',
];
const ProductFabricEnum = [
  'cotton',
  'linen',
  'wool',
  'silk',
  'cashmere',
  'polyester',
];
const ProductTypeEnum = [
  'dress',
  'jacket',
  'coat',
  'pajamas',
  'jeans',
  'hoodie',
  'pants',
];


const ProductSchema = new Schema<ProductProps>({
  id: { type: Number, required: true, unique: true },
  date: { type: String, required: true },
  image: { type: String, required: true }, 
  name: { type: String, required: true },
  colors: [{ type: String, enum: ProductColorsEnum }],
  type: { type: String, enum: ProductTypeEnum, required: true },
  fabric: {type: String, enum: ProductFabricEnum},
  sizes: [{type: String, enum: ProductSizesEnum}],
  price: { type: Number, min: 0 },
  images: {
    type: Map,
    of: [String],
  },
});

export default mongoose.models.Product || mongoose.model<ProductProps>('Product', ProductSchema, 'products');