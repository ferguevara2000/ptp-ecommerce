"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ProductImagesProps {
  images: string[]
}

export function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`Product image ${selectedImage + 1}`}
          width={500}
          height={500}
          className="w-full rounded-lg border"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white"
          aria-label="Add to favorites"
        >
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
            aria-label={`Select image ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Thumbnail image ${index + 1}`}
              width={80}
              height={80}
              className="w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
