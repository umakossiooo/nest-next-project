import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getProductById } from "../products.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
    params: {
        id: string; // `id` is passed as a string in dynamic routes
    };
}

export default async function ProductDetailsPage({ params }: Props) {
    // Parse `params.id` as a number
    const id = parseInt(params.id, 10);

    // Fetch the product data
    const product = await getProductById(id);

    if (!product) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Card>
                    <CardHeader className="text-2xl font-bold text-red-500">
                        Product Not Found
                    </CardHeader>
                    <CardContent>
                        <Link href="/">
                            <Button variant="outline" className="mt-4">
                                Go to Home
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader className="text-2xl font-bold">
                    {product.name}
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <strong>Price:</strong>{" "}
                            <span>
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(product.price)}
                            </span>
                        </div>
                        <div>
                            <strong>Category:</strong> <span>{product.category}</span>
                        </div>
                        <div>
                            <strong>Description:</strong>{" "}
                            <span>{product.description}</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link href="/" className={buttonVariants()}>
                            Go back
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}