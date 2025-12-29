import { useState } from "react";

export default function ProductGallery({ images = [] }) {
  // Fallback if images are empty
  const [mainImage, setMainImage] = useState(images[0] || "");

  if (!images.length) {
    return <p>No images available</p>;
  }

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <img
        src={mainImage}
        alt="Product"
        className="main-image"
      />

      {/* Thumbnails */}
      <div className="thumbnail-row">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            className={`thumbnail ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
