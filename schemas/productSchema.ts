import { z } from "zod";

function validateImage(file: unknown) {
  if (!file) return true;

  // Se vier como FileList
  if (file instanceof FileList) {
    file = file[0];
  }

  const isValid = file instanceof File && file.type?.startsWith("image/");

  return isValid;
}

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
  image: z.any().optional().refine(validateImage, {
    message: "Envie um arquivo de imagem válido",
  }),
});

export type ProductFormData = z.infer<typeof productSchema>;
