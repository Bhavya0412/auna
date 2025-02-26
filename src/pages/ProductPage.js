import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    // Simulate fetching product data
    fetch("/data/product.json")
      .then((response) => response.json())
      .then((data) => {
        const allCategories = ["the_coffee_arc"];
  
        let foundProduct = null;
  
        for (let category of allCategories) {
          if (data[category]) {
            foundProduct = data[category].find((p) => p.id === id);
            if (foundProduct) break;
          }
        }
  
        if (foundProduct) {
          const mainImage = foundProduct.img_path || "";
          const additionalImages = foundProduct.additional_images || [];
          const allImages = [mainImage, ...additionalImages.filter((img) => img !== mainImage)];
  
          setProduct({ ...foundProduct, additional_images: allImages });
          setSelectedImage(mainImage);
        }
  
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-coffeeDeep">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12 text-coffeeDeep">
        <h2 className="text-2xl font-serif">Product not found</h2>
        <p className="mt-4">The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  // WhatsApp Inquiry Message
  const whatsappMsg = `${window.location.href}
Hello, I hope you're doing well! 
I am interested in the ${product.name} at Rs. ${product.display_price}.
Size: ${product.size}  
I found this on the Auna website and would love to know more details.`;

  const whatsappURL = `https://wa.me/919820380401?text=${encodeURIComponent(whatsappMsg)}`;

  const handleInstagramInquiry = () => {
    const message = `${window.location.href}
Hello, I hope you're doing well! 
I am interested in the ${product.name} at Rs. ${product.display_price}.
Size: ${product.size}
I found this on the Auna website and would love to know more details.`;
  
    navigator.clipboard.writeText(message).then(() => {
      alert("Message copied! Now paste it in Instagram chat.");
      window.open("https://www.instagram.com/direct/t/17845145331390942", "_blank");
    });
  };

  // const handleQuantityChange = (change) => {
  //   const newQuantity = quantity + change;
  //   if (newQuantity > 0) {
  //     setQuantity(newQuantity);
  //   }
  // };

  // const toggleWishlist = () => {
  //   setWishlist(!wishlist);
  // };

  return (
    <section className="py-16 bg-white text-coffeeDeep">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery Section */}
          <div className="relative">
            <div className="mb-6 rounded-lg overflow-hidden shadow-md border border-coffeeTan">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="grid grid-cols-5 gap-3">
              {product.additional_images.map((img, i) => (
                <div 
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-300
                  ${selectedImage === img ? 'border-coffeeDeep' : 'border-coffeeTan opacity-70 hover:opacity-100'}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i+1}`}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-serif mb-2 text-coffeeDeep">{product.name}</h1>
            
            <div className="mb-4 font-light text-lg">{product.description}</div>
            
            {/* Price Section */}
            <div className="flex items-baseline space-x-3 my-4">
              <span className="text-2xl font-medium text-oliveGreen">
                Rs. {product.display_price}
              </span>
              <span className="text-lg line-through text-mochaBrown opacity-70">
                Rs. {product.og_price}
              </span>
              <span className="text-sm text-oliveGreen">
                {Math.round(((product.og_price - product.display_price) / product.og_price) * 100)}% OFF
              </span>
            </div>

            <p className="mb-6 text-mochaBrown">{product.product_detail}</p>

            {/* Product Specifications */}
            <div className="bg-beige border border-coffeeTan rounded-lg p-6 mb-8">
              <h3 className="font-serif text-xl mb-4 text-coffeeDeep border-b border-coffeeTan pb-2">Product Details</h3>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center">
                  <span className="font-medium w-1/3">Material:</span>
                  <span className="text-mochaBrown">{product.fabric}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium w-1/3">Dimensions:</span>
                  <span className="text-mochaBrown">{product.size} cm</span>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium w-1/3">Additional:</span>
                  <span className="text-mochaBrown">{product.additional_details}</span>
                </div>
              </div>
            </div>


            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-coffeeTan hover:bg-coffeeDeep text-cream font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
              >
                Enquire on WhatsApp
              </a>

              <button
                onClick={handleInstagramInquiry}
                className="w-full sm:w-auto bg-mochaBrown hover:bg-coffeeDeep text-cream font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
              >
                Enquire on Instagram
              </button>
            </div>

            {/* Share Button */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: product.name,
                      text: `Check out this beautiful ${product.name} from Auna's Coffee Arc Collection!`,
                      url: window.location.href,
                    })
                    .catch((error) => console.error("Error sharing:", error));
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="flex items-center justify-center mt-6 py-2 text-coffeeDeep hover:text-oliveGreen transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faShareAlt} className="mr-2" /> 
              Share this Product
            </button>

            {/* Additional Info */}
            <div className="mt-8 text-sm text-mochaBrown italic border-t border-coffeeTan pt-4">
              <p className="mt-1">Colors may slightly vary due to photography lighting and screen resolution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;