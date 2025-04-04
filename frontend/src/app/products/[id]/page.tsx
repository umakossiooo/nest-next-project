import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductForm } from "../new/product-form";
import { getProductById } from "../products.api";

interface Props {
    params: {
        id: string;
    };
}

export default async function NewProductPage({ params }: Props) {

    const id = parseInt(params.id, 10);

    const product = await getProductById(id);

    return (
        <div className="h-screen flex items-center justify-center">
            <Card>
                <CardHeader className="text-2xl font-bold">
                    {id ? "Update Product" : "Create Product"}
                </CardHeader>
                <CardContent>
                    <ProductForm product={product} id={id} />
                </CardContent>
            </Card>
        </div>
    );
}