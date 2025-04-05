const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProducts() {
    const data = await fetch(`${API_BASE_URL}/products`, {
        cache: 'no-store',
    });

    return data.json();
}

export async function createProduct(productData: any) {
    const res = await fetch(`${API_BASE_URL}/products/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });
    const data = await res.json();
    console.log(data);
}

export async function deleteProduct(id: number) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error(`Failed to delete product with id ${id}`);
    }

    const data = await res.json();
    console.log("Delete response:", data);
    return data;
}

export async function updateProduct(id: number, productData: any) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });

    if (!res.ok) {
        throw new Error(`Failed to update product with id ${id}`);
    }

    return res.json();
}

export async function getProductById(id: number) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
    }
    return res.json();
}