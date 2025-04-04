import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProductById } from "../products.api";

interface Props {
    params: {
        id: number;
    };
}

export default async function NewProductPage({ params }: Props) {
    const product = await getProductById(params.id);

    return (
        <div className="h-screen flex items-center justify-center">
            <Card>
                <CardHeader className="text-2xl font-bold">
                    {params.id ? "Update Product" : "Create Product"}
                </CardHeader>
                <CardContent>
                    <ProductForm product={product} id={params.id} />
                </CardContent>
            </Card>
        </div>
    );
}
