import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import DemoPage from './products/new/products-table/page';

function HomePage() {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">NestJS + Next.js Project!</h1>
        <Link href="/products/new" className={buttonVariants()}>Create Product</Link>
      </div>
      <DemoPage />
    </div>
  );
}

export default HomePage;