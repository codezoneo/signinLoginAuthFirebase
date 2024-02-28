import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from backend based on productId
    // Example:
    // fetch(`https://example.com/api/products/${productId}`)
    //   .then(response => response.json())
    //   .then(data => setProduct(data))
    //   .catch(error => console.error('Error fetching product:', error));

    // For demonstration purposes, simulate product data
    const simulatedProductData = {
      id: productId,
      name: "Product Name",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
      reviews: [
        { id: 1, user: "User1", comment: "Review comment 1" },
        { id: 2, user: "User2", comment: "Review comment 2" },
        { id: 3, user: "User3", comment: "Review comment 3" },
      ],
    };
    setProduct(simulatedProductData);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <h3>Product Images</h3>
      <div>
        {product.images.map((image) => (
          <img
            key={image}
            src={image}
            alt="Product"
            style={{ width: "200px", margin: "5px" }}
          />
        ))}
      </div>
      <h3>Reviews</h3>
      <ul>
        {product.reviews.map((review) => (
          <li key={review.id}>
            {review.user}: {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
