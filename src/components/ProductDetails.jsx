export default function ProductDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6 h-100vh">
      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 grid md:grid-cols-2 gap-6">
        
        {/* Left: Product Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Product"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">Awesome Product</h1>

          {/* Price */}
          <p className="text-xl text-green-600 font-semibold mb-4">$49.99</p>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            This is a detailed description of the product. It highlights all the 
            features, benefits, and specifications that make this product a 
            must-have for customers. You can customize this content to match 
            your actual product details.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
              Buy Now
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
