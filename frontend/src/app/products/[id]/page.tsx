import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductById } from "../products.api";
import Link from "next/link"; // Updated import
import { buttonVariants } from "@/components/ui/button";

interface Props {
    params: {
        id: number;
    }
}

async function ProductDetailPage({ params }: Props) {
    console.log(params);
    const product = await getProductById(params.id);
    return (
        <div className="h-screen flex items-center justify-center">
            <Card className="w-96">
                <CardHeader className="flex items-center justify-between">
                    <CardTitle>Product Detail {product.id}</CardTitle>
                    <Link href="/" className={buttonVariants()}>Go back</Link>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-lg">Price: ${product.price}</p>
                </CardContent>
            </Card>
        </div>
    );

}

export default ProductDetailPage;