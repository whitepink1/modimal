import { z } from 'zod';

const ProductColorsEnum = z.enum([
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
]);
const ProductTypeEnum = ['dress','jacket','coat','pajamas','jeans','hoodie','pants'] as const;

const ProductSummarySchema = z.object({
  id: z.number(),
  date: z.string(),
  name: z.string(),
  type: z.enum(ProductTypeEnum),
  price: z.number().positive(),
  colors: z.array(ProductColorsEnum),
  image: z.string().url(),
});

export type ProductSummary = z.infer<typeof ProductSummarySchema>;
export const parseProductSummaries = (data: unknown): ProductSummary[] => {
  return z.array(ProductSummarySchema).parse(data);
};