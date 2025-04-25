"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";
import { productSchema, ProductFormData } from "@/schemas/productSchema";
import { createProduct, updateProduct, uploadImage } from "@/lib/data-service";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

type ProductFormProps = Partial<Product>;

export default function ProductForm(product?: ProductFormProps) {
  const router = useRouter();
  const isEditMode = product?.id !== undefined;

  console.log(isEditMode);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name || "",
      brand: product?.brand || "",
      price: product?.price,
      categories: product?.categories || "",
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    try {
      const imageFile = (data.image as FileList)?.[0];
      const imageUrl = imageFile
        ? await uploadImage(imageFile)
        : product?.image || "";

      const payload = {
        ...data,
        image: imageUrl,
        price: data.price,
      };

      if (isEditMode && product?.id) {
        await updateProduct(product.id, payload);
        alert("Produto atualizado com sucesso!");
      } else {
        await createProduct(payload);
        alert("Produto criado com sucesso!");
      }
      router.push("/");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        {...register("name")}
        id="name"
        label="Nome do Produto"
        type="text"
        error={errors.name?.message}
      />
      <Input
        {...register("brand")}
        id="brand"
        label="Marca"
        type="text"
        error={errors.brand?.message}
      />
      <Input
        {...register("price")}
        id="price"
        label="Preço"
        type="text"
        error={errors.price?.message}
      />
      <Input
        {...register("categories")}
        id="categories"
        label="Categoria"
        type="text"
        error={errors.categories?.message}
      />
      <Input {...register("image")} id="image" label="Imagem" type="file" />
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
        >
          {isSubmitting
            ? "Salvando..."
            : isEditMode
            ? "Atualizar Produto"
            : "Criar Produto"}
        </button>
      </div>
    </form>
  );
}
