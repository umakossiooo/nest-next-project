'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { createProduct } from "../products.api"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export function ProductForm() {

    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async(data)  => {
        console.log(data);
        await createProduct({
            ...data,
            price: parseFloat(data.price),
        });
        router.push('/')
        router.refresh();
    })

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
                <Label>Product name</Label>
                <Input {...register("name")} />

                <Label>Price</Label>
                <Input {...register("price")} />
            </div>

            <Button >Create Product</Button>
        </form>
    )
}
