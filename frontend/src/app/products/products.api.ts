export async function getProducts() {
    const data = await fetch('http://localhost:8000/api/products', {
        cache: 'no-store',
    });

    return data.json();
}

export async function createProduct(productData: any) {
    const res = await fetch('http://localhost:8000/api/products/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    const data = await res.json();
    console.log(data);
}

export async function deleteProduct(id: number) {
    const res = await fetch(`http://localhost:8000/api/products/${id}`, {
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
    const res = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    const data = await res.json();
    console.log(data);
}

export async function getProductById(id: number) {
    const res = await fetch(`http://localhost:8000/api/products/${id}`);
    const data = await res.json();
    return data;
}