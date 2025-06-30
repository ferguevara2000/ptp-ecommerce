"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Heart, Truck, CreditCard } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "/images/products/heavy1.jpg",
    "/images/products/heavy2.png",
    "/images/products/heavy3.jpg",
    "/images/products/heavy 4.webp",
  ]

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <Image
              src={images[selectedImage]}
              alt="TruckPro Heavy Duty Brake Disc"
              width={500}
              height={500}
              className="max-w-md rounded-lg border mx-auto"
            />
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={image}
                  alt={`TruckPro Brake Disc ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              New
            </Badge>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              TruckPro Heavy Duty Brake Disc HDX123 430mm
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">(87 reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">$320</span>
              <span className="text-lg text-gray-500 line-through">$365</span>
              <Badge variant="destructive">12% OFF</Badge>
            </div>
            <p className="text-sm text-green-600 font-medium">Free shipping in 2 days</p>
          </div>

          {/* Compatibility */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Compatibility:</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge>Kenworth</Badge>
                <Badge>Freightliner</Badge>
                <Badge>Volvo</Badge>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-2">Quantity:</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </Button>
                <span className="px-4 py-2 border rounded">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
                <span className="text-sm text-gray-600 ml-2">(12 in stock)</span>
              </div>
            </div>
          </div>

          {/* Purchase Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">Buy Now</Button>
            <Button variant="outline" className="w-full py-3 bg-transparent">
              Add to Cart
            </Button>
          </div>

          {/* Benefits */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-600">Fast delivery in 2 days</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">Installments Available</p>
                  <p className="text-sm text-gray-600">Up to 6 interest-free payments</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Details */}
      <div className="mt-12 space-y-8">
        {/* Main Specs */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Main Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold mb-4">Specifications</h3>
                {[
                  ["Brand", "TruckPro"],
                  ["Model", "HDX123"],
                  ["Material", "Ventilated Cast Iron"],
                  ["Size", "430mm"],
                  ["Weight", "28 kg"],
                  ["Color", "Industrial Gray"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-600">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold mb-4">Compatibility</h3>
                {[
                  ["Kenworth Trucks", "Yes"],
                  ["Freightliner", "Yes"],
                  ["Volvo", "Yes"],
                  ["Warranty", "1 year"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-600">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <Card>
            <CardContent className="p-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                The TruckPro Heavy Duty Brake Disc HDX123 is engineered to handle the toughest heavy-duty routes, ensuring stable and efficient braking even under high temperatures.
              </p>
              <p>
                Made of ventilated cast iron, this disc offers greater durability and less warping, significantly reducing braking distances and improving your trucks safety on the road.
              </p>
              <p>
                Its 430mm diameter design is compatible with Kenworth, Freightliner, and Volvo trucks, ensuring easy installation in specialized workshops.
              </p>
              <p>
                Ideal for fleet operators seeking to reduce maintenance costs and downtime, this part includes a 1-year warranty for manufacturing defects.
              </p>
              <p>
                Ensure your fleets performance and maintain safety on every route with TruckPro.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
<div className="mt-12">
  <h2 className="text-2xl font-bold mb-6">Related Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {/* Product 1 */}
    <Card className="hover:shadow transition-shadow">
      <CardContent className="p-4">
        <Image
          src="/images/products/heavy-duty.jpeg"
          alt="Truck Brake Pads"
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded mb-3"
        />
        <h3 className="font-medium text-gray-900 mb-1">Truck Brake Pads</h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold text-gray-900">$89</span>
          <span className="text-sm text-gray-500 line-through">$99</span>
          <Badge variant="destructive">10% OFF</Badge>
        </div>
        <Button variant="outline" className="w-full mt-2">
          View Product
        </Button>
      </CardContent>
    </Card>

    {/* Product 2 */}
    <Card className="hover:shadow transition-shadow">
      <CardContent className="p-4">
        <Image
          src="/images/products/heavy-duty.jpeg"
          alt="Heavy-Duty Clutch Disc"
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded mb-3"
        />
        <h3 className="font-medium text-gray-900 mb-1">Heavy-Duty Clutch Disc</h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold text-gray-900">$150</span>
          <span className="text-sm text-gray-500 line-through">$170</span>
          <Badge variant="destructive">12% OFF</Badge>
        </div>
        <Button variant="outline" className="w-full mt-2">
          View Product
        </Button>
      </CardContent>
    </Card>

    {/* Product 3 */}
    <Card className="hover:shadow transition-shadow">
      <CardContent className="p-4">
        <Image
          src="/images/products/heavy-duty.jpeg"
          alt="Truck LED Light Kit"
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded mb-3"
        />
        <h3 className="font-medium text-gray-900 mb-1">Truck LED Light Kit</h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold text-gray-900">$45</span>
          <span className="text-sm text-gray-500 line-through">$55</span>
          <Badge variant="destructive">18% OFF</Badge>
        </div>
        <Button variant="outline" className="w-full mt-2">
          View Product
        </Button>
      </CardContent>
    </Card>

    {/* Product 4 */}
    <Card className="hover:shadow transition-shadow">
      <CardContent className="p-4">
        <Image
          src="/images/products/heavy-duty.jpeg"
          alt="Truck Air Filter"
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded mb-3"
        />
        <h3 className="font-medium text-gray-900 mb-1">Truck Air Filter</h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold text-gray-900">$30</span>
          <span className="text-sm text-gray-500 line-through">$40</span>
          <Badge variant="destructive">25% OFF</Badge>
        </div>
        <Button variant="outline" className="w-full mt-2">
          View Product
        </Button>
      </CardContent>
    </Card>
  </div>
</div>


        {/* Questions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Questions & Answers</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="border-b pb-4">
                <p className="font-medium mb-2">Is this brake disc compatible with Kenworth T800?</p>
                <p className="text-gray-600 text-sm mb-2">
                  Yes, it is compatible with Kenworth T800 trucks that use 430mm discs.
                </p>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
              <div className="border-b pb-4">
                <p className="font-medium mb-2">What is the warranty for this product?</p>
                <p className="text-gray-600 text-sm mb-2">
                  1-year warranty for manufacturing defects. Does not cover incorrect installation damage.
                </p>
                <span className="text-xs text-gray-500">1 week ago</span>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Ask a question
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reviews */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Product Reviews</h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Review 1 */}
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">John D.</span>
                  <span className="text-xs text-gray-500 ml-auto">3 days ago</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Excellent brake disc, greatly improves stability under heavy loads. Easy to install and arrived on time.
                </p>
              </div>
              {/* Review 2 */}
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Sarah M.</span>
                  <span className="text-xs text-gray-500 ml-auto">1 week ago</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Good quality product, packaging could be stronger. Works perfectly on my Freightliner.
                </p>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Leave a review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
