import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  brand: z.string().min(1, "Marca é obrigatória"),
  price: z.coerce
    .number({
      invalid_type_error: "Preço deve ser um número",
    })
    .refine((value) => value > 0, {
      message: "Preço deve ser positivo",
    }),
  categories: z.string().min(1, "Categoria é obrigatória"),
  image: z
    .any()
    .optional()
    .refine(
      (file) => {
        if (!file) return true; // campo opcional
        return file instanceof File && file.type.startsWith("image/");
      },
      { message: "Envie um arquivo de imagem válido" }
    ),
});

export type ProductFormData = z.infer<typeof productSchema>;
