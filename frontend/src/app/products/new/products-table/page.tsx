import { Product, columns } from "./colums"
import { DataTable } from "./data-table"
import { getProducts } from "../../products.api"

async function getData(): Promise<Product[]> {
  const products = await getProducts()
  return products.map((product: Product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
  }))
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
