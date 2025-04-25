import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  brand: z.string().min(1, "Marca é obrigatória"),
  price: z.coerce.number().positive("Preço deve ser positivo"),
  categories: z.string().min(1, "Categoria é obrigatória"),
  image: z.any().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
