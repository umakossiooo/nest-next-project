'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { createProduct, updateProduct } from "../products.api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface ProductFormProps {
    product: any;
    id?: number;
}

export function ProductForm({ product, id }: ProductFormProps) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: product?.name || "",
            price: product?.price || "",
        },
    });

    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        if (id) {
            await updateProduct(id, {
                ...data,
                price: parseFloat(data.price),
            });
        } else {
            await createProduct({
                ...data,
                price: parseFloat(data.price),
            });
        }
        router.push("/");
        router.refresh();
    });

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
                <Label>Product name</Label>
                <Input {...register("name")} />

                <Label>Price</Label>
                <Input {...register("price")} />
            </div>

            <Button type="submit">
                {id ? "Update" : "Create"}
            </Button>
        </form>
    );
}
