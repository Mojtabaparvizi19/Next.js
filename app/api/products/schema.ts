import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(3),
  price: z.number(),
  category: z.string(),
});

export default productSchema;
