// /app/product/[slug]/head.tsx

import type { Metadata } from 'next';
import { fetchProductBySlug } from './page';

interface HeadProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: HeadProps): Promise<Metadata> {
  // Fetch para obtener datos del producto (ejemplo)
  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Producto no encontrado',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}
