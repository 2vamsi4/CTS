import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/productService";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import '../ui/product.css';

export default function ProductPage() {
  const { id } = useParams(); // dynamic product id

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productNow = getProductById(Number(id));
    console.log(productNow);
    setProduct(productNow[0]);
    setLoading(false);
  }, [id]);

  if (loading) return <h2>Loading product...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <section className="product-page">
      <div className="product-section">
        <ProductGallery images={product.images || []} />
        <ProductInfo product={product} />
      </div>

      <ProductTabs product={product} />
    </section>
  );
}
