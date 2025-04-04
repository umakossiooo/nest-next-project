'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProductForm } from "./product-form";

function NewProductPage() {

    return (
        <div className="h-screen flex items-center justify-center">
            <Card>
                <CardHeader className="text-2xl font-bold">Create Product</CardHeader>
                <CardContent>
                    <ProductForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default NewProductPage;