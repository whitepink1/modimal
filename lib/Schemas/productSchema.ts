import * as z from "zod";

const ProductColorsEnum = z.enum(['black', 'red', 'green', 'yellow', 'dark-blue', 'purple', 'pink', 'light-blue', 'orange', 'white']);
const ProductSizesEnum = z.enum(['xs','s','m','l','xl',]);
const ProductFabricEnum = ['cotton','linen','wool','silk','cashmere','polyester',] as const;
const ProductTypeEnum = ['dress','jacket','coat','pajamas','jeans','hoodie','pants'] as const;

type ProductColors = z.infer<typeof ProductColorsEnum>;

const ProductSchema = z.object({
  id: z.number(),
  date: z.string(),
  image: z.string().url(),
  name: z.string().min(1, 'Product name is required'),
  colors: z.array(ProductColorsEnum),
  type: z.enum(ProductTypeEnum, {message: 'Type must be one of the ProductType list.'}),
  fabric: z.enum(ProductFabricEnum, { message: 'Fabric must be one of: cotton, linen, wool, silk, cashmere, polyester' }),
  sizes: z.array(ProductSizesEnum),
  price: z.number().positive('Price must be positive'),
  images: z.record(z.string(), z.array(z.string().url())) 
    .refine((imgs) => {
      const colors = Object.keys(imgs);
      return colors.every((color) => ProductColorsEnum.options.includes(color as ProductColors));
    }, 'All image colors must match product colors')
    .optional(),
});

export type ProductProps = z.infer<typeof ProductSchema>;

export const parseProducts = (data: unknown): ProductProps[] => {
  return z.array(ProductSchema).parse(data);
};